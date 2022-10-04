import Block from "~src/utils/block";
import isEqual from "~src/utils/myLodash/isEqualString";
import render from "~src/utils/render";
import { Nullable } from "~src/utils/types";

interface BlockConstructable<P = any> {
  new (props: P): Block<P>;
}

class Route {
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
      //this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname as string);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass({});

      render(this._query, this._block);
      return;
    }

    //this._block.show();
  }
}

class Router {
  private static __instance: Router;
  private _routes: Nullable<Route[]>;
  private _history: Nullable<History>;
  private _currentRoute: Nullable<Route>;

  constructor(private readonly rootQuery: string = "#root") {
    if (Router.__instance) {
      return Router.__instance;
    }

    this._routes = [];
    this._history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  public use(pathname: string | RegExp, block: typeof Block) {
    const route = new Route(pathname, block, this.rootQuery);
    this._routes!.push(route);

    return this;
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;

      this._onRoute(target.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  public go(pathname: string) {
    this._history!.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  public back() {
    this._history!.back();
  }

  public forward() {
    this._history!.forward();
  }

  private getRoute(pathname: string) {
    return this._routes!.find((route) => route.match(pathname));
  }
}

export default new Router();
