const inputs = [1, 2, 3, 4];
function doubleEvenInput(input) {
    const arrayWithEvenInputsDoubled = inputs.map((input) => {
    if ((input % 2) === 0){
        return input * 2;
    }
        return input;
    })
    return arrayWithEvenInputsDoubled;
}
console.log(doubleEvenInput(inputs));
console.log(doubleEvenInput)