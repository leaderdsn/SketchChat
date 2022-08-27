import profilePageTemplate from "~src/pages/profile/profile.tmpl";
import { TProfile } from "~src/pages/profile/types";

export const contextProfile = (profileContent: string): TProfile => {
  return {
    profile: profileContent,
  };
};

export default profilePageTemplate;
