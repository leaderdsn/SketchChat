# SketchChat

This is a project of my own chat that will be carried out as part of my training on **yandex.practicum**. An up-to-date demonstration of the project can be viewed at this address **netlify**: https://sketch-chat.netlify.app/ and **heroku**: https://sketch-chat-app.herokuapp.com/chat

**What's new?**

In the **3rd sprint**, its **Router** and **Store** were implemented

In the **4th sprint**, I supplemented the project with:

#### *precompile*

which will not even allow you to commit code that does not pass the tests you specified.
#### *docker*

that allows you to create containers, start and stop them, link them to each other, delete them, and maintain their operation.
#### *heroku*

deploy now happens not only on netlify, but also on heroku, which allows you to deploy docker images

LINK TO PULL REQUEST: https://github.com/leaderdsn/SketchChat/pull/5

## Requirements

- [npm](https://www.npmjs.com/package/npm)
- [nodejs](https://nodejs.org/en/)

## 1. Install Deps

### bash
#### #using npm
    npm i

## 2. Start developing

    Start your site.

### bash
#### #using npm
    npm run serve
 
Open source code using your favorite IDE/Text editor and navigate to src/ directory, this is where your application live.

## 3. Build your application for production

    Once you're finished, you can make production build of your app using:

### bash
#### #using npm
    npm run build
    
## 4. Starting with a static server

    Before executing the **npm run start** command, make sure that the **dist** folder is present in the root of the project.

### bash
#### #using npm
    npm run build
    npm run start
    
## 5. Running tests and linters

    Tests and linters are necessary to check for errors in the code
    
### bash
#### #using npm
    npm run validate
