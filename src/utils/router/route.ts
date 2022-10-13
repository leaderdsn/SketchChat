import Block from "../block";
import render from "../render";
// import Block from "~src/utils/block";
// import render from "~src/utils/render";
import { Nullable } from "~src/utils/types";

export interface BlockConstructable<P = any> {
  new (props: P): Block<any>;
}

export default class Route {
  private _pathname: string | RegExp;
  private _block: Nullable<Block>;
  private readonly _blockClass: BlockConstructable;
  private readonly _query: string;

  constructor(pathname: string | RegExp, view: typeof Block, query: string) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._query = query;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block = null;
    }
  }

  match(pathname: string) {
    return pathname === this._pathname as string;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass({});

      render(this._query, this._block);
      return;
    }
  }
}