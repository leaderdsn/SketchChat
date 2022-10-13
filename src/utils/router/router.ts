import Block from "../block";
import Route from "./route"
// import Block from "~src/utils/block";
// import Route from "~src/utils/router/route"
import { Nullable } from "~src/utils/types";

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
