import Profile from '~src/pages/profile';
import ProfilePasswordChange from '~src/components/profile/profilePasswordChange';

export class ProfilePasswordChangePage extends Profile {
  constructor() {
    super({
      profile: new ProfilePasswordChange({}),
    });
  }
}
