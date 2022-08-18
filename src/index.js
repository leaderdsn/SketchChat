import guestLayoutTemplate from './layouts/guestLayout'
import mainLayoutTemplate from './layouts/mainLayout'
import login from './pages/login'
import signIn from './pages/signin'
import chat from './pages/chat'
import error from './pages/error'
import constructor from './modules/constructor'
import 'normalize.css'
import './styles/main.sass'

const contextGuestLayout = {
  className: 'guest-layout',
  content: login, 
}
const contextMainLayout = {
  className: 'main-layout',
  content: error, 
}

const root = document.querySelector('#root')
root.innerHTML = constructor(contextGuestLayout, guestLayoutTemplate)
// root.innerHTML = constructor(contextMainLayout, mainLayoutTemplate)

openDialog = () => {
  document.querySelector('#file').click();
}
document.querySelector('#upload').addEventListener('click', openDialog);


