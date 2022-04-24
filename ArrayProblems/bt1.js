const input = [1, 2, 3, 1, 2, 1, 1, 2, 2];

function getArrayOfRepeatedElement(arr) {
    let uniqueElementArray = [...new Set(arr)]
    let ArrayOfRepeatedElement = []
    for (let i = 0; i < uniqueElementArray.length; i++) {
        ArrayOfRepeatedElement.push(arr.filter(element => element === uniqueElementArray[i]))
    }
    return ArrayOfRepeatedElement
}
function findMostFrequentElement(arr) {
    let highestFrequency = arr.reduce(function(array1, array2) { 
        return Math.max(array1, array2.length)
    }, [])
    let mostFrequentElement = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length == highestFrequency) {
            mostFrequentElement.push(arr[i][0])
        }
    }
    return mostFrequentElement
}

console.log(findMostFrequentElement(getArrayOfRepeatedElement(input)))