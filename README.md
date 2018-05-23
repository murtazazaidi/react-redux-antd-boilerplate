# React Redux Antd Boilerplate

Opinionated boilerplate extending create-react-app to include antd and redux.

## Quick Start
- Clone/Fork the project
- Run `npm install .` or `yarn` to install dependencies
- Run `npm start` or `yarn start` to start dev server
- Happy coding

## Getting Started

You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured so that you can focus on the code.

Just fork this project, start adding your components, and you’re good to go.

Inside the newly created project, you can run some built-in commands:

### `npm install .` or `yarn`
Installs missing node_modules in application.

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.rawgit.com/marionebl/create-react-app/9f62826/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run lint` or `yarn lint`

Runs eslint and generates report for static code analysis


### `npm run lintfix` or `yarn lintfix`

Runs eslint and generates report for static code analysis; and also fixes some common issues automatically


### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
By default, it also [includes a service worker](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

Your app is ready to be deployed.

## User Guide

The [User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) includes information on different topics, such as:

- [Updating to New Releases](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#updating-to-new-releases)
- [Folder Structure](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#folder-structure)
- [Available Scripts](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts)
- [Supported Browsers](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-browsers)
- [Supported Language Features and Polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills)
- [Syntax Highlighting in the Editor](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#syntax-highlighting-in-the-editor)
- [Displaying Lint Output in the Editor](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#displaying-lint-output-in-the-editor)
- [Formatting Code Automatically](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically)
- [Debugging in the Editor](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#debugging-in-the-editor)
- [Changing the Page `<title>`](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#changing-the-page-title)
- [Installing a Dependency](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#installing-a-dependency)
- [Importing a Component](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#importing-a-component)
- [Code Splitting](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting)
- [Adding a Stylesheet](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet)
- [Post-Processing CSS](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#post-processing-css)
- [Adding a CSS Preprocessor (Sass, Less etc.)](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
- [Adding Images, Fonts, and Files](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-images-fonts-and-files)
- [Using the `public` Folder](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#using-the-public-folder)
- [Using Global Variables](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#using-global-variables)
- [Adding Bootstrap](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap)
- [Adding Flow](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-flow)
- [Adding a Router](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-router)
- [Adding Custom Environment Variables](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables)
- [Can I Use Decorators?](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#can-i-use-decorators)
- [Fetching Data with AJAX Requests](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#fetching-data-with-ajax-requests)
- [Integrating with an API Backend](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#integrating-with-an-api-backend)
- [Proxying API Requests in Development](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development)
- [Using HTTPS in Development](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#using-https-in-development)
- [Generating Dynamic `<meta>` Tags on the Server](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#generating-dynamic-meta-tags-on-the-server)
- [Pre-Rendering into Static HTML Files](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#pre-rendering-into-static-html-files)
- [Running Tests](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
- [Debugging Tests](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#debugging-tests)
- [Developing Components in Isolation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#developing-components-in-isolation)
- [Publishing Components to npm](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#publishing-components-to-npm)
- [Making a Progressive Web App](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app)
- [Analyzing the Bundle Size](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#analyzing-the-bundle-size)
- [Deployment](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)
- [Advanced Configuration](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#advanced-configuration)
- [Troubleshooting](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting)

## What’s Included?

Your environment will have everything you need to build a modern single-page React app:

* React, JSX, ES6, and Flow syntax support.
* Redux, Persistance mechanism for reducers.
* Google Analytics support.
* Example Redux Folders Structure and Flux flow in place.
* Language extras beyond ES6 like the object spread operator.
* Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
* A fast interactive unit test runner with built-in support for coverage reporting.
* A live development server that warns about common mistakes.
* A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
* An offline-first [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) and a [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/), meeting all the [Progressive Web App](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) criteria.

Check out [this guide](https://github.com/nitishdayal/cra_closer_look) for an overview of how these tools fit together.

The tradeoff is that **these tools are preconfigured to work in a specific way**. If your project needs more customization, you can ["eject"](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) and customize it, but then you will need to maintain this configuration.
