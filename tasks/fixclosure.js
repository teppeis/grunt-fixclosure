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
    /* eslint-disable no-invalid-this */
    var options = this.options({
      fixInPlace: false
    });

    var args = ['node', 'fixclosure'];

    var fixInPlace = grunt.option.flags().some(function(item) {
      return item === '--fixclosure-fix-in-place';
    });

    if (fixInPlace || options.fixInPlace) {
      args.push('--fix-in-place');
    }

    var proc = {
      argv: args.concat(this.filesSrc),
      stdout: {
        write: function(msg) {
          grunt.log.write(msg);
        }
      },
      stderr: {
        write: function(msg) {
          grunt.log.write(msg);
        }
      },
      exit: function(code) {
        // Fail
        grunt.warn('fixclosure failed.');
      }
    };
    cli(proc.argv, proc.stdout, proc.stderr, proc.exit);
    /* eslint-enable no-invalid-this */
  });
};
