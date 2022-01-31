/**
 * code.test.ts
 */

import { pairwise } from "../code";

describe("pairwise()", () => {
  describe("empty array", () => {
    it("should return 0", () => {
      const actual = pairwise([], 0);
      const expected = 0;
      expect(actual).toEqual(expected);
    });
  });

  describe("empty array", () => {
    it("should return 0 since it doesn't meet the criteria", () => {
      const actual = pairwise([], 100);
      const expected = 0;
      expect(actual).toEqual(expected);
    });
  });

  describe("[1,1,2], 3", () => {
    it("should return 2 : (0+2)", () => {
      const actual = pairwise([1, 1, 2], 3);
      const expected = 2;
      expect(actual).toEqual(expected);
    });
  });

  describe("[7, 9, 11, 13, 15], 20", () => {
    it("should return 6 : (0+3) + (1+2)", () => {
      const actual = pairwise([7, 9, 11, 13, 15], 20);
      const expected = 6;
      expect(actual).toEqual(expected);
    });
  });

  describe("[1, 4, 2, 3, 0, 5], 7", () => {
    it("should return 11 : (1+3) + (2+5)", () => {
      const actual = pairwise([1, 4, 2, 3, 0, 5], 7);
      const expected = 11;
      expect(actual).toEqual(expected);
    });
  });

  describe("[1, 3, 2, 4], 4", () => {
    it("should return 1 : (0+1)", () => {
      const actual = pairwise([1, 3, 2, 4], 4);
      const expected = 1;
      expect(actual).toEqual(expected);
    });
  });
});
