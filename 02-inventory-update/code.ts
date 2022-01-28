// ----------------------------------------------
// Misc functions
// ----------------------------------------------
type Inventory = { [reference: string]: number };
type InventoryEntry = [number, string];

function dictFromArray(arr: any[]): Inventory {
  let inventory: Inventory = {};
  arr.forEach((entry) => {
    const [quantity, reference] = entry;
    inventory[reference] = quantity;
  });
  return inventory;
} //.

function joinDicts(dict1: Inventory, dict2: Inventory): Inventory {
  for (const item in dict2) {
    const quantity = dict2[item];

    if (Object.keys(dict1).includes(item)) {
      dict1[item] += quantity;
    } else {
      dict1[item] = quantity;
    }
  }
  return dict1;
} //.

function arrayFromDict(inventory: Inventory): InventoryEntry[] {
  const arr: [number, string][] = [];
  for (const item in inventory) {
    arr.push([inventory[item], item]);
  }
  return arr;
} //.

function sortInventoryByItem(arr: any[]): any[] {
  return arr.sort((a, b) => (a[1] < b[1] ? -1 : 1));
} //.

// ----------------------------------------------
// Original assignment
// ----------------------------------------------
function updateInventory(arr1: any, arr2: any) {
  const inventory = joinDicts(dictFromArray(arr1), dictFromArray(arr2));
  return sortInventoryByItem(arrayFromDict(inventory));
} //.

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

export { updateInventory };
