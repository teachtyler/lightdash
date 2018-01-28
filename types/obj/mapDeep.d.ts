import { forEachEntryIterator } from "../types";
import { IGenericObject } from "../interfaces";
/**
 * Recursively maps each entry of an object and returns the result.
 *
 * @function objMapDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @returns {Object}
 * @example
 * // returns {a: {b: 4, c: [20, 40]}}
 * arrMapDeep({a: {b: 2, c: [10, 20]}}, (key, val) => val * 2)
 */
declare const objMapDeep: <T>(obj: IGenericObject<T>, fn: forEachEntryIterator<T>) => IGenericObject<any>;
export default objMapDeep;
