"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    fixclosure: {
      test: {
        src: "../fixtures/ng.js",
        options: {},
      },
    },
  });

  // Load grunt-fixclosure
  grunt.loadTasks("../../tasks");
  // Set defaut task.
  grunt.registerTask("default", ["fixclosure:test"]);
};
