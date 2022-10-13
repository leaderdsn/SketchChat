import constructor from "../modules/constructor";
//import constructor from "~src/modules/constructor";
import EventBus from "../utils/eventBus";
//import EventBus from "~src/utils/eventBus";
import idGenerator from "../utils/myLodash/idGenerator";
//import idGenerator from "~src/utils/myLodash/idGenerator";
import { Nullable, Values } from "~src/utils/types";

type TEvents = Values<typeof Block.EVENTS>;

export default class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  } as const;

  public _id: string;
  protected _element: Nullable<HTMLElement> = null;

  protected readonly props: P;
  public children: Record<string, Block | Block[]> = {};

  private eventBus: () => EventBus<TEvents>;

  public constructor(propsAndChildren?: P) {
    const { children, props } = this._getChildren(propsAndChildren!);
    const eventBus = new EventBus();

    this._id = this.createNewUUID();

    this.children = children;
    this.props = this._makePropsProxy({ ...props, __id: this._id } as unknown as P);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildren(propsAndChildren: Record<string, Block>) {
    const children: Record<string, Block> = {};
    const props: Record<string, Block> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (Array.isArray(value) && value.every((v) => v instanceof Block)) {
        children[key] = value;
      } else if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  private _registerEvents(eventBus: EventBus<TEvents>) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  private _componentDidMount(props: P) {
    this.componentDidMount(props);
    for (let key in this.children) {
      if (Array.isArray(this.children[key])) {
        (this.children[key] as unknown as Block[]).forEach((item) => {
          item.dispatchComponentDidMount();
        });
      } else {
        Object.values(this.children).forEach((child) => {
          if (Array.isArray(child)) {
            child.forEach((item) => {
              item.dispatchComponentDidMount();
            });
          } else {
            child.dispatchComponentDidMount();
          }
        });
      }
    }
  }

  public componentDidMount(_oldProps: P) {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(_oldProps: P, _newProps: P) {
    return true;
  }

  public setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props as {}, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const template = this.render();
    const fragment = this.compile(template, {
      ...this.props,
      ...this.children,
    });
    const newElem = fragment.firstElementChild as HTMLElement;
    this._removeEvents();
    this._element?.replaceWith(newElem);
    this._element = newElem;
    this._addEvents();
  }

  protected render(): string {
    return "";
  }

  public getContent(): HTMLElement {
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
      }
    }

    return this.element!;
  }

  private _makePropsProxy(props: P): any {
    const self = this;

    return new Proxy(props as {}, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: P) {
        const oldTarget = { ...target };
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  private _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events || !this._element) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      this._element!.removeEventListener(eventName, events[eventName]);
    });
  }

  private _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  protected createNewUUID() {
    return this._generateUUID();
  }

  private _generateUUID() {
    return idGenerator();
  }

  protected compile(template: string, context: any) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([key, component]) => {
      if (Array.isArray(component)) {
        let components: string[] = [];
        component.forEach((item) => {
          components.push(`<div data-id="${item._id}"></div>`);
        });
        contextAndStubs[key] = components;
      } else if (component instanceof Block) {
        contextAndStubs[key] = `<div data-id="${component._id}"></div>`;
      }
    });

    const fragment = document.createElement("template");

    fragment.innerHTML = constructor(contextAndStubs, template);

    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.forEach((item) => {
          const stub = fragment.content.querySelector(
            `[data-id="${item._id}"]`
          );
          if (!stub) {
            return;
          }
          item.getContent()?.append(...Array.from(stub.childNodes));
          stub.replaceWith(item.getContent());
        });
      } else {
        const stub = fragment.content.querySelector(
          `[data-id="${component._id}"]`
        );

        if (!stub) {
          return;
        }

        component.getContent()?.append(...Array.from(stub.childNodes));
        stub.replaceWith(component.getContent());
      }
    });

    return fragment.content;
  }

  public show() {
    this.getContent().style.display = "grid";
  }

  public hide() {
    this.getContent().style.display = "none";
  }
}
