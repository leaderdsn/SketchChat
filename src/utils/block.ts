import EventBus from "~src/utils/eventBus";
import constructor from "~src/modules/constructor"
import { Nullable, Values } from "./types";

type TMeta<P = any> = {
  tagName: string
  props: P;
}

type TEvents = Values<typeof Block.EVENTS>

export default class Block<P = any>{
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: "flow:render"
  } as const;

  public _id: string
  private readonly _meta: TMeta;
  protected _element: Nullable<HTMLElement> = null;

  protected readonly props: P;
  protected children: Record<string, Block> = {}

  private eventBus: () => EventBus<TEvents>;

  public constructor(tagName = "div", propsAndChildren?: Record<string, Block>) {
    const { children, props } = this._getChildren(propsAndChildren!);
    
    const eventBus = new EventBus()

    this._meta = {
      tagName,
      props,
    };
    
    
    this._id = this.createNewUUID()
    
    this.children = children;
    this.props = this._makePropsProxy({...props, __id: this._id} as P);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildren(propsAndChildren: Record<string, Block>) {
    const children:Record<string, Block> = {};
    const props:Record<string, Block> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
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

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _init() {
    this._createResources();
    this.init()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}
  
  private _componentDidMount(props: P) {
    this.componentDidMount(props);
    Object.values(this.children).forEach(child => {
      child.dispatchComponentDidMount();
    });
  }
  
  public componentDidMount(oldProps: P) {}
  
  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  
  private _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
  }
  
  protected componentDidUpdate(oldProps: P, newProps: P) {
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
    const block = this.render();
    // const template = this.render();
    // const fragment = this.compile(template, {...this.props, children: this.children})
    //console.log(fragment)
    
    //--this._removeEvents();
    
    // const newElem = fragment.firstElementChild as HTMLElement


    // this._element?.replaceWith(newElem);
    // this._element = newElem;
    //this._element!.innerHTML = block
    this._element!.innerHTML = ''
    this._element!.append(block as unknown as Node);
    this._addEvents();
  }
  
  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  // public getContent(): HTMLElement {
  //   if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
  //     if (this.element?.parentNode?.nodeType !==  Node.DOCUMENT_FRAGMENT_NODE ) {
  //       this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  //     }
  //   }
    
  //   return this.element!;
  // }

  public getContent(): HTMLElement {
    return this.element!;
  }
  
  private _makePropsProxy(props: P): any{
    const self = this;
    
    return new Proxy(props as {}, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: P) {
        const oldTarget = {...target}
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    })
  }
  
  private _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName)
    element.setAttribute('data-id', this._id);
    return element;
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
    return this._generateUUID()
  }

  private _generateUUID() {
    let d = new Date().getTime()
    if (
      typeof performance !== 'undefined' &&
      typeof performance.now === 'function'
    ) {
      d += performance.now()
    }
    const newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
      }
    )
    return newGuid
  }

  protected compile(template: string, context: any) {

    const contextAndStubs = { ...context}

    Object.entries(this.children).forEach(([key, component]) => {
      contextAndStubs[key] = `<div data-id="${component._id}"></div>`
    });


    //const fragment = this._createDocumentElement('template');
    const fragment = document.createElement('template')

    fragment.innerHTML = constructor(contextAndStubs, template);

    Object.entries(this.children).forEach(([_, component])=> {
      const stub = fragment.content.querySelector(`[data-id="${component._id}"]`);

      if (!stub) {
        return;
      }
      stub.replaceWith(component.getContent());
    });

    return fragment.content; 
  }

  public show() {
    this.getContent().style.display = "block";
  }

  public hide() {
    this.getContent().style.display = "none";
  }
}
