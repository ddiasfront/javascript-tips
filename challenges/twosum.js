
// const array = [2, 7, 11, 15];
const array = [3, 2, 4];
// const array = [3, 3];
// const array = [2, 7, 11, 15];
// const number = 6;
const number = 6;

let hashTable = [];
let i = 0;
let found;
let hashId;

const twoSum = (numbers, number) => {
  while (i < numbers.length) {
    if (found) break;
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        const sum = numbers[i] + numbers[j];
        if (sum === number) {
          hashId = numbers[i];
          found = [i, j];
          break;
        }
      }
    }
    hashTable[hashId] = found;
    i++;
  }
  return found;
};
