# Meteor React SSR Demo

This is a Meteor app that demonstrates how to setup and use the [communitypackages:react-router-ssr](https://atmospherejs.com/communitypackages/react-router-ssr) package, and is also quite useful as a boilerplate to get a jumpstart on your next Sever Rendered Meteor project.

## Setup

```sh
$ git clone https://github.com/copleykj/react-ssr-demo.git
$ cd react-ssr-demo
$ npm install
```

## Run

```sh
$ npm run
```

## Usage as a Boilerplate

The app has 2 entry points. The server is at `/server/main.js` and the client at `/client/main.js`. These currently only server the purpose of importing `/ui/App.jsx` to render the app. React components are contained in `/ui` with full pages of the app in `/ui/pages`. Any additional pages can be created here and then be imported and added to the App component in `/ui/App.jsx`.

## Code Quality

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This project has been setup with eslint, prettier and editorconfig configurations to ensure clean, consistent, error free code.
