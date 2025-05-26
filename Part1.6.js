// Array sorting Binary

// Array to be searched
const sortedArray = [3,5,8,11,14,16,19,20,23,25,30,31,45];
console.log(sortedArray);

// Set the value we are searching for
const result = 50;
console.log(`result: ${result}`);

// Creating the binary search function
function binarySearch(searchArray, target){
// If value not found result will be -1
  let found = -1;

  let start = 0;
  let end = searchArray.length - 1;
  console.log(`Start :${start}, End :${end}` );

  // Loop through while the start is not equal to the end
  while (start <= end ){
    let mid = Math.floor((start+ end) / 2)
    console.log(`Mid: ${mid}`);
    // Finding mid value
    if(searchArray[mid] == target){
    console.log(`SearchArray[${mid}]: ${searchArray[mid]}`)
    found = mid;

    break;
  }else if(searchArray[mid] < target){
    // look at right side
    console.log(`SearchArray[${mid}]: ${searchArray[mid]}`)
    start = mid +1;
    console.log(`Start: ${start}, End: ${end}`);
  }else{
    // Look at left side
    console.log(`SearchArray[${mid}]): ${searchArray[mid]}`)
    end = mid -1;
    console.log(`Start: ${start}, End: ${end}`);
  }
  }
    return found;
  
}

// Calling the function
const Value = binarySearch(sortedArray, result);
// Output the result
if(Value == -1){
  console.log(`The key of ${result} was not found`);
}else{
  console.log(`The key of ${result} was found at index ${Value}`);
}