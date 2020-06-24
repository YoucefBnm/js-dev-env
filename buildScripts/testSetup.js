// this file isn't transpiled, so must use CommonJs and ES5

// Register babel to transpile before our tests run
// require('babel-register')
// import "@babel/preset-env";
require('@babel/register')
require('@babel/preset-env')

// disable webpack features that MOCHA doesn't understand
require.extensions['.css'] = function () {}
