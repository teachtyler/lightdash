import { numClamp } from "./clamp";

/**
 * Clamps a number in the range of safe integers.
 *
 * @function numSafe
 * @memberof Number
 * @since 7.1.0
 * @param {number} val
 * @returns {number}
 * @example
 * numSafe(5)
 * // => 5
 *
 * numSafe(Number.MAX_VALUE)
 * // => Number.MIN_SAFE_INTEGER
 *
 * numSafe(Infinity)
 * // => Number.MIN_SAFE_INTEGER
 */
const numSafe = (val: number): number =>
    numClamp(val, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

export { numSafe };
