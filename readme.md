GSS Challenge (Vadim Sheydakov)
===
Usage
---

To start an application you should execute:
1. `npm install` (in first run)
2. `npm run start:client`

Application going to be started on `3000` port by default and run `webpack-dev-server` as server.

Disclaimer: no `production` run provided.

### NPM Scripts
`npm run start:client` - build client by `webpack` in `development` mode. Starts `webpack-dev-server` on `3000` port by default. Using `.\webpack\webpack.development.config.js` configuration file.

`npm run storybook` - starts Storybook application for demo purpose of components layout and behavior.

`npm run test:jest` - run tests (jest + enzyme) from `.\tests` folder.

#### Configuration file

Location: `_{project directory}_/src/webpack/configuration/_{mode}_.configuration.json`
```json
{
  "siteRoot": "/",
  "urls": {
    "chatServer": "https://demo-chat-server.on.ag/"
  }
}
```
