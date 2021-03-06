import { forEachEntry } from "../for/eachEntry";
import { forEachEntryMapper } from "../for/lib/iterators";
import { ITypedObject } from "./lib/typedObject";

/**
 * Maps each entry of an object and returns the result.
 *
 * @function objMap
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(key: any, val: any, index: number, obj: object)
 * @returns {Object}
 * @example
 * objMap({a: 4, b: 2}, (key, val) => val * 2)
 * // => {a: 8, b: 4}
 */
const objMap = (obj: object, fn: forEachEntryMapper<any, any>): object => {
    const objNew: ITypedObject<any> = {};

    forEachEntry(obj, (key, val, index) => {
        objNew[key] = fn(key, val, index, obj);
    });

    return objNew;
};

export { objMap };
