import isArray from "../is/array";
import {
    ForEachIterator,
} from "../types";
import arrMap from "./map";

/**
 * Recursively maps the values of the input array with the iterator function and return the result
 *
 * @function arrMapDeep
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @returns {any[]}
 * @example
 * //returns [4,8,[2,2,[32],8]]
 * arrMapDeep([2,4,[1,1,[16],4]],val=>val*2)
 */
const arrMapDeep = (arr: any[], fn: ForEachIterator): any[] => arrMap(arr,
    (val, index) => isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr));

export default arrMapDeep;
