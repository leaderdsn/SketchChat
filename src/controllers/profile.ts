import API, { ProfileAPI, ProfileData, PasswordData } from '~src/api/profileAPI';
import store from '~src/utils/store';

class ProfileController {
  private readonly api: ProfileAPI;

  constructor() {
    this.api = API;
  }

  async changeAvatar(data: FormData) {
    await this.api
      .changeAvatar(data)
      .then((res) => {
        if (res.status < 400) {
          store.set('avatar', res.response.avatar);
          alert('Аватар успешно изменён!');
        } else {
          alert(res.response.reason);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  async changeProfile(data: ProfileData) {
    await this.api
      .changeProfile(data)
      .then((res) => {
        if (res.status < 400) {
          store.set('user', res.response);
          alert('Профиль успешно изменён!');
        } else {
          alert(res.response.reason);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  async changePassword(data: PasswordData) {
    await this.api
      .changePassword(data)
      .then((res) => {
        if (res.status < 400) {
          alert('Пароль успешно изменён!');
        } else {
          alert(res.response.reason);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
}

export default new ProfileController();
