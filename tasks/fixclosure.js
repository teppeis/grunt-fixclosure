/*
 * grunt-fixclosure
 * https://github.com/teppeis/grunt-fixclosure
 *
 * Copyright (c) 2013 Teppei Sato
 * Licensed under the MIT license.
 */

'use strict';

var cli = require('fixclosure').cli;

module.exports = function(grunt) {
  grunt.registerMultiTask('fixclosure', 'fixclosure', function() {
    var options = this.options({
      fixInPlace: false
    });

    var args = ['node', 'fixclosure', '--no-success'];

    if (options.fixInPlace) {
      args.push('--fix-in-place');
    }

    cli({
      argv: args.concat(this.filesSrc),
      exit: function(code) {
        // Fail
        grunt.warn('fixclosure failed.');
      },
      stdout: {
        write: function(msg) {
          grunt.log.write(msg);
        }
      },
      stderr: {
        write: function(msg) {
          grunt.log.write(msg);
        }
      }
    });
  });
};
