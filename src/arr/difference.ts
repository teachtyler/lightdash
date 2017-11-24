import forEach from "../for/each";
import arrCount from "./count";

/**
 * Returns an array of all elements that exist in the first array, but not any others
 *
 * @function arrDifference
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @param {...any[]} values
 * @returns {any[]}
 * @example
 * //returns [2]
 * arrDifference([1, 2, 3], [1, "foo", 3])
 *
 * @example
 * //returns [1, 3]
 * arrDifference([1, 2, 3], ["foo"], [2, 0, 2])
 */
const arrDifference = (arr: any[], ...values: any[]): any[] => {
    const valuesCounted = arrCount([].concat(...values));

    return arr.filter((item: any) => !valuesCounted.has(item));
};

export default arrDifference;
