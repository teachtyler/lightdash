const { arrCount } = require("../../dist/lightdash.common");

describe("arrCount", () => {
    it("Empty", () => {
        expect(arrCount([])).toEqual(new Map([]));
    });
    it("Single", () => {
        expect(arrCount([1])).toEqual(new Map([[1, 1]]));
    });
    it("Simple", () => {
        expect(arrCount([1, 1, 2, 2, 1, 3, 4, 1])).toEqual(
            new Map([[1, 4], [2, 2], [3, 1], [4, 1]])
        );
    });
});
