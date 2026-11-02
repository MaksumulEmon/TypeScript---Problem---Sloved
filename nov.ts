function findFirstEven(numbers: number[]): number | undefined {
  return numbers.find((num) => num % 2 === 0);
}

console.log(findFirstEven([1, 3, 6, 8, 10]));
// 6