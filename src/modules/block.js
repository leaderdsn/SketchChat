import EventBus from "~src/modules/eventBus";
import constructor from "~src/modules/constructor"

class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: "flow:render"
  };

  _element = null;
  _meta = null;
  _id = null;

  constructor(tagName = "div", propsAndChildren = {}) {
    const { children, props } = this._getChildren(propsAndChildren);
    
    const eventBus = new EventBus()

    this.children = children;

    this._meta = {
      tagName,
      props
    };

    this._id = this.createNewUUID()

    this.props = this._makePropsProxy({...props, __id: this._id});

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildren(propsAndChildren) {
    const children = {};
    const props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  
  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }
  
  _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach(child => {
      child.dispatchComponentDidMount();
    });
  }
  
  componentDidMount(oldProps) {}
  
  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  
  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }
  
  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  _removeEvents() {
    const {events = {}} = this.props;

    Object.keys(events).forEach(eventName => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  _addEvents() {
    const {events = {}} = this.props;

    Object.keys(events).forEach(eventName => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }
  
  setProps = nextProps => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    //this._removeEvents();
    this._element.innerHTML = ''
    this._element.appendChild(block);
    this._addEvents();
  }

    // Переопределяется пользователем. Необходимо вернуть разметку
  render() {}

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
    const self = this;
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;
  
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    }) 
  }

  _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);
    return element;
  }

  createNewUUID() {
    return this._generateUUID()
  }

  _generateUUID() {
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

  compile(template, props) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`
    });

    const fragment = this._createDocumentElement('template');

    fragment.innerHTML = constructor(propsAndStubs, template);

    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
      
      stub.replaceWith(child.getContent());
    });

    return fragment.content; 
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}

export default Block; 