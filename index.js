const fruitArr = ["apples", "pears"];

const printFruit = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "apples") {
      console.log(`I don't like apples`);
    } else if (arr[i] === "pears") {
      console.log(`I don't like pears`);
    }
  }
};

printFruit(fruitArr);
