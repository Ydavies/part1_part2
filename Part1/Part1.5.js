// linearSearch.js
const myArray= [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(myArray);

// Creating the search function

  // we need to find the value
  let Result = 2;
  console.log(`Result: ${Result}`);

  // Creating the search function
  function sequentialSearch(arraySearch, target){
  // Not found value
  let found = -1;
  // if found >= 0 then target is found  
  for(let i = 0; i < arraySearch.length; i++){
    //compare the index to our target.
    if(arraySearch[i] == target){
      found = i;
      // End the loop
      break;
    }
  }
return found;
}

// Calling the function
const result = sequentialSearch(myArray, Result);
// output the result
if(result == -1){
  console.log(`The key of ${Result} was not found`);
}else{
  console.log(`The key of ${Result} was found at index ${result}`);
}
