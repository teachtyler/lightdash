import { forEachEntryIterator } from "../types";
import { IGenericObject } from "../interfaces";
import objEntries from "../obj/entries";
import forEach from "./each";

/**
 * Iterates over each entry of an object
 *
 * @function forEachEntry
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @example
 * // returns a = {a: 0, b: 2}
 * const a = {a: 1, b: 2};
 *
 * forEachEntry(a, (key, val, index) => a[key] = val * index)
 */
const forEachEntry = <T>(obj: IGenericObject<T>, fn: forEachEntryIterator<T>): void => {
    forEach((objEntries(obj)), (entry, index) => {
        fn(entry[0], entry[1], index, obj);
    });
};

export default forEachEntry;
