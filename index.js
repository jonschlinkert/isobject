/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';


module.exports = function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]'
    && typeof o === 'object';
};
