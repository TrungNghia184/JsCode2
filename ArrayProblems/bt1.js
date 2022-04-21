const input = [1, 2, 3, 1, 2, 1, 1, 2, 2];
let filteredArray = [];
let sameElementArray = [];
let longestArray = [];
let result = [];

// Output [1, 2, 3]
function filterOutRepeatedElement(arrayNeedFiltered) {
  let duplicateInputArray = [];
  duplicateInputArray = new Array(...arrayNeedFiltered);

  while (duplicateInputArray.length > 0) {
    for (let i = 0; i < duplicateInputArray.length; i++) {
      let firstElement = duplicateInputArray.shift();
      if (filteredArray.includes(firstElement) === false) {
        filteredArray.push(firstElement);
      }
    }
  }
  return filteredArray;
}

// Output [[1,1,1,1],[2,2,2,2]]
function findLongestArray(array) {
  let longerArray = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longerArray.length) {
      longerArray = array[i];
    }
  }
  longestArray.push(longerArray);
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].length == longestArray[0].length &&
      array[i][0] != longerArray[0]
    ) {
      longestArray.push(array[i]);
    }
  }
  console.log(longestArray);
  return longestArray;
}

function findMostFrequentElement(inputArray) {
  filterOutRepeatedElement(inputArray);
  for (let i = 0; i < filteredArray.length; i++) {
    sameElementArray.push(
      inputArray.filter((element) => {
        if (element === filteredArray[i]) {
          return element;
        }
      })
    );
  }
  console.log(sameElementArray)
  findLongestArray(sameElementArray);
  for (let i = 0; i < longestArray.length; i++) {
    result.push(longestArray[i][0]);
  }
}

findMostFrequentElement(input);
console.log(result);
