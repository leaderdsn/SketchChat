export type Listener<T extends Event[] = Event[]> = (...args: T) => void;

export default class EventBus<E extends string = string, M extends { [K in E]: Event[] } = Record<E, any[]>> {

  private listeners: { [K in E]?: Listener<M[E]>[] } = {};

  on(event: E, callback: Listener<M[E]>) {
    if (!this.listeners[event]) {
        this.listeners[event] = [];
    };

    this.listeners[event]!.push(callback);
  }

  off(event: E, callback: Listener<M[E]>) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    };

    this.listeners[event] = this.listeners[event]!.filter(
      listener => listener !== callback
    );
  }

  emit(event: E, ...args: M[E]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    };

    this.listeners[event]!.forEach((listener) => {
      listener(...args);
    });
  }
}