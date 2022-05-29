'use strict';

const assert = require('assert');
const path = require('path');
const {exec} = require('child_process');
const fs = require('fs');
const cpr = require('cpr');

describe('grunt fixclosure', () => {
  beforeEach(done => {
    cpr(path.join(__dirname, 'fixtures'), path.join(__dirname, 'fixtures.copy'), {
      deleteFirst: true,
    }, done);
  });

  afterEach(done => {
    cpr(path.join(__dirname, 'fixtures.copy'), path.join(__dirname, 'fixtures'), {
      deleteFirst: true,
    }, done);
  });

  it('success', done => {
    testGruntfile('success', done);
  });

  it('fail', done => {
    testGruntfile('fail', done);
  });

  it('fixed', done => {
    testGruntfile('fixed', done);
  });

  it('mixed', done => {
    testGruntfile('mixed', done);
  });

  it('--fixclosure-fix-in-place', done => {
    testGruntfile('option-fix', ['--fixclosure-fix-in-place'], done);
  });
});

function testGruntfile(name, opt_options, callback) {
  if (typeof opt_options === 'function') {
    callback = opt_options;
    opt_options = [];
  }
  const prefix = path.join(__dirname, 'cases', name);
  const gruntfile = `${prefix}.Gruntfile.js`;
  runGruntfile(gruntfile, opt_options, (err, stdout, stderr) => {
    const expectedFile = prefix + (err ? '.ng.txt' : '.ok.txt');
    let expected;
    try {
      expected = fs.readFileSync(expectedFile, {encoding: 'utf8'});
    } catch {
      // ng is unexpected.
      console.log(`stdout: ${stdout}`);
      callback(err || stderr || stdout || true);
      return;
    }
    try {
      assert.equal(stdout, expected);
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
  const cmd = ['grunt', '--no-color', '--gruntfile', gruntfile].concat(options);
  exec(cmd.join(' '), {}, callback);
}
