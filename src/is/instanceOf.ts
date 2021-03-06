import { IGenericClass } from "./lib/genericClass";

/**
 * Checks if the value is an instance of a target constructor.
 *
 * @function isInstanceOf
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @param {Class} target
 * @returns {boolean}
 * @example
 * isInstanceOf({}, Object)
 * // => true
 *
 * isInstanceOf([], Object)
 * // => true
 *
 * isInstanceOf([], Array)
 * // => true
 *
 * @example
 * isInstanceOf({}, Array)
 * // => false
 *
 * isInstanceOf([], Map)
 * // => false
 */
const isInstanceOf = (val: any, target: IGenericClass): boolean =>
    val instanceof target;

export { isInstanceOf, IGenericClass };
