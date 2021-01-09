/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

export default function isObject(val) {
  return val != null && typeof val === 'object' && val.constructor === Array;
};
