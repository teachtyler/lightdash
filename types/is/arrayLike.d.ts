/**
 * Checks if a value is object-like and has a length property.
 *
 * @function isArrayLike
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isArrayLike([])
 * // => true
 *
 * isArrayLike({length: 0})
 * // => true
 *
 * @example
 * isArrayLike({})
 * // => false
 *
 * isArrayLike("foo")
 * // => false
 */
declare const isArrayLike: (val: any) => boolean;
export { isArrayLike };
