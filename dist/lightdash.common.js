'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Checks if the value has a certain type-string
 *
 * @function isTypeOf
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @param {string} type
 * @returns {boolean}
 * @example
 * //returns true
 * isTypeOf({},"object")
 * isTypeOf([],"object")
 * isTypeOf("foo","string")
 *
 * @example
 * //returns false
 * isTypeOf("foo","number")
 */
const isTypeOf = (val, type) => typeof val === type;

/**
 * Checks if a value is a function
 *
 * @function isFunction
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isFunction(function a(){})
 * isFunction(()=>{})
 *
 * @example
 * //returns false
 * isFunction(null)
 */
const isFunction = (val) => isTypeOf(val, "function");

/**
 * Checks if a value is an arguments array-like
 *
 * @function isArguments
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * const foo=function(){return arguments;};
 *
 * isArguments(foo());
 *
 * @example
 * // returns false
 * isArguments([]);
 */
const isArguments = (val) => isFunction(val.callee);

/**
 * Checks if a value is an array
 *
 * `Array.isArray` shorthand
 *
 * @function isArray
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isArray([]);
 * isArray([1, 2, 3]);
 *
 * @example
 * // returns false
 * isArray({});
 */
const isArray = Array.isArray;

/**
 * Checks if the value is an instance of a target constructor
 *
 * @function isInstanceOf
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @param {Class} target
 * @returns {boolean}
 * @example
 * //returns true
 * isInstanceOf({},Object)
 * isInstanceOf([],Object)
 * isInstanceOf([],Array)
 *
 * @example
 * //returns false
 * isInstanceOf({},Array)
 * isInstanceOf([],Map)
 */
const isInstanceOf = (val, target) => val instanceof target;

/**
 * Checks if a value is an array-buffer
 *
 * @function isArrayBuffer
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isArrayBuffer(new ArrayBuffer())
 *
 * @example
 * //returns false
 * isArrayBuffer([1,2])
 */
// @ts-ignore: ArrayBuffer declaration is outdated
const isArrayBuffer = (val) => isInstanceOf(val, ArrayBuffer);

/**
 * Checks if a value is undefined
 *
 * @function isUndefined
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns false
 * const a = {};
 *
 * isUndefined(a.b)
 * isUndefined(undefined)
 *
 * @example
 * //returns false
 * const a = {};
 *
 * isUndefined(1)
 * isUndefined(a)
 */
const isUndefined = (val) => isTypeOf(val, "undefined");

/**
 * Checks if a value is not undefined
 *
 * @function isDefined
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * const a = {};
 *
 * isDefined(1)
 * isDefined(a)
 *
 * @example
 * //returns false
 * const a = {};
 *
 * isDefined(a.b)
 * isDefined(undefined)
 */
const isDefined = (val) => !isUndefined(val);

/**
 * Checks if a target has a certain key
 *
 * @function hasKey
 * @memberof Has
 * @since 1.0.0
 * @param {any} target
 * @param {string} key
 * @returns {boolean}
 * @example
 * //returns true
 * hasKey([1,2,3],"0")
 * hasKey({length:0},"length")
 * hasKey("foo","replace")
 *
 * @example
 * //returns false
 * hasKey({},"foo")
 * hasKey(null,"foo")
 * hasKey(1,"foo")
 */
const hasKey = (target, key) => isDefined(target[key]);

/**
 * Checks if a value is undefined or null
 *
 * @function isNil
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isNil(null)
 * isNil(undefined)
 *
 * @example
 * //returns false
 * isNil(0)
 * isNil({})
 */
const isNil = (val) => isUndefined(val) || val === null;

/**
 * Checks if a value is not nil and has a type of object
 *
 * The main difference to isObject is that functions are not considered object-like,
 * because `typeof function(){}` does not return "function"
 *
 * @function isObjectLike
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObjectLike({})
 * isObjectLike([])
 *
 * @example
 * //returns false
 * isObjectLike(1)
 * isObjectLike(()=>1))
 */
const isObjectLike = (val) => !isNil(val) && isTypeOf(val, "object");

/**
 * Checks if a value is object-like and has a length property
 *
 * @function isArrayLike
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isArrayLike([])
 * isArrayLike({length:0})
 *
 * @example
 * //returns false
 * isArrayLike({})
 * isArrayLike(null)
 * isArrayLike("foo")
 * isArrayLike(1)
 */
const isArrayLike = (val) => isObjectLike(val) && hasKey(val, "length");

/**
 * Checks if a value is a typed array
 *
 * @function isArrayTyped
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isArrayTyped(new Int16Array());
 * isArrayTyped(new Uint8Array());
 *
 * @example
 * // returns false
 * isArrayTyped([]);
 */
const isArrayTyped = (val) => hasKey(val, "BYTES_PER_ELEMENT");

/**
 * Checks if a value is a boolean
 *
 * @function isBoolean
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isBoolean(true)
 * isBoolean(false)
 *
 * @example
 * //returns false
 * isBoolean(0)
 * isBoolean(null)
 * isBoolean("")
 */
const isBoolean = (val) => isTypeOf(val, "boolean");

/**
 * Checks if a value is a date object
 *
 * @function isDate
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isDate(Date())
 * isDate(new Date())
 *
 * @example
 * //returns false
 * isDate(123213)
 */
const isDate = (val) => isInstanceOf(val, Date);

/**
 * Returns an array of the objects keys
 *
 * `Object.keys` shorthand
 *
 * @function objKeys
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {any[]}
 * @example
 * //returns ["a","b","c"]
 * objKeys({a:1,b:2,c:3})
 */
const objKeys = Object.keys;

/**
 * Checks if a value is empty
 *
 * A value is consider empty if it is either a primitive or an object-like without content
 *
 * Array-likes are considered empty if they have a length of zero,
 * set/maps if they have a size of zero,
 * and objects if their keys have a length of zero
 *
 * @function isEmpty
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isEmpty([])
 * isEmpty({})
 * isEmpty("")
 * isEmpty(true)
 * isEmpty(1)
 * isEmpty(null)
 *
 * @example
 * //returns false
 * isEmpty("foo")
 * isEmpty([1,2])
 * isEmpty({a:1})
 */
const isEmpty = (val) => {
    if (isArrayLike(val)) {
        return val.length === 0;
    }
    else if (hasKey(val, "size")) {
        return val.size === 0;
    }
    else if (isObjectLike(val)) {
        return objKeys(val).length === 0;
    }
    else {
        return true;
    }
};

/**
 * Returns an array of the objects entries
 *
 * `Object.entries` shorthand
 *
 * @function objEntries
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {any[]} Array<[key: any, val: any]>]
 * @example
 * //returns [["a",1],["b",2],["c",3]]
 * objEntries({a:1,b:2,c:3})
 */
const objEntries = Object.entries;

/**
 * Iterates over each element in an array
 *
 * @function forEach
 * @memberof For
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @example
 * //returns a = [0,2,6]
 * const a = [1,2,3];
 *
 * forEach(a,(val,index)=>a[index]=val*index)
 */
const forEach = (arr, fn) => arr.forEach(fn);

/**
 * Iterates over each entry of an object
 *
 * @function forEachEntry
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @example
 * //returns a = {a:0, b: 2}
 * const a = {a:1, b:2};
 *
 * forEachEntry(a,(val,key,index)=>a[key]=val*index)
 */
const forEachEntry = (obj, fn) => {
    forEach(objEntries(obj), (entry, index) => {
        fn(entry[1], entry[0], index, obj);
    });
};

/**
 * Checks if a value is an object
 *
 * @function isObject
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObject({})
 * isObject([])
 * isObject(()=>1))
 *
 * @example
 * //returns false
 * isObject(1)
 */
const isObject = (val) => !isNil(val) && (isTypeOf(val, "object") || isTypeOf(val, "function"));

/**
 * Recursively checks if two items and their the contents are the same
 *
 * @function isEqual
 * @memberof Is
 * @since 1.0.0
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 * @example
 * //returns true
 * isEqual(1,1)
 * isEqual({},{})
 * isEqual([1,2],[1,2])
 * isEqual([1,2,[3,4]],[1,2,[3,4]])
 *
 * @example
 * //returns false
 * isEqual([1,2,3],[1])
 * isEqual([1,2,[3]],[1,2,[4]])
 */
const isEqual = (a, b) => {
    if (a === b) {
        return true;
    }
    if (isObject(a) && isObject(b) && objKeys(a).length === objKeys(b).length) {
        let result = true;
        forEachEntry(a, (aVal, key) => {
            // Only check if the comparison didn't fail already
            if (result === true) {
                if (hasKey(b, key)) {
                    const bVal = b[key];
                    result = isEqual(aVal, bVal);
                }
                else {
                    result = false;
                }
            }
        });
        return result;
    }
    return false;
};

/**
 * Checks if a value is an array-buffer
 *
 * @function isError
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isError(new Error())
 * isError(new URIError())
 *
 * @example
 * //returns false
 * isError("foo")
 */
const isError = (val) => isInstanceOf(val, Error);

/**
 * Checks if a value is finite
 *
 * `Number.isFinite` shorthand
 *
 * @function isFinite
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isFinite(1);
 * isFinite(-2.123);
 *
 * @example
 * // returns false
 * isFinite(Infinity);
 * isFinite("foo")
 */
const isFinite = Number.isFinite;

/**
 * Checks if a value is an integer
 *
 * `Number.isInteger` shorthand
 *
 * @function isInteger
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isInteger(1);
 * isInteger(2000);
 *
 * @example
 * // returns false
 * isInteger(2.34);
 * isInteger(Infinity)
 */
const isInteger = Number.isInteger;

/**
 * Checks if a value is a map
 *
 * @function isMap
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isMap(new Map())
 *
 * @example
 * //returns false
 * isMap([[1,2]])
 */
const isMap = (val) => isInstanceOf(val, Map);

/**
 * Checks if a value is a number
 *
 * @function isNumber
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isNumber(1)
 * isNumber(2.34)
 *
 * @example
 * //returns false
 * isNumber(null)
 */
const isNumber = (val) => isTypeOf(val, "number");

/**
 * Checks if a value is a plain object
 *
 * An object is considered plain of its constructor is the built-in object constructor
 *
 * @function isObjectPlain
 * @memberof Is
 * @since 2.9.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObjectPlain({})
 *
 * @example
 * //returns false
 * isObjectPlain([])
 * isObjectPlain(()=>{})
 */
const isObjectPlain = (val) => isObject(val) && val.constructor === Object;

/**
 * Checks if a value is a primitive
 *
 * @function isPrimitive
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isPrimitive(1)
 * isPrimitive(null)
 *
 * @example
 * //returns false
 * isPrimitive({})
 * isPrimitive([])
 */
const isPrimitive = (val) => !isObjectLike(val);

/**
 * Checks if a value is a regular expression
 *
 * @function isRegExp
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isRegExp(new RegExp("foo"))
 * isRegExp(/foo/)
 *
 * @example
 * //returns false
 * isRegExp("foo")
 */
// @ts-ignore: RegExp declaration is outdated
const isRegExp = (val) => isInstanceOf(val, RegExp);

/**
 * Checks if a value is a set
 *
 * @function isSet
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isSet(new Set())
 *
 * @example
 * //returns false
 * isSet([1,2])
 */
const isSet = (val) => isInstanceOf(val, Set);

/**
 * Checks if a value is a string
 *
 * @function isString
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isString("foo")
 *
 * @example
 * //returns false
 * isString(1)
 */
const isString = (val) => isTypeOf(val, "string");

/**
 * Checks if a value is a symbol
 *
 * @function isSymbol
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isSymbol(Symbol())
 *
 * @example
 * //returns false
 * isSymbol("foo")
 */
const isSymbol = (val) => isTypeOf(val, "symbol");

/**
 * Checks if an object has a certain own key
 *
 * `obj.hasOwnProperty` shorthand
 *
 * @function hasOwnProperty
 * @memberof Has
 * @since 2.8.0
 * @param {Object} obj
 * @param {string} key
 * @returns {boolean}
 * @example
 * //returns true
 * hasOwnProperty([1,2,3],"0")
 * hasOwnProperty({length:0},"length")
 *
 * @example
 * //returns false
 * hasOwnProperty([],"forEach")
 * hasOwnProperty("foo","replace")
 */
const hasOwnProperty = (obj, key) => obj.hasOwnProperty(key);

/**
 * Accesses a target by a path-array of key-strings
 *
 * If the path doesn't exist, null is returned
 *
 * @function getPath
 * @memberof Get
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * // returns 1
 * getPath({a:1},["a"]);
 *
 * @example
 * // returns 6
 * getPath([4,6,8],["1"]);
 *
 * @example
 * // returns 10
 * getPath({a:{b:2,c:[10,20]}},["a","c","0"]);
 */
const getPath = (target, path) => {
    let targetCurrent = target;
    let index = 0;
    while (isDefined(targetCurrent) && index < path.length) {
        const keyCurrent = path[index];
        if (hasKey(targetCurrent, keyCurrent)) {
            targetCurrent = targetCurrent[keyCurrent];
            index++;
        }
        else {
            return null;
        }
    }
    return targetCurrent;
};

/**
 * Checks if a target has a path-array of key-strings
 *
 * @function hasPath
 * @memberof Has
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * // returns true
 * hasPath({a:1},["a"]);
 * hasPath([4,6,8],["1"]);
 * hasPath({a:{b:2,c:[10,20]}},["a","c","0"]);
 *
 * @example
 * // returns false
 * hasPath({a:1},["c"]);
 * hasPath([4,6,8],["8"]);
 * hasPath({a:{b:2,c:[10,20]}},["f","x","231","21"]);
 * hasPath(1,["foo"]);
 */
const hasPath = (target, path) => !isNil(getPath(target, path));

/**
 * Recursively iterates over each element in an array
 *
 * @function forEachDeep
 * @memberof For
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @example
 * //returns [0,4,[0,1,[0],12]]
 * const a = [2,4,[1,1,[16],4]];
 *
 * forEachDeep(a,(val,index,arr)=>arr[index]=index*val)
 */
const forEachDeep = (arr, fn) => forEach(arr, (val, index) => isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr));

/**
 * Recursively iterates over each entry of an object
 *
 * @function forEachEntryDeep
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @example
 * //returns {a:0, b:{c: [0,2]}}
 * const a = {a:1, b:{c: [1,2]}};
 *
 * forEachEntryDeep(a,(val,key,index,obj)=>obj[key]=index*val)
 */
const forEachEntryDeep = (obj, fn) => forEachEntry(obj, (val, key, index) => isObjectLike(val) ? forEachEntryDeep(val, fn) : fn(val, key, index, obj));

/**
 * Wrapper around a simple for-loop
 *
 * @function forTimes
 * @memberof For
 * @param {number} start
 * @param {number} max
 * @param {number} increase
 * @param {function} fn fn(val: number)
 * @example
 * //returns [2,4,6,8,10]
 * const a = [];
 *
 * forTimes(1,6,1,val=>a.push(val*2))
 */
const forTimes = (start, max, increase, fn) => {
    for (let index = start; index <= max; index += increase) {
        fn(index);
    }
};

/**
 * Creates an array of elements split into groups by size
 *
 * @function arrChunk
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @param {number} chunk
 * @returns {any[]}
 * @example
 * //returns [[1,2],[3,4],[5,6]]
 * arrChunk([1,2,3,4,5,6],2)
 *
 * @example
 * //returns [[1,2,3],[4,5]]
 * arrChunk([1,2,3,4,5],3)
 */
const arrChunk = (arr, chunk) => {
    if (chunk < 1) {
        return [];
    }
    else {
        const result = [];
        forTimes(0, arr.length - 1, chunk, (index) => {
            result.push(arr.slice(index, index + chunk));
        });
        return result;
    }
};

/**
 * Creates a new array with the values of the input iterable
 *
 * `Array.from` shorthand
 *
 * @function arrClone
 * @memberof Array
 * @since 1.0.0
 * @param {any} arr
 * @returns {any[]}
 * @example
 * //returns a = [1,2,3], b = [1,10,3]
 * const a = [1,2,3];
 * const b = arrClone(a);
 *
 * b[1] = 10;
 */
const arrClone = Array.from;

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
const arrMapDeep = (arr, fn) => arr.map((val, index) => isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr));

/**
 * Recursively creates a new array with the values of the input iterable
 *
 * @function arrCloneDeep
 * @memberof Array
 * @since 2.0.0
 * @param {any} arr
 * @returns {any[]}
 * @example
 * //returns a = [1,2,3,[5,[6]]], b = [1,2,3,[5,[10]]]
 * const a = [1,2,3,[5,[6]]];
 * const b = arrCloneDeep(a);
 *
 * b[3][1][0] = 10;
 */
const arrCloneDeep = (arr) => arrMapDeep(arrClone(arr), (val) => isArray(val) ? arrClone(val) : val);

/**
 * Returns an array with every falsey value removed out
 *
 * @function arrCompact
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * //returns [1,2,3,4,5]
 * arrCompact([1,"","",2,3,null,4,undefined,5,""])
 */
const arrCompact = (arr) => arr.filter((val) => val);

/**
 * Counts how many times an element appears in an array and returns a Map<element: any, count: number>
 *
 * @function arrCount
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @returns {Map<any, number>} Map<element: any, count: number>
 * @example
 * //returns Map{1:4, 2:2, 3:1, 4:1}
 * arrCount([1,1,2,2,1,3,4,1])
 */
const arrCount = (arr) => {
    const result = new Map();
    forEach(arr, (val) => {
        // @ts-ignore: .get() value will always be defined, as we check with .has() beforehand
        result.set(val, result.has(val) ? result.get(val) + 1 : 1);
    });
    return result;
};

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
 * arrDifference([1,2,3], [1,"foo",3])
 *
 * @example
 * //returns [1,3]
 * arrDifference([1,2,3], ["foo"], [2,0,2])
 */
const arrDifference = (arr, ...values) => {
    const valuesCounted = arrCount([].concat(...values));
    return arr.filter((item) => !valuesCounted.has(item));
};

/**
 * Recursively flattens an array
 *
 * @function arrFlattenDeep
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * //returns [1,2,3]
 * arrFlattenDeep([1,2,[3]])
 *
 * @example
 * //returns [1,2,3,5,6,6]
 * arrFlattenDeep([1,2,[3,[[[5]]],[6,[6]]])
 */
const arrFlattenDeep = (arr) => {
    const result = [];
    forEach(arr, (val) => {
        if (isArray(val)) {
            result.push(...arrFlattenDeep(val));
        }
        else {
            result.push(val);
        }
    });
    return result;
};

/**
 * Returns an array of all elements that exist in the first array, and at least once in one of the other arrays
 *
 * @function arrIntersection
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @param {...any[]} values
 * @returns {any[]}
 * @example
 * //returns [1,3]
 * arrIntersection([1,2,3], [1,"foo",3])
 *
 * @example
 * //returns [2]
 * arrIntersection([1,2,3], ["foo"], [2,0,2])
 */
const arrIntersection = (arr, ...values) => {
    const valuesCounted = arrCount([].concat(...values));
    return arr.filter((item) => valuesCounted.has(item));
};

/**
 * Checks if a number is in the given range
 *
 * @function numberInRange
 * @memberof Number
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 * @example
 * //returns true
 * numberInRange(0.5,0,1)
 * numberInRange(1,0,1)
 * numberInRange(0,-5,5)
 *
 * @example
 * //returns false
 * numberInRange(-1,0,5)
 * numberInRange(10,0,5)
 */
const numberInRange = (val, min, max) => val >= min && val <= max;

/**
 * Returns a new array with the item at the index removed
 *
 * @function arrRemoveIndex
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {number} index
 * @returns {any[]}
 * @example
 * //returns ["foo","fizz"]
 * arrRemoveIndex(["foo","bar","fizz"],1)
 */
const arrRemoveIndex = (arr, index) => {
    if (numberInRange(index, 0, arr.length - 1)) {
        return index === 0 ?
            arr.slice(1) :
            arr.slice(0, index).concat(arr.slice(index + 1));
    }
    else {
        return arr;
    }
};

/**
 * Returns a new array with the first occurrence of the item removed
 *
 * @function arrRemoveItem
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {any} item
 * @returns {any[]}
 * @example
 * //returns ["foo","fizz"]
 * arrRemoveItem(["foo","bar","fizz"],"bar")
 */
const arrRemoveItem = (arr, item) => arr.includes(item) ?
    arrRemoveIndex(arr, arr.indexOf(item)) :
    arr;

/**
 * Returns a new array with every n-th item from the input array
 *
 * @function arrStep
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @param {number} step
 * @returns {any[]}
 * @example
 * //returns [1,3,5]
 * arrStep([1,2,3,4,5,6],2)
 */
const arrStep = (arr, step) => arr.filter((val, index) => index % step === 0);

/**
 * Returns an array of all unique elements in an array
 *
 * @function arrUniq
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * //returns [1,2,3,4]
 * arrUniq([1,1,1,2,3,1,2,1,4])
 */
const arrUniq = (arr) => arrClone(new Set(arr));

/**
 * Creates a new object with the entries of the input object
 *
 * @function objClone
 * @memberof Object
 * @since 1.0.0
 * @param {object} obj
 * @returns {object}
 * @example
 * //returns a = {a:4, b:2}, b = {a:10, b:2}
 * const a = {a:4, b:2};
 * const b = objClone(a);
 *
 * b.a = 10;
 */
const objClone = (obj) => isArray(obj) ? arrClone(obj) : Object.assign({}, obj);

/**
 * Maps each entry of an object and returns the result
 *
 * @function objMap
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @returns {Object}
 * @example
 * //returns a = {a:8, b:4}
 * objMap({a:4, b:2},val=>val*2)
 */
const objMap = (obj, fn) => {
    const objNew = objClone(obj);
    forEachEntry(objNew, (val, key, index) => {
        objNew[key] = fn(val, key, index, objNew);
    });
    return objNew;
};

/**
 * Recursively maps each entry of an object and returns the result
 *
 * @function objMapDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @returns {Object}
 * @example
 * //returns {a:{b:4,c:[20,40]}}
 * arrMapDeep({a:{b:2,c:[10,20]}},val=>val*2)
 */
const objMapDeep = (obj, fn) => objMap(obj, (val, key, index, objNew) => {
    if (isObjectLike(val)) {
        return objMapDeep(val, fn);
    }
    else {
        return fn(val, key, index, objNew);
    }
});

/**
 * Deeply creates a new object with the entries of the input object
 *
 * @function objCloneDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Object}
 * @example
 * //returns a = {a:{b:2,c:{a:10,b:20}}, b = {a:{b:2,c:{a:123,b:20}}}
 * const a = {a:{b:2,c:{a:10,b:20}}};
 * const b = objCloneDeep(a);
 *
 * b.a.c.a = 123;
 */
const objCloneDeep = (obj) => objMapDeep(objClone(obj), (val) => isObjectLike(val) ? objClone(val) : val);

/**
 * Sets every nil property of object to the value from the default object
 *
 * @function objDefaults
 * @memberof Object
 * @since 2.6.0
 * @param {Object} obj
 * @param {Object} objDefault
 * @returns {Object}
 * @example
 * //returns a = {a:1,b:2,c:5}
 * objDefaults({a:1,c:5},{a:1,b:2,c:3})
 */
const objDefaults = (obj, objDefault) => {
    const result = objClone(obj);
    forEachEntry(objDefault, (valDefault, keyDefault) => {
        if (isNil(obj[keyDefault])) {
            result[keyDefault] = valDefault;
        }
    });
    return result;
};

/**
 * Recursively sets every nil property of object to the value from the default object
 *
 * @function objDefaultsDeep
 * @memberof Object
 * @since 2.7.0
 * @param {Object} obj
 * @param {Object} objDefault
 * @returns {Object}
 * @example
 * //returns a = {a:[1,2,3],b:2,c:{f:'x'}}
 * objDefaultsDeep({a:[1,2],c:{f:'x'}},{a:[1,2,3],b:2,c:{f:'y'}})
 */
const objDefaultsDeep = (obj, objDefault) => {
    const result = objCloneDeep(obj);
    forEachEntry(objDefault, (valDefault, keyDefault) => {
        const valGiven = obj[keyDefault];
        if (isObjectLike(valDefault)) {
            result[keyDefault] = isObjectLike(valGiven) ? objDefaultsDeep(valGiven, valDefault) : valDefault;
        }
        else {
            result[keyDefault] = isNil(valGiven) ? valDefault : valGiven;
        }
    });
    return result;
};

/**
 * Adds a property to an object with optional custom flags
 *
 * `Object.defineProperty` shorthand
 *
 * @function objDefineProperty
 * @memberof Object
 * @since 2.8.0
 * @param {Object} obj
 * @param {string} key
 * @param {any} val
 * @param {boolean} [enumerable=true]
 * @param {boolean} [writable=true]
 * @param {boolean} [configurable=true]
 * @returns {Object}
 * @example
 * //returns a = {"foo":1}
 * const a={};
 * objDefineProperty(a,"foo",1)
 */
const objDefineProperty = (obj, key, val, enumerable = true, writable = true, configurable = true) => Object.defineProperty(obj, key, {
    value: val,
    enumerable,
    writable,
    configurable,
});

/**
 * Merges contents of two objects
 *
 * `Object.assign` shorthand
 *
 * @function objMerge
 * @memberof Object
 * @since 2.7.0
 * @param {Object} obj
 * @param {Object} objSecondary
 * @returns {Object}
 * @example
 * //returns {a:1,b:2}
 * objMerge({a:1},{b:2})
 */
const objMerge = Object.assign;

/**
 * Returns an array of the objects values
 *
 * `Object.values` shorthand
 *
 * @function objValues
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {any[]}
 * @example
 * //returns [1,2,3]
 * objValues({a:1,b:2,c:3})
 */
const objValues = Object.values;

/**
 * Creates a map from an object
 *
 * @function mapFromObject
 * @memberof Map
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Map}
 * @example
 * //returns Map{a:1, b:4, c:5}
 * mapFromObject({a:1,b:4,c:5})
 */
const mapFromObject = (obj) => new Map(objEntries(obj));

/**
 * Clamps a number in a range
 *
 * @function numberClamp
 * @memberof Number
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {number}
 * @example
 * //returns 5
 * numberClamp(5,0,10)
 *
 * @example
 * //returns 0
 * numberClamp(-2,0,10)
 *
 * @example
 * //returns 10
 * numberClamp(99,0,10)
 */
const numberClamp = (val, min, max) => {
    if (val < min) {
        return min;
    }
    else if (val > max) {
        return max;
    }
    else {
        return val;
    }
};

/**
 * Return a random float number in the range
 *
 * @function numberRandomFloat
 * @memberof Number
 * @since 1.0.0
 * @param {number} [min=0]
 * @param {number} [max=1]
 * @returns {number}
 * @example
 * numberRandomFloat(0,1) // 0.56832138
 * numberRandomFloat(0,100) // 54.2135123
 * numberRandomFloat(0.1,0.2) // 0.125323
 */
const numberRandomFloat = (min = 0, max = 1) => min + Math.random() * (max - min);

/**
 * Return a random integer number in the range
 *
 * @function numberRandomInt
 * @memberof Number
 * @since 1.0.0
 * @param {number} [min=0]
 * @param {number} [max=100]
 * @returns {number}
 * @example
 * numberRandomInt(0,1) // 1
 * numberRandomInt(0,100) // 54
 * numberRandomInt(-10,10) // 2
 */
const numberRandomInt = (min = 0, max = 1) => Math.floor(numberRandomFloat(min, max) /
    (max - min) * (max - min + 1));

/**
 * Value, type checking and comparison
 * @namespace Is
 */
/**
 * Checks if a target has something
 * @namespace Has
 */
/**
 * Gets target data
 * @namespace Get
 */
/**
 * Looping through iterables
 * @namespace For
 */
/**
 * Array manipulation and analysis
 * @namespace Array
 */
/**
 * Object manipulation and analysis
 * @namespace Object
 */
/**
 * Map manipulation and analysis
 * @namespace Map
 */
/**
 * Number generation and checking
 * @namespace Number
 */

exports.isEqual = isEqual;
exports.isInstanceOf = isInstanceOf;
exports.isTypeOf = isTypeOf;
exports.isUndefined = isUndefined;
exports.isDefined = isDefined;
exports.isNil = isNil;
exports.isPrimitive = isPrimitive;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isBoolean = isBoolean;
exports.isSymbol = isSymbol;
exports.isObject = isObject;
exports.isObjectLike = isObjectLike;
exports.isObjectPlain = isObjectPlain;
exports.isArray = isArray;
exports.isArrayLike = isArrayLike;
exports.isArrayBuffer = isArrayBuffer;
exports.isArrayTyped = isArrayTyped;
exports.isMap = isMap;
exports.isSet = isSet;
exports.isDate = isDate;
exports.isRegExp = isRegExp;
exports.isFunction = isFunction;
exports.isArguments = isArguments;
exports.isError = isError;
exports.isEmpty = isEmpty;
exports.isFinite = isFinite;
exports.isInteger = isInteger;
exports.hasKey = hasKey;
exports.hasPath = hasPath;
exports.hasOwnProperty = hasOwnProperty;
exports.getPath = getPath;
exports.forTimes = forTimes;
exports.forEach = forEach;
exports.forEachDeep = forEachDeep;
exports.forEachEntry = forEachEntry;
exports.forEachEntryDeep = forEachEntryDeep;
exports.arrClone = arrClone;
exports.arrCloneDeep = arrCloneDeep;
exports.arrMapDeep = arrMapDeep;
exports.arrFlattenDeep = arrFlattenDeep;
exports.arrCompact = arrCompact;
exports.arrChunk = arrChunk;
exports.arrStep = arrStep;
exports.arrRemoveIndex = arrRemoveIndex;
exports.arrRemoveItem = arrRemoveItem;
exports.arrCount = arrCount;
exports.arrDifference = arrDifference;
exports.arrIntersection = arrIntersection;
exports.arrUniq = arrUniq;
exports.objClone = objClone;
exports.objCloneDeep = objCloneDeep;
exports.objMap = objMap;
exports.objMapDeep = objMapDeep;
exports.objDefaults = objDefaults;
exports.objDefaultsDeep = objDefaultsDeep;
exports.objMerge = objMerge;
exports.objDefineProperty = objDefineProperty;
exports.objKeys = objKeys;
exports.objValues = objValues;
exports.objEntries = objEntries;
exports.mapFromObject = mapFromObject;
exports.numberInRange = numberInRange;
exports.numberClamp = numberClamp;
exports.numberRandomFloat = numberRandomFloat;
exports.numberRandomInt = numberRandomInt;
