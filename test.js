'use strict';

var assert = require('assert');
var isObject = require('./');

assert(isObject({}));
assert(isObject(Object.create({})));
assert(isObject(Object.create(Object.prototype)));
assert(isObject(Object.create(null)));
assert(isObject(/foo/));

function Foo() {}
assert(isObject(new Foo()));

assert(!isObject('whatever'));
assert(!isObject(1));
assert(!isObject(function() {}));
assert(!isObject([]));
assert(!isObject(['foo', 'bar']));
assert(!isObject());
assert(!isObject(undefined));
assert(!isObject(null));
