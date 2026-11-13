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





function firstUnique(str: string): string | undefined {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  
  return undefined;
}

console.log(firstUnique("aabbcdde"));
// c




function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(25));
// 77


function arrayProduct(numbers: number[]): number {
  let product = 1;

  for (let num of numbers) {
    product *= num;
  }

  return product;
}

console.log(arrayProduct([2, 3, 4]));
// 24





function isSorted(numbers: number[]): boolean {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));
// true




function difference(a: number, b: number): number {
  return Math.abs(a - b);
}

console.log(difference(20, 10));
// 10




function repeatString(str: string, times: number): string {
  return str.repeat(times);
}

console.log(repeatString("Hi ", 3));
// Hi Hi Hi