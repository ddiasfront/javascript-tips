function sumOfPairs(arr, target) {
    let numIndex = {};
    let difference;

    for(let i = 0; i < arr.length ; i++) {
     difference = target - arr[i];
      if(numIndex[difference] !== undefined) {
        return [numIndex[difference], i];
      } else {
        umIndex[arr[i]] = i; 
      }
    }
}

console.log(sumOfPairs([1, 2, 3, 4], 6));
