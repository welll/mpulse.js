"use strict";

module.exports = function(config) {
    config.set({
        basePath: "./",

        port: 4000,
        runnerPort: 4001,
        logLevel: config.LOG_INFO,

        colors: true,
        autoWatch: false,

        frameworks: ["mocha"],
        reporters: ["progress", "coverage", "tap"],
        browsers: ["ChromeHeadless"],

        coverageReporter: {
            type: "html",
            dir: "test/coverage/"
        },

        tapReporter: {
            outputFile: "test/karma.tap"
        },

        concurrency: Infinity
    });
};
