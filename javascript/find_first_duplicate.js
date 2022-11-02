function findFirstDuplicate(arr) {
  // type your code here

  // create empty array to add numbers to

  let comparisonArr = []

  // write for loop to see if number is already in array

  for (let i = 0; i < arr.length; i ++){
    if (comparisonArr.includes(arr[i])){
      // if it is, return that number
      return arr[i]
    }
    // if it's not, add it to the array
    else comparisonArr.push(arr[i])
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("Expecting: 5");
  console.log("=>", findFirstDuplicate([2,3,4,5,5]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([6,8,2,7,1]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*

THE PROBLEM

- Write a function that receives an array of integers as input

- Gives out an integer as output

- It should go through the array and check if there are any recurring numbers

- If there are, it should return the first integer that recurs

- If there are not, it should return -1


PSEUDOCODE

- create empty comparison array

- write for loop to iterate through inputted array

- use find method to check if each is in comparision array

- If it is, return the number

- If it isn't, add that number to the comparison array

- If no match is found, return negative 1

*/
