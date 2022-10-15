import GuestLayout from '~src/layouts/guestLayout/guestLayout';
import Signup from '~src/pages/signup';

export class SignupPage extends GuestLayout {
  constructor() {
    super({
      content: new Signup({}),
    });
  }
}
