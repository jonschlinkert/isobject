# isobject

[![npm version](https://img.shields.io/npm/v/isobject.svg)](https://www.npmjs.com/package/isobject)
[![npm downloads](https://img.shields.io/npm/dm/isobject.svg)](https://www.npmjs.com/package/isobject)
[![CI](https://github.com/jonschlinkert/isobject/actions/workflows/ci.yml/badge.svg)](https://github.com/jonschlinkert/isobject/actions/workflows/ci.yml)

> Returns `true` if a value is an object and not an array or `null`.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and starring the project to show your ❤️ and support.

Use [is-plain-object](https://github.com/jonschlinkert/is-plain-object) if you only want objects created by the `Object` constructor.

## Install

```sh
npm install isobject
```

## Usage

```js
const isObject = require('isobject');

isObject({});                      // true
isObject(Object.create(null));     // true
isObject(new Date());              // true
isObject(/foo/);                   // true

isObject();                        // false
isObject(null);                    // false
isObject([]);                      // false
isObject(() => {});                // false
isObject('foo');                   // false
```

## API

### `isObject(value)`

Returns `true` when `value` is a non-null object and is not an array. Functions return `false`.

## Development

Install dependencies, build the CommonJS bundle, and run the tests:

```sh
npm install
npm run build
npm test
```

## License

[MIT](LICENSE) © Jon Schlinkert
