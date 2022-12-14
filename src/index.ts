import { ProfilePasswordChangePage } from '~src/components/profile/profilePasswordChange/profilePasswordChangePage';
import { ProfileChangePage } from '~src/components/profile/profileChange/profileChangePage';
import { ProfileUserPage } from '~src/components/profile/profileUser/profileUserPage';
import AuthController from '~src/controllers/auth';
import ChatsController from '~src/controllers/chats';
import { ChatPage } from '~src/pages/chat/chatPage';
import { LoginPage } from '~src/pages/login/loginPage';
import { ProfilePage } from '~src/pages/profile/profilePage';
import { SignupPage } from '~src/pages/signup/signupPage';
import Router from '~src/utils/router/router';
import store from '~src/utils/store';
import '~src/styles/main.sass';

enum Routes {
  Index = '/',
  Register = '/signup',
  Chat = '/chat',
  Profile = '/profile',
  ProfileUser = '/profile/profile-user',
  ProfileChange = '/profile/profile-change',
  ProfilePasswordChange = '/profile/password-change',
}

window.addEventListener('DOMContentLoaded', async () => {
  try {
    await AuthController.fetchUser();
    await ChatsController.fetchChats();

    Router.use(Routes.Index, LoginPage)
      .use(Routes.Register, SignupPage)
      .use(Routes.Chat, ChatPage)
      .use(Routes.Profile, ProfilePage)
      .use(Routes.ProfileUser, ProfileUserPage)
      .use(Routes.ProfileChange, ProfileChangePage)
      .use(Routes.ProfilePasswordChange, ProfilePasswordChangePage)
      .start();

    const { auth } = store.getState();

    switch (window.location.pathname) {
      case Routes.Index:
        auth ? Router.go(Routes.Chat) : Router.go(Routes.Index);
        return;
      case Routes.Chat:
        auth ? Router.go(Routes.Chat) : Router.go(Routes.Index);
        return;
      case Routes.Profile:
        auth ? Router.go(Routes.ProfileUser) : Router.go(Routes.Index);
        return;
    }
  } catch (e) {
    Router.start();
    Router.go(Routes.Index);
  }
});
