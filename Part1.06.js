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