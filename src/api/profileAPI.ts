import HTTPTransport from '~src/utils/HTTPTransport';
import { Nullable } from '~src/utils/types';

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

export class ProfileAPI {
  protected http: HTTPTransport;

  public constructor() {
    this.http = new HTTPTransport('/user');
  }

  changeAvatar(data: FormData): Promise<XMLHttpRequest> {
    return this.http.put('/profile/avatar', { data });
  }

  changeProfile(data: ProfileData): Promise<XMLHttpRequest> {
    return this.http.put('/profile', { data });
  }

  changePassword(data: PasswordData): Promise<XMLHttpRequest> {
    return this.http.put('/password', { data });
  }
}

export default new ProfileAPI();
