# grunt-fixclosure

Grunt plugin for [fixclosure](https://github.com/teppeis/fixclosure).

[![NPM version][npm-image]][npm-url]
![Node.js version support][node-version]
[![Build Status][ci-image]][ci-url]
![MIT License][license]

## Getting Started

This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install -D grunt-fixclosure fixclosure
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-fixclosure");
```

## The "fixclosure" task

### Overview

In your project's Gruntfile, add a section named `fixclosure` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fixclosure: {
    options: {
      fixInPlace: true,
    },
    all: {
      src: ["path/to/**/*.js"],
    },
  },
});
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
      src: ["path/to/**/*.js"],
    },
  },
});
```

#### Fix

With `fixInPlace` option, `grunt fixclosure` finds invalid files and fixes them.

```js
grunt.initConfig({
  fixclosure: {
    fix: {
      fixInPlace: true,
      src: ["path/to/**/*.js"],
    },
  },
});
```

Also you can specify it with command-line option `--fixclosure-fix-in-place`.

```bash
$ grunt fixclosure --fixclosure-fix-in-place
```

## Release History

- v2+: See [GitHub releases](https://github.com/teppeis/grunt-fixclosure/releases)
- 2016-04-06 [v1.0.0](https://github.com/teppeis/grunt-fixclosure/releases/tag/1.0.0) Update grunt to v1.0 and other deps.
- 2016-03-16 [v0.3.1](https://github.com/teppeis/grunt-fixclosure/releases/tag/0.3.1) Cleanup, fix `main` in package.json and support for grunt@v1.0.0 [#11](https://github.com/teppeis/grunt-fixclosure/pull/11)
- 2014-06-12 [v0.3.0](https://github.com/teppeis/grunt-fixclosure/releases/tag/0.3.0) Update fixclosure-1.3.0 and use caret `^1.3.0` instead of tilde `~1.3.0`.
- 2014-05-02 [v0.2.0](https://github.com/teppeis/grunt-fixclosure/releases/tag/0.2.0) Update fixclosure-1.2.0.
- 2014-04-28 [v0.1.0](https://github.com/teppeis/grunt-fixclosure/releases/tag/0.1.0) Update fixclosure-1.1.0.
- 2014-02-17 [v0.0.1](https://github.com/teppeis/grunt-fixclosure/releases/tag/0.0.1) Initial release with [fixclosure 1.0.0](https://github.com/teppeis/fixclosure/releases/tag/1.0.0) !

## License

Copyright (c) 2016 Teppei Sato &lt;teppeis@gmail.com&gt;. Licensed under the MIT license.

[npm-image]: https://badgen.net/npm/v/grunt-fixclosure?icon=npm&label=
[npm-url]: https://npmjs.org/package/grunt-fixclosure
[ci-image]: https://github.com/teppeis/grunt-fixclosure/workflows/ci/badge.svg
[ci-url]: https://github.com/teppeis/grunt-fixclosure/actions?query=workflow%3A%22ci%22
[deps-image]: https://badgen.net/david/dep/teppeis/grunt-fixclosure
[deps-url]: https://david-dm.org/teppeis/grunt-fixclosure
[node-version]: https://badgen.net/npm/node/grunt-fixclosure
[license]: https://badgen.net/npm/license/grunt-fixclosure
