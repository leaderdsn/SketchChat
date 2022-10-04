import BaseAPI from "~src/api/baseAPI";

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

export class AuthAPI extends BaseAPI {
  constructor() {
    super("/auth");
  }

  signin(data: SigninData) {
    return this.http.post("/signin", { data });
  }

  create(data: SignupData) {
    return this.http.post("/signup", { data });
  }

  read() {
    return this.http.get("/user");
  }

  logout() {
    return this.http.post("/logout");
  }

  update = undefined;
  delete = undefined;
}

export default new AuthAPI();
