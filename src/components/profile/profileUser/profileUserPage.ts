import Profile from '~src/pages/profile';
import ProfileUser from '~src/components/profile/profileUser';

export class ProfileUserPage extends Profile {
  constructor() {
    super({
      profile: new ProfileUser({}),
    });
  }
}
