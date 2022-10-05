import HTTPTransport from "~src/utils/HTTPTransport";

export interface SigninData {
  login: string;
  password: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export interface ChatInfo {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: User;
    time: string;
    content: string;
  };
}

export class AuthAPI {
  protected http: HTTPTransport;

  public constructor() {
    this.http = new HTTPTransport("/auth");
  }


  public signin(data: SigninData): Promise<unknown> {
    return this.http.post("/signin", { data });
  }

  public create(data: SignupData): Promise<unknown> {
    return this.http.post("/signup", { data });
  }

  public read(): Promise<unknown> {
    return this.http.get("/user");
  }

  public logout(): Promise<unknown> {
    return this.http.post("/logout");
  }
}

export default new AuthAPI();
