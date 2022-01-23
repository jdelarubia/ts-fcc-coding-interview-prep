"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sym = void 0;
// ----------------------------------------------
// Original assignment
// ----------------------------------------------
function sym(...args) {
    let one = new Set();
    [...arguments].forEach((subArray) => {
        const subSet = Array.from(new Set(subArray));
        subSet.forEach((elem) => {
            if (!one.has(elem))
                one.add(elem);
            else
                one.delete(elem);
        });
    });
    return Array.from(one).sort();
} //.
exports.sym = sym;
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
//# sourceMappingURL=code.js.map