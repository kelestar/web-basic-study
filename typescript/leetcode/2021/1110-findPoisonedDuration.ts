function findPoisonedDuration(timeSeries: number[], duration: number): number {
  if (timeSeries.length == 0) return 0
  else if (timeSeries.length == 1) return duration
  let sumPoisonTime: number = 0;
  for (let i: number = 0; i < timeSeries.length - 1; i++) {
    let poisonTime = timeSeries[i];
    let poisonAgainTime = timeSeries[i + 1];
    if (poisonTime == poisonAgainTime) continue
    if ((poisonTime + duration) < poisonAgainTime) {
      sumPoisonTime += duration
    } else {
      sumPoisonTime += poisonAgainTime - poisonTime
    }
  }

  return sumPoisonTime + duration
};

console.log(findPoisonedDuration([1, 2], 2));


