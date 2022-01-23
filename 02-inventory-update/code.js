"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInventory = void 0;
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
exports.updateInventory = updateInventory;
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
];
console.log(updateInventory(curInv, newInv));
//# sourceMappingURL=code.js.map