import { isArray } from "../is/array";
import { forEachIterator } from "./lib/iterators";

/**
 * Recursively iterates over each element in an array.
 *
 * @function forEachDeep
 * @memberof For
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @example
 * const a = [2, 4, [1, 1, [16], 4]];
 *
 * forEachDeep(a, (val, index, arr) => arr[index] = index * val)
 * // a = [0, 4, [0, 1, [0], 12]]
 */
const forEachDeep = <T>(arr: T[], fn: forEachIterator<T>): void =>
    arr.forEach(
        (val, index) =>
            isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr)
    );

export { forEachDeep };
