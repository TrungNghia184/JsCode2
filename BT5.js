const arr = [1, 2, 3, 4];
function sumWithDoubleEvenNumber(sum, number) {
    if(number % 2 === 0) {
        return sum + number * 2;
    }
    return sum + number;
}
function getTotal(array) {
    const total = array.reduce(sumWithDoubleEvenNumber)
    return total;
}
console.log(getTotal(arr))