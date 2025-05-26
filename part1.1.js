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


// Adding numbers in 19, 23, 30
console.log("Now we will add numbers 19, 23, 30 into the array.");
/*At first when i tried to add the numbers onto the beginning of the array using .splice it kept overwriting the 3. I could'nt work out what the error was and thought i may have missed something.
upon doing some googling trying to find a solution i came to the conclusion of just adding it onto the end, which worked. */

// Afterwards i was watching the last class and realised we covered the .push line.
// Adding the numbers 19, 23, 30
myArray.push("19", "23", "30");
/* When i tried to add the 3 numbers into position 12,13,14 it kept on adding the 3rd number into the array, which is 14 in this case. I am not sure why but when i delete the 14 it seems to work as intended. */

// /Sorting the new array
myArray.sort(function (a, b) {
  return a - b;
});
console.log("3 new numbers: " + myArray);


// Removing 2 numbers from the array, 8 and 31.
console.log('Now we will remove 2 numbers, "8" and "31"');
//This command will remove it from the location of 2 and 10 of the sorted array.
myArray.splice(2, 1);
myArray.splice(10, 1);
console.log("2 Removed Numbers: " + myArray);
