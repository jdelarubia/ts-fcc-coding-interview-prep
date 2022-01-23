import { sym } from "./code";

// ----------------------------------------------
// Test suite
// ----------------------------------------------
const symTests = [
  { actual: sym([1, 2, 3, 3], [5, 2, 1, 4]), expected: [3, 4, 5], len: 3 },
  { actual: sym([1, 2, 3, 3], [5, 2, 1, 4]), expected: [3, 4, 5], len: 3 },
  { actual: sym([1, 2, 3], [5, 2, 1, 4, 5]), expected: [3, 4, 5], len: 3 },
  { actual: sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), expected: [1, 4, 5], len: 3 },
  {
    actual: sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]),
    expected: [1, 4, 5],
    len: 3,
  },
  {
    actual: sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]),
    expected: [2, 3, 4, 6, 7],
    len: 5,
  },
  {
    actual: sym(
      [3, 3, 3, 2, 5],
      [2, 1, 5, 7],
      [3, 4, 6, 6],
      [1, 2, 3],
      [5, 3, 9, 8],
      [1]
    ),
    expected: [1, 2, 4, 5, 6, 7, 8, 9],
    len: 8,
  },
];

symTests.forEach((testResult) => {
  const { actual, expected, len } = testResult;

  console.log(`comparing obtained: ${actual} with expected: ${expected}`);
  console.assert(
    JSON.stringify(actual) === JSON.stringify(expected),
    `KO! obtained: ${actual} Vs expected: ${expected}`
  );
  console.assert(
    actual.length === len,
    `KO! obtained: ${len} Vs expected: ${expected.length}`
  );
});
