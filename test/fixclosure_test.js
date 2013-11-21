'use strict';

require('mocha');
var expect = require('expect.js');
var exec = require('child_process').exec;
var fs = require('fs');
var cpr = require('cpr');

describe('grunt fixclosure', function() {
  beforeEach(function(done) {
    cpr(__dirname + '/fixtures',  __dirname + '/fixtures.copy', {
      deleteFirst: true
    }, done);
  });

  afterEach(function(done) {
    cpr(__dirname + '/fixtures.copy', __dirname + '/fixtures', {
      deleteFirst: true
    }, done);
  });

  it('success', function(done) {
    testGruntfile('success', done);
  });

  it('fail', function(done) {
    testGruntfile('fail', done);
  });

  it('fixed', function(done) {
    testGruntfile('fixed', done);
  });

  it('mixed', function(done) {
    testGruntfile('mixed', done);
  });

  it('--fixclosure-fix-in-place', function(done) {
    testGruntfile('option-fix', ['--fixclosure-fix-in-place'], done);
  });
});

function testGruntfile(name, opt_options, callback) {
  if (typeof opt_options === 'function') {
    callback = opt_options;
    opt_options = [];
  }
  var prefix = __dirname + '/cases/' + name;
  var gruntfile = prefix + '.Gruntfile.js';
  runGruntfile(gruntfile, opt_options, function(err, stdout, stderr) {
    var expectedFile = prefix + (err ? '.ng.txt' : '.ok.txt');
    var expected;
    try {
      expected = fs.readFileSync(expectedFile, {encoding: 'utf8'});
    } catch (e) {
      // ng is unexpected.
      console.log('stdout: ' + stdout);
      callback(err || stderr || stdout || true);
      return;
    }
    try {
      expect(stdout).to.be(expected);
    } catch (e) {
      console.log('expected:');
      console.log(expected);
      console.log('actual:');
      console.log(stdout);
      throw e;
    }
    callback();
  });
}

function runGruntfile(gruntfile, options, callback) {
  var cmd = ['grunt', '--no-color', '--gruntfile', gruntfile].concat(options);
  console.log(cmd.join(' '));
  exec(cmd.join(' '), {}, callback);
}
