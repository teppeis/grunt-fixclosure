/*
 * grunt-fixclosure
 * https://github.com/teppeis/grunt-fixclosure
 *
 * Copyright (c) 2013 Teppei Sato
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= mochaTest.src %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    mochaTest: {
      options: {
        reporter: 'spec',
        colors: false
      },
      src: ['test/*_test.js'],
    },

    watch: {
      test: {
        tasks: ['lint', 'test'],
        files: [
          '<%= jshint.all %>',
          'test/**/*',
          '!test/fixtures/*',
          '!test/fixtures.copy/*'
        ]
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Load necessary tasks.
  require('load-grunt-tasks')(grunt);

  // Register tasks.
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['lint', 'test']);
};
