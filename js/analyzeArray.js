function analyzeArray(arr) {
  analysis = {
    average: undefined,
    min: Number.MAX_VALUE,
    max: Number.MIN_VALUE,
    length: 0,
  };
  ave = 0;
  for (let val of arr) {
    ave += val;
    analysis.min = analysis.min > val ? val : analysis.min;
    analysis.max = analysis.max < val ? val : analysis.max;
    analysis.length++;
  }
  if (analysis.length > 0) {
    analysis.average = ave / analysis.length;
  }

  return analysis;
}
module.exports = analyzeArray;
