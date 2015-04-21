/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var assert = require('assert');
var isObject = require('./');

it('should be true when the value is an object.', function () {
  assert(isObject({}));
  assert(isObject(Object.create({})));
  assert(isObject(Object.create(Object.prototype)));
  assert(isObject(Object.create(null)));

  function Foo() {}
  assert(isObject(new Foo));
  assert(isObject(new Foo()));
});

it('should be true when the value is not an object.', function () {
  function Foo() {}
  assert(!isObject('whatever'));
  assert(!isObject(/foo/));
  assert(!isObject(1));
  assert(!isObject(['foo', 'bar']));
  assert(!isObject([]));
  assert(!isObject(function () {}));
  assert(!isObject(null));
});
