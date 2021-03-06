/**
 * Throttles a function to only run every n ms.
 *
 * Useful for event handlers that fire several times a second, such as scroll or resize.
 *
 * @function fnThrottle
 * @memberof Fn
 * @since 3.1.0
 * @param {Function} fn
 * @param {number} timeout
 * @param {boolean} [immediate=false]
 * @returns {Function}
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooThrottled = fnThrottle(foo, 500);
 * // function can only run every 500ms
 */
const fnThrottle = (
    fn: (...args: any[]) => any,
    timeout: number,
    immediate = false
) => {
    const getTimer = () =>
        setTimeout(() => {
            canRun = true;
            clearTimeout(timer);
        }, timeout);
    let canRun = immediate;
    // Has to be set to any because it can either a number (in browsers) or a Timer instance (in NodeJS)
    let timer: any = immediate ? -1 : getTimer();

    // tslint:disable-next-line:only-arrow-functions
    return function() {
        if (canRun) {
            canRun = false;
            timer = getTimer();

            return fn(...arguments);
        }
    };
};

export { fnThrottle };
