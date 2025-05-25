// Arrays -  Creating, Sorting, etc

// the Array - 11, 5, 8, 3, 25, 16, 31, 45, 14, 20
console.log("Here is an array of numbers");
let myArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log("Unsorted: " + myArray);

// Sorting the Array
console.log("Now we will sort the array.");
myArray.sort(function (a, b) {
  return a - b;
});
console.log("Sorted: " + myArray);