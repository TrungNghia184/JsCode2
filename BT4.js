const animals = [
    {
      name: "cat",
      size: "small",
      weight: 5
    },
    {
      name: "dog",
      size: "medium",
      weight: 10
    },
    {
      name: "elephant",
      size: "big",
      weight: 5000
    }
  ]
function filterAnimalsNameHasLetterT(animal) {
  if (animal.name.includes('t')) {
    return animal
}
    }
function stringtifyAndAddToNewArray(animal) {
    return `name: ${animal.name} - size: ${animal.size} - weight: ${animal.weight}kg`
}
function getCatAndElephantAttributeToArray(animalsArray) {
    const catAndElephant = animalsArray.filter(filterAnimalsNameHasLetterT);
    const catAndElephantAttributeToString = catAndElephant.map(stringtifyAndAddToNewArray)
    return catAndElephantAttributeToString;
}
console.log(getCatAndElephantAttributeToArray(animals))