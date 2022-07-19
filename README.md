# TableCheck's SPA Boilerplate

DEMO: [tc-spa-boilerplate.netlify.app](https://tc-spa-boilerplate.netlify.app)

## Features

- Main tech stack: React, Emotion, i18n
- Tablekit integration with FontAwesome icons and Dark Mode
- Basic localized routing
- Basic layout with footer, top and side navs
- Language Selection
- Responsive
- Basic FormSpree contact form

## Getting started

- Install [Node.js](https://nodejs.org/en/download/) and [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
- Fork/Clone this project
- Run `nvm use` (will use the correct Node.js version)
- Run `npm i --legacy-peer-deps` (will install the dependencies)
- Run `npm start` (will start the app in http://localhost:3000/)

## Deploy to production

The boilerplate is configured to be deployed to [Netlify](https://netlify.com), but it can also work with Github pages, Vercel, AWS Amplify, etc.

- Click on `New site from Git`
- Select `Github` and the repository where you forked it
- Change Publish directory to `build`
- Deploy site
- You can change the URL name on `Site settings > Change site name`

## Upgrade

To upgrade this boilerplate and use the latest configuration and dependencies, please run this command and select SPA when asked:

`npx --legacy-peer-deps -p @tablecheck/scripts tablecheck-scripts init`

## Support

Create an issue in the Github repository

## Resources

- [i18n Manager](https://www.electronjs.org/apps/i18n-manager): helpful editor for the translations
