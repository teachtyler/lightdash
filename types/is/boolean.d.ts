/**
 * Checks if a value is a boolean.
 *
 * @function isBoolean
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isBoolean(true)
 * // => true
 *
 * isBoolean(false)
 * // => true
 *
 * @example
 * isBoolean(0)
 * // => false
 *
 * isBoolean(null)
 * // => false
 *
 * isBoolean("")
 * // => false
 */
declare const isBoolean: (val: any) => boolean;
export { isBoolean };
