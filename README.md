# primo-explore-force-services-page-auth

<!-- ![Build Status](https://api.travis-ci.org/Alliance-PCJWG/primo-explore-clickable-logo.svg?branch=master) -->

## Features
When users are directed to the services page (e.g. from a database) and are not already logged in, Primo will trigger a login. This should work for both PDS and non-PDS authentication.

## Install
1. Make sure you've installed and configured [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).
2. Navigate to your template/central package root directory. For example:
    ```
    cd primo-explore/custom/MY_VIEW_ID
    ```
3. If you do not already have a `package.json` file in this directory, create one:
    ```
    npm init -y
    ```
4. Install this package:
    ```
    npm install primo-explore-force-services-page-auth --save-dev
    ```

## Usage
Once this package is installed, add `forceServicesPageAuth` as a dependency for your custom module definition.

```js
var app = angular.module('viewCustom', ['forceServicesPageAuth'])
```
Note: If you're using the `--browserify` build option, you will need to first import the module with:

```javascript
import 'forceServicesPageAuth';
```

<!-- ## Running tests
1. Clone the repo
2. Run `npm install`
3. Run `npm test` -->
