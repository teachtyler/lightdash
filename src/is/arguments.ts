import isFunction from "./function";

/**
 * Checks if a value is an array
 *
 * @function isArguments
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * const foo=function(){return arguments;};
 *
 * isArguments(foo());
 *
 * @example
 * // returns false
 * isArray([]);
 */
const isArguments = (val: any): boolean => isFunction(val.callee);

export default isArguments;
