'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    fixclosure: {
      test: {
        src: '../fixtures/ok.js',
      }
    }
  });

  // Load grunt-fixclosure
  grunt.loadTasks('../../tasks');
  // Set defaut task.
  grunt.registerTask('default', ['fixclosure:test']);
};
