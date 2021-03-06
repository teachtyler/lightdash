import { forEachEntryMapper } from "../for/lib/iterators";
import { isObjectLike } from "../is/objectLike";
import { objMap } from "./map";

/**
 * Recursively maps each entry of an object and returns the result.
 *
 * @function objMapDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(key: any, val: any, index: number, obj: object)
 * @returns {Object}
 * @example
 * arrMapDeep({a: {b: 2, c: [10, 20]}}, (key, val) => val * 2)
 * // => {a: {b: 4, c: [20, 40]}}
 */
const objMapDeep = (obj: object, fn: forEachEntryMapper<any, any>): object =>
    objMap(
        obj,
        (key, val, index, objNew) =>
            isObjectLike(val)
                ? objMapDeep(val, fn)
                : fn(key, val, index, objNew)
    );

export { objMapDeep };
