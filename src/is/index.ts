/**
 * Checks if a value is a valid index.
 *
 * @function isIndex
 * @memberof Is
 * @since 5.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isIndex(0)
 * // => true
 *
 * isIndex(123)
 * // => true
 *
 * @example
 * isIndex(0.43)
 * // => false
 *
 * isIndex(-4)
 * // => false
 *
 * isIndex(Infinity)
 * // => false
 */
const isIndex = (val: any): boolean => Number.isInteger(val) && val >= 0;

export { isIndex };
