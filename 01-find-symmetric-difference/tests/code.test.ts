/**
 * code.test.ts
 * Test suite base on the problem specification.
 */

import { sym } from "../code";

describe("sym()", () => {
  describe("sym([1, 2, 3, 3], [5, 2, 1, 4])", () => {
    it("should return [3, 4, 5]", () => {
      const expected = [3, 4, 5];
      const diff = sym([1, 2, 3, 3], [5, 2, 1, 4]);
      expect(diff).toEqual(expected);
      expect(diff.length).toEqual(expected.length);
    });
  });

  describe("sym([1, 2, 3], [5, 2, 1, 4, 5])", () => {
    it("should return [1, 4, 5]", () => {
      const expected = [3, 4, 5];
      const diff = sym([1, 2, 3], [5, 2, 1, 4, 5]);
      expect(diff).toEqual(expected);
      expect(diff.length).toEqual(expected.length);
    });
  });

  describe("sym([1, 2, 5], [2, 3, 5], [3, 4, 5])", () => {
    it("should return [1, 4, 5]", () => {
      const expected = [1, 4, 5];
      const diff = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
      expect(diff).toEqual(expected);
      expect(diff.length).toEqual(expected.length);
    });
  });

  describe("sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])", () => {
    it("should return [1, 4, 5]", () => {
      const expected = [1, 4, 5];
      const diff = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
      expect(diff).toEqual(expected);
      expect(diff.length).toEqual(expected.length);
    });
  });

  describe("sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])", () => {
    it("should return [2, 3, 4, 6, 7]", () => {
      const expected = [2, 3, 4, 6, 7];
      const diff = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
      expect(diff).toEqual(expected);
      expect(diff.length).toEqual(expected.length);
    });
  });

  describe("sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])", () => {
    it("should return [2, 3, 4, 6, 7]", () => {
      const expected = [1, 2, 4, 5, 6, 7, 8, 9];
      const diff = sym(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3],
        [5, 3, 9, 8],
        [1]
      );
      expect(diff).toEqual(expected);
      expect(diff.length).toEqual(expected.length);
    });
  });
});
