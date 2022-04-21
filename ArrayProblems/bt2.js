const input = [1,2,3,1,2, 7, 7, 1,1, 4,5];
let filteredArray = [];
let sameElementArray = [];
let result = [];

// Output là 1 array với các phần tử không trùng nhau Ex: [1,7,8,4]
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

function findLongestArrayLength(array) {
  let longestArray = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longestArray.length) {
      longedtArray = array[i];
    }
  }
  return longestArray.length;
}

function findShortestArrayLength(array) {
  let shortestArray = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length < shortestArray.length) {
      shortestArray = array[i];
    }
  }
  return shortestArray.length;
}

// Output là 1 array với các array có phần tử trùng nhau Ex: [[1,1,1,1], [2,2,2], [3]]
function makeArrayWithMatchElement(filteredArray1, inputArray1) {
  for (let i = 0; i < inputArray1.length; i++) {
    sameElementArray.push(
      inputArray1.filter((element) => {
        if (element === filteredArray1[i]) {
          return element;
        }
      })
    );
  }
  sameElementArray = sameElementArray.filter((element) => {
      if (element.length != 0) {
          return element
      }
  })
  return sameElementArray
}

function findElementExcludedMostAndLeastFrequent(inputArray) {
  filterOutRepeatedElement(inputArray);
  makeArrayWithMatchElement(filteredArray, inputArray);
  console.log(sameElementArray)
  let longestArrayLength = findLongestArrayLength(sameElementArray);
  let shortestArrayLength = findShortestArrayLength(sameElementArray);
  for (let i = 0; i < sameElementArray.length; i++) {
      if(sameElementArray[i].length != shortestArrayLength && sameElementArray[i].length != longestArrayLength) {
          result.push(sameElementArray[i][0])
      }
  }
}
findElementExcludedMostAndLeastFrequent(input)
console.log(result)