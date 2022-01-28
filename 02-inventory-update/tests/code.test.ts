/**
 * code.test.ts
 * Test suite based on the problem specification.
 */

import { updateInventory } from "../code";

describe("updateInventory()", () => {
  describe("Given 2 different arrays with some common articles", () => {
    it("should update the amount of each items.", () => {
      const actual = updateInventory(
        [
          [21, "Bowling Ball"],
          [2, "Dirty Sock"],
          [1, "Hair Pin"],
          [5, "Microphone"],
        ],
        [
          [2, "Hair Pin"],
          [3, "Half-Eaten Apple"],
          [67, "Bowling Ball"],
          [7, "Toothpaste"],
        ]
      );
      const expected = [
        [88, "Bowling Ball"],
        [2, "Dirty Sock"],
        [3, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [5, "Microphone"],
        [7, "Toothpaste"],
      ];
      expect(actual).toEqual(expected);
      expect(actual.length).toEqual(expected.length);
    });
  });

  describe("Given an array containing inventory and an empty array", () => {
    it("should return the inventory", () => {
      const actual = updateInventory(
        [
          [21, "Bowling Ball"],
          [2, "Dirty Sock"],
          [1, "Hair Pin"],
          [5, "Microphone"],
        ],
        []
      );
      const expected = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
      ];
      expect(actual).toEqual(expected);
      expect(actual.length).toEqual(expected.length);
    });
  });

  describe("Given an empty array and another array containing inventory", () => {
    it("should return the inventory", () => {
      const actual = updateInventory(
        [],
        [
          [2, "Hair Pin"],
          [3, "Half-Eaten Apple"],
          [67, "Bowling Ball"],
          [7, "Toothpaste"],
        ]
      );
      const expected = [
        [67, "Bowling Ball"],
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [7, "Toothpaste"],
      ];
      expect(actual).toEqual(expected);
      expect(actual.length).toEqual(expected.length);
    });
  });

  describe("Given 2 arrays", () => {
    it("should return an array of updated inventory", () => {
      const actual = updateInventory(
        [
          [0, "Bowling Ball"],
          [0, "Dirty Sock"],
          [0, "Hair Pin"],
          [0, "Microphone"],
        ],
        [
          [1, "Hair Pin"],
          [1, "Half-Eaten Apple"],
          [1, "Bowling Ball"],
          [1, "Toothpaste"],
        ]
      );
      const expected = [
        [1, "Bowling Ball"],
        [0, "Dirty Sock"],
        [1, "Hair Pin"],
        [1, "Half-Eaten Apple"],
        [0, "Microphone"],
        [1, "Toothpaste"],
      ];
      expect(actual).toEqual(expected);
      expect(actual.length).toEqual(expected.length);
    });
  });
});
