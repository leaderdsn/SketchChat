import BaseAPI from "~src/api/baseAPI";
import { Nullable } from "~src/utils/types";

export interface PasswordData {
  oldPassword: Nullable<string>;
  newPassword: Nullable<string>;
}

export interface ProfileData {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface ProfileUserData {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export class ProfileAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  changeAvatar(data: FormData) {
    return this.http.put("/profile/avatar", { data });
  }

  changeProfile(data: ProfileData) {
    return this.http.put("/profile", { data });
  }

  changePassword(data: PasswordData) {
    return this.http.put("/password", { data });
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new ProfileAPI();
