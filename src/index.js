import guestLayoutTemplate from './layouts/guestLayout'
import mainLayoutTemplate from './layouts/mainLayout'
import login from './pages/login'
import signin from './pages/signin'
import chat from './pages/chat'
import { requestError, serverError} from './pages/error'
import constructor from './modules/constructor'
import 'normalize.css'
import './styles/main.sass'

const contextGuestLayout = {
  className: 'guest-layout',
  content: [login, signin, serverError].join('')
}
const contextMainLayout = {
  className: 'main-layout',
  content: [chat, requestError].join('') 
}

window.onload = function() {
  console.log("Страница загружена!")
  const root = document.querySelector('#root')
  
  root.innerHTML = [
    constructor(contextGuestLayout, guestLayoutTemplate),
    constructor(contextMainLayout, mainLayoutTemplate),
  ].join('')
  const contact = document.querySelector('.y-contact-item')
  const pageLogin = document.querySelector('.y-login-page')
  const pageSignin = document.querySelector('.y-signin-page')
  const pageChat = document.querySelector('.y-chat-page')
  const pageErrorRequest = document.querySelector('.y-error-page-404')
  const pageErrorServer = document.querySelector('.y-error-page-500')
  const main = document.querySelector('.main-layout')
  const guest = document.querySelector('.guest-layout')

  main.style.display = 'none'
  pageSignin.style.display = 'none'
  pageErrorServer.style.display = 'none'

  document.querySelector('#goSignIn').addEventListener("click", () => {
    pageLogin.style.display = 'none'
    pageSignin.style.display = 'grid'
  }); 
  document.querySelector('#buttonSignIn').addEventListener("click", () => {
    pageSignin.style.display = 'none'
    pageErrorServer.style.display = 'grid'
  }); 
  document.querySelector('#linkGoSignIn').addEventListener("click", () => {
    pageSignin.style.display = 'grid'
    pageErrorServer.style.display = 'none'
  }); 
  document.querySelector('#goLogin').addEventListener("click", () => {
    pageSignin.style.display = 'none'
    pageLogin.style.display = 'grid'
  });
  document.querySelector('#goChat').addEventListener("click", () => {
    guest.style.display = 'none'
    main.style.display = 'grid'
    pageChat.style.display = 'grid'
    pageErrorRequest.style.display = 'none'
  });
  const contacts = document.querySelectorAll('.y-contact-item')
  for(let item of contacts) {
    item.addEventListener("click", () => {
      pageChat.style.display = 'none'
      pageErrorRequest.style.display = 'grid'
    });
  }

  document.querySelector('#linkGoChat').addEventListener("click", () => {
    pageChat.style.display = 'grid'
    pageErrorRequest.style.display = 'none'
  });

  document.getElementById('upload').addEventListener('click', () => {
    document.getElementById('file').click();
  });

};




