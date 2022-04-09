function birthdayCakeCandles(candles) {
  // Write your code here
  let sortedCandles = candles.sort()
  let maxNum = Math.max.apply(0, sortedCandles)

  let count = 0;

  sortedCandles.forEach(element => {
    if (element === maxNum) {
      count += 1;
    }
  });
  return count;
}

birthdayCakeCandles([3,2,1,3,1,3,1,3])





