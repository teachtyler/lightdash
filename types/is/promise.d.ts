/**
 * Checks if a value is a promise.
 *
 * @function isPromise
 * @memberof Is
 * @since 3.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * const foo = new Promise((resolve, reject) => resolve("foo"));
 *
 * isPromise(foo);
 * // => true
 *
 * @example
 * isPromise(() => "foo");
 * // => false
 */
declare const isPromise: (val: any) => boolean;
export { isPromise };
