"use strict";
function dictFromArray(arr) {
    let inventory = {};
    arr.forEach((entry) => {
        const [quantity, reference] = entry;
        inventory[reference] = quantity;
    });
    return inventory;
} //.
function joinDicts(dict1, dict2) {
    for (const item in dict2) {
        const quantity = dict2[item];
        if (Object.keys(dict1).includes(item)) {
            dict1[item] += quantity;
        }
        else {
            dict1[item] = quantity;
        }
    }
    return dict1;
} //.
function dictFromArrays(arr1, arr2) {
    const d1 = dictFromArray(arr1);
    const d2 = dictFromArray(arr2);
    return joinDicts(d1, d2);
} //.
function arrayFromDict(inventory) {
    const arr = [];
    for (const item in inventory) {
        arr.push([inventory[item], item]);
    }
    return arr;
} //.
function sortInventoryByItem(arr) {
    return arr.sort((a, b) => (a[1] < b[1] ? -1 : 1));
} //.
// ----------------------------------------------
// Original assignment
// ----------------------------------------------
function updateInventory(arr1, arr2) {
    const inventory = joinDicts(dictFromArray(arr1), dictFromArray(arr2));
    return sortInventoryByItem(arrayFromDict(inventory));
} //.
// var curInv = [
//   [21, "Bowling Ball"],
//   [2, "Dirty Sock"],
//   [1, "Hair Pin"],
//   [5, "Microphone"],
// ];
// var newInv = [
//   [2, "Hair Pin"],
//   [3, "Half-Eaten Apple"],
//   [67, "Bowling Ball"],
//   [7, "Toothpaste"],
// ];
// updateInventory(curInv, newInv));
// ----------------------------------------------
// Test suite
// ----------------------------------------------
const inventoryTests = [
    {
        actual: updateInventory([
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"],
        ], [
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [67, "Bowling Ball"],
            [7, "Toothpaste"],
        ]),
        expected: [
            [88, "Bowling Ball"],
            [2, "Dirty Sock"],
            [3, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [5, "Microphone"],
            [7, "Toothpaste"],
        ],
        len: 6,
    },
    {
        actual: updateInventory([
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"],
        ], []),
        expected: [
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"],
        ],
        len: 4,
    },
    {
        actual: updateInventory([], [
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [67, "Bowling Ball"],
            [7, "Toothpaste"],
        ]),
        expected: [
            [67, "Bowling Ball"],
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [7, "Toothpaste"],
        ],
        len: 4,
    },
    {
        actual: updateInventory([
            [0, "Bowling Ball"],
            [0, "Dirty Sock"],
            [0, "Hair Pin"],
            [0, "Microphone"],
        ], [
            [1, "Hair Pin"],
            [1, "Half-Eaten Apple"],
            [1, "Bowling Ball"],
            [1, "Toothpaste"],
        ]),
        expected: [
            [1, "Bowling Ball"],
            [0, "Dirty Sock"],
            [1, "Hair Pin"],
            [1, "Half-Eaten Apple"],
            [0, "Microphone"],
            [1, "Toothpaste"],
        ],
        len: 6,
    },
];
inventoryTests.forEach((testResult) => {
    const { actual, expected, len } = testResult;
    console.log(`comparing obtained: ${actual} with expected: ${expected}`);
    console.assert(JSON.stringify(actual) === JSON.stringify(expected), `KO! obtained: ${actual} Vs expected: ${expected}`);
    console.assert(actual.length === len, `KO! obtained: ${len} Vs expected: ${expected.length}`);
});
//# sourceMappingURL=code.js.map