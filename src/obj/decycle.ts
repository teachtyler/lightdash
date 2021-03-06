import { forEachEntryMapper } from "../for/lib/iterators";
import { isObjectLike } from "../is/objectLike";
import { ITypedObject } from "./lib/typedObject";
import { objMap } from "./map";

/**
 * Replaces every circular reference in an object.
 *
 * Can take a custom replacer function and a pre-filled WeakSet of references.
 *
 * @function objDecycle
 * @memberof Object
 * @since 6.0.0
 * @param {Object} obj
 * @param {function} [fn=()=>null] fn(key: any, val: any, index: number, obj: object)
 * @param {WeakSet<any>} [references=new WeakSet()]
 * @returns {Object}
 * @example
 * const a = {b: 1, c: 2};
 *
 * a.a = a;
 *
 * objDecycle(a)
 * // => {a: null, b: 1, c: 2}
 *
 * objDecycle(a,key=>`_${key}`)
 * // => {a: "_a", b: 1, c: 2}
 */
const objDecycle = (
    obj: ITypedObject<any>,
    fn: forEachEntryMapper<any, any> = () => null,
    references: WeakSet<any> = new WeakSet()
): object => {
    references.add(obj);

    return objMap(obj, (key, val, index, objNew) => {
        if (references.has(val)) {
            return fn(key, val, index, objNew);
        }

        if (isObjectLike(val)) {
            references.add(val);

            return objDecycle(val, fn, references);
        }

        return val;
    });
};

export { objDecycle };
