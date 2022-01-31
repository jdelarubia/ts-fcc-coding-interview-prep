"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pairwise = void 0;
// ----------------------------------------------
// Original assignment
// ----------------------------------------------
function pairwise(numbers, target) {
    const visited = [];
    const indecesSum = [];
    for (let i = 0; i < numbers.length; i++) {
        const first = numbers[i];
        if (visited.includes(first))
            continue;
        visited.push(first);
        for (let j = i + 1; j < numbers.length; j++) {
            const current = numbers[j];
            if (first + current === target) {
                indecesSum.push(i + j);
            }
        }
    }
    return indecesSum.reduce((accum, num) => accum + num, 0);
} //.
exports.pairwise = pairwise;
//# sourceMappingURL=code.js.map