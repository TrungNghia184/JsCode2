const rabbitStartTime = 19;
const timeStart = Date.now();
let codeExecuteTime = 0;
function goEatGrass(eatGrassTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`The bunny ate grass at ${eatGrassTime}h`);
      console.log(`He finished at ${eatGrassTime + 1}h`);
      resolve(eatGrassTime + 1);
    }, 1000);
  });
}

function goForStroll(strollTime) {
  setTimeout(() => {
    console.log(`Mr. Rabbit finished his stroll at ${strollTime + 1}h`);
    console.log(`The total amount of time that he hung out is ${strollTime + 1 - rabbitStartTime} hours`);
    codeExecuteTime = Date.now() - timeStart;
    console.log(`This code takes ${codeExecuteTime / 1000}s to run`);
  }, 1000);
}

function goWatchMovie(movieTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Little bunny watched movie till ${movieTime + 2}h`);
      resolve(movieTime + 2);
    }, 2000);
  });
}

goEatGrass(rabbitStartTime)
  .then((movieTime) => {
    return goWatchMovie(movieTime);
  })
  .then((strollTime) => {
    goForStroll(strollTime);
  });
