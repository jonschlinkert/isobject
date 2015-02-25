/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var assert = require('assert');
var isObject = require('./');

it('should be true when the value is an object.', function () {
  assert(isObject({}) === true);
  assert(isObject(Object.create({})) === true);
  assert(isObject(Object.create(Object.prototype)) === true);
  assert(isObject(Object.create(null)) === true);
  assert(isObject({foo: 'bar'}) === true);

  function Foo() {this.abc = {};};
  assert(isObject(new Foo) === true);
  assert(isObject(/foo/) === true);
});

it('should be true when the value is not an object.', function () {
  assert(isObject(function () {}) === false);
  assert(isObject(1) === false);
  assert(isObject(['foo', 'bar']) === false);
  assert(isObject(null) === false);
  assert(isObject([]) === false);
});
