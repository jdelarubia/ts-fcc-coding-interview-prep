// ----------------------------------------------
// Original assignment
// ----------------------------------------------
function pairwise(numbers: number[], target: number): number {
  const visited: number[] = [];
  const indecesSum: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    const first: number = numbers[i];

    if (visited.includes(first)) continue;

    visited.push(first);
    for (let j = i + 1; j < numbers.length; j++) {
      const current: number = numbers[j];

      if (first + current === target) {
        indecesSum.push(i + j);
      }
    }
  }
  return indecesSum.reduce((accum, num) => accum + num, 0);
} //.

export { pairwise };
