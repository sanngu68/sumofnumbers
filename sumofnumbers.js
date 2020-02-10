function sumFor(num) {
  let sum = 0;
  for (const val of num) {
    sum += val;
  }
  return sum;
}

console.log(sumFor([1, 2, 3, 4, 5])); // Should return 15

function sumWhile(num) {
  let sum = 0;
  let i = 0;
  while (i < num.length) {
    sum += num[i];
    i++;
  }
  return sum;
}

console.log(sumWhile([1, 2, 3, 4, 5])); // Should return 15

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  }
  return (num[0] + sumRecursion(num.slice(1, num.length)));
}

console.log(sumRecursion([1, 2, 3, 4, 5])); // Should return 15

function sumTheSimpleWay(num) {
  return (_.reduce(num, function (memo, val) { return memo + val; }, 0));
}

console.log(sumTheSimpleWay([1, 2, 3, 4, 5])); // Should return 15
