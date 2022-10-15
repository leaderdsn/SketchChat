import MainLayout from '~src/layouts/mainLayout/mainLayout';
import Profile from '~src/pages/profile';

export class ProfilePage extends MainLayout {
  constructor() {
    super({
      content: new Profile({}),
    });
  }
}
