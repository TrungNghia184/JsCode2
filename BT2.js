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
function checkAnimalWeightOver50(animal) {
  if (animal.weight > 50) {
    return animal
  }
}
function getAnimalsWeightOver50(animals) {
  const animalsWeightOver50 = animals.filter(checkAnimalWeightOver50)
  return animalsWeightOver50
}

console.log(getAnimalsWeightOver50(animals))