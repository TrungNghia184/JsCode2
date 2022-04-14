const arr = [1, 2, 3, 4];
function evenDivTwoOddMultiplyTwo(sum, number) {
    if(number % 2 === 0) {
        return sum + number / 2;
    }
    return sum + number * 2;
}
function getTotal(array) {
    const total = array.reduce(evenDivTwoOddMultiplyTwo, 0)
    return total;
}
console.log(getTotal(arr))