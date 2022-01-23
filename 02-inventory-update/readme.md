# Inventory Update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in `arr1`). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

## Tests

The function `updateInventory` should return an array.

```javascript
updateInventory(
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
// should return an array with a length of 6.
// [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  []
);
// should return an array with a length of 4.
// [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

updateInventory(
  [],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);
// should return an array of length 4.
// [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

updateInventory(
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
// should return an array of length 6.
// [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
```

---

## Dev notes

The process I followed was:

- Turn the arrays into objects (easier to update the quantities)
- Merge objects
- Turn the inventory object into one single array of tuples (quantity, reference/item)
- Sort this array based on the name of the reference

I tried to use as many built-in JavaScript methods although I'm sure there are ways to do the same thing in much more optimized and elegant ways.
