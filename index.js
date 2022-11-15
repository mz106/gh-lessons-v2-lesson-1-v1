const fruitObjArr = [
  { fruit: "apple", isGood: true },
  { fruit: "pear", isGood: true },
  { fruit: "banana", isGood: false },
  { fruit: "plum", isGood: false },
];

const checkFruits = (fn, arr) => {
  const tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isGood === true) {
      tempArr.push(`I like to eat ${arr[i].fruit}s`);
    } else {
      tempArr.push(`I don't like to eat ${arr[i].fruit}s`);
    }
  }
  fn(tempArr);
};

const printFruits = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

checkFruits(printFruits, fruitObjArr);
