import GuestLayout from '~src/layouts/guestLayout/guestLayout';
import Login from '~src/pages/login';

export class LoginPage extends GuestLayout {
  constructor() {
    super({
      content: new Login({}),
    });
  }
}
