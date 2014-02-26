# grunt-fixclosure [![Build Status](https://travis-ci.org/teppeis/grunt-fixclosure.png?branch=master)](https://travis-ci.org/teppeis/grunt-fixclosure)

> Grunt plugin for [fixclosure](https://github.com/teppeis/grunt-parallelize).

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-fixclosure --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fixclosure');
```

## The "fixclosure" task

### Overview
In your project's Gruntfile, add a section named `fixclosure` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fixclosure: {
    options: {
      fixInPlace: true
    },
    all: {
      src: ['path/to/**/*.js']
    },
  },
})
```

### Options

#### options.fixInPlace
Type: `Boolean`
Default value: `false`

Enable `--fix-in-place` option of fixclosure.
If true, fixclosure fixes invalid files in place.

### Usage Examples

#### Lint

By default, grunt-fixclosure just lint JS files. If invalid files found, `grunt fixclosrue` exits with non-zero error code. It's useful for CI task.

```js
grunt.initConfig({
  fixclosure: {
    lint: {
      src: ['path/to/**/*.js']
    },
  },
})
```

#### Fix

With `fixInPlace` option, `grunt fixclosure` finds invalid files and fixes them.

```js
grunt.initConfig({
  fixclosure: {
    fix: {
      fixInPlace: true,
      src: ['path/to/**/*.js']
    },
  },
})
```
Also you can specify it with command-line option `--fixclosure-fix-in-place`.
```bash
$ grunt fixclosure --fixclosure-fix-in-place
```

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Teppei Sato &lt;teppeis@gmail.com&gt;. Licensed under the MIT license.
