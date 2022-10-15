import Profile from '~src/pages/profile';
import ProfileChange from '~src/components/profile/profileChange';

export class ProfileChangePage extends Profile {
  constructor() {
    super({
      profile: new ProfileChange({}),
    });
  }
}
