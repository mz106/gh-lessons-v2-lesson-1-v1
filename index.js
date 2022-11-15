const fruitObjArr = [
  { fruit: "apple", isGood: true },
  { fruit: "pear", isGood: true },
  { fruit: "banana", isGood: false },
  { fruit: "plum", isGood: false },
];

const printFruits = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isGood === true) {
      console.log(`I like to eat ${arr[i].fruit}s`);
    } else {
      console.log(`I don't like to eat ${arr[i].fruit}s`);
    }
  }
};

printFruits(fruitObjArr);
