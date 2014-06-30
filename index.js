/**
 * ## .isObject
 *
 * is the value an object, and not an array?
 *
 * @param  {*} `value`
 * @return {Boolean}
 */

module.exports = function isObject(obj) {
  return typeof obj === 'object'
    && !Array.isArray(obj)
    && obj !== null;
};