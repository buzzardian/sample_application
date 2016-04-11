var fs = require('fs');

module.exports = function(config) {

  // Browsers to run on Sauce Labs
  var customLaunchers = {
    'SL_Chrome': {
      base: 'SauceLabs',
      browserName: 'chrome'
    },
    'SL_InternetExplorer': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '10'
    },
    'SL_InternetExplorer': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '11'
    },
    'SL_FireFox': {
      base: 'SauceLabs',
      browserName: 'firefox',
    },
  };

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      'test/*.js',
      {
        pattern: 'www/images/*',
        watched: false, 
        included: false, 
        served: true
      },
      {
        pattern: 'www/solano.html',
        watched: true,
        included: false,
        served: true
      }
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],

    // web server port
    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    sauceLabs: {
      testName: 'CodePipeline, SauceLabs, and Solano CI using Karma',
      startConnect: false
    },
    captureTimeout: 120000,
    customLaunchers: customLaunchers,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),
    singleRun: true
  });
};
