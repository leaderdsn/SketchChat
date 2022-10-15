const { JSDOM } = require('jsdom')
const sinon = require('sinon')

const { window } = new JSDOM('<div id="root"></div>', {
  url: 'http://localhost:3000'
})

global.window = window
global.document = window.document
global.DocumentFragment = window.DocumentFragment
global.window.history.back = () => {
  if (typeof window.onpopstate === 'function') {
    window.onpopstate({ currentTarget: window })
  }
}
global.window.history.forward = () => {
  if (typeof window.onpopstate === 'function') {
    window.onpopstate({ currentTarget: window })
  }
}
global.XMLHttpRequest = sinon.useFakeXMLHttpRequest()
