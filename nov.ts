function findFirstEven(numbers: number[]): number | undefined {
  return numbers.find((num) => num % 2 === 0);
}

console.log(findFirstEven([1, 3, 6, 8, 10]));
// 6



function getLastElement(numbers: number[]): number | undefined {
  return numbers[numbers.length - 1];
}

console.log(getLastElement([10, 20, 30, 40]));
// 40