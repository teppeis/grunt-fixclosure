/*
 * grunt-fixclosure
 * https://github.com/teppeis/grunt-fixclosure
 *
 * Copyright (c) 2013 Teppei Sato
 * Licensed under the MIT license.
 */

'use strict';

const {cli} = require('fixclosure');

module.exports = function(grunt) {
  grunt.registerMultiTask('fixclosure', 'fixclosure', function() {
    /* eslint-disable no-invalid-this */
    const options = this.options({
      fixInPlace: false,
    });

    const args = ['node', 'fixclosure'];

    const fixInPlace = grunt.option.flags().some(item => item === '--fixclosure-fix-in-place');

    if (fixInPlace || options.fixInPlace) {
      args.push('--fix-in-place');
    }

    const proc = {
      argv: args.concat(this.filesSrc),
      stdout: {
        write(msg) {
          grunt.log.write(msg);
        },
      },
      stderr: {
        write(msg) {
          grunt.log.write(msg);
        },
      },
      exit(code) {
        // Fail
        grunt.warn('fixclosure failed.');
      },
    };

    const done = this.async();
    cli(proc.argv, proc.stdout, proc.stderr, proc.exit).then(done);
    /* eslint-enable no-invalid-this */
  });
};
