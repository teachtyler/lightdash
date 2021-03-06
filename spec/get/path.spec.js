const { getPath } = require("../../dist/lightdash.common");

describe("getPath", () => {
    it("Empty", () => {
        expect(getPath([], [])).toEqual([]);
        expect(getPath({}, [])).toEqual({});
    });
    it("Simple", () => {
        expect(
            getPath(
                {
                    a: 1
                },
                ["a"]
            )
        ).toBe(1);
        expect(getPath([4, 6, 8], ["1"])).toBe(6);
        expect(
            getPath(
                {
                    a: {
                        b: 2,
                        c: [10, 20]
                    }
                },
                ["a", "c", "0"]
            )
        ).toBe(10);
    });
    it("Nonexistent", () => {
        expect(getPath([1, 2, 3], ["0", "foo"])).toBeNull();
        expect(getPath({ a: 1, b: 2 }, ["a", "foo"])).toBeNull();
        expect(getPath({ a: 1, b: 2 }, ["a", "foo", "bar", "bizz"])).toBeNull();
    });
});
