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
function getAnimalsNameHasLetterT(animalArray) {
    const animalsNameHasLetterT = animalArray.filter((animal) => {
        if (animal.name.includes('t')) {
            return animal
        }
    })
    return animalsNameHasLetterT
}
console.log(getAnimalsNameHasLetterT(animals))