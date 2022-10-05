import API, { AuthAPI, SigninData, SignupData } from "~src/api/authAPI";
import store from "~src/utils/store";
import Router from "~src/utils/router/router";
import MessagesController from "~src/controllers/messages";

class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SigninData) {
    await this.api.signin(data).then(async (res) => {
      if (res.status < 400) {
        await this.fetchUser();
        Router.go("/chat");
      } else {
        alert(res.response.reason);
      }
    });
  }

  async signup(data: SignupData) {
    await this.api.create(data).then((res) => {
      if (res.status < 400) {
        Router.go("/");
        this.logout()
      } else {
        alert(res.response.reason);
      }
    });
  }

  async fetchUser() {
    await this.api.read().then((res) => {
      if (res.status < 400) {
        store.set("auth", true);
        store.set("user", res.response);
      } else {
        alert(res.response.reason);
      }
    });
  }

  async logout() {
    await this.api.logout().then((res) => {
      if (res.status < 400) {
        MessagesController.closeAll();
        store.set("auth", false);
        Router.go("/");
      } else {
        alert(res.response.reason);
      }
    });
  }
}

export default new AuthController();
