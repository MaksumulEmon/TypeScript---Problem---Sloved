function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
// "olleh"



function checkEvenOdd(num: number): string {
  if (num % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

console.log(checkEvenOdd(10));




function findLargest(numbers: number[]): number {
  return Math.max(...numbers);
}

console.log(findLargest([10, 5, 20, 8]));
// 20



function arraySum(numbers: number[]): number {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum;
}

console.log(arraySum([1, 2, 3, 4]));
// 10



function countVowels(str: string): number {
  let count = 0;

  for (let char of str.toLowerCase()) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello"));
// 2




function isPalindrome(str: string): boolean {
  let reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("madam"));
// true





function findSmallest(numbers: number[]): number {
  return Math.min(...numbers);
}

console.log(findSmallest([10, 5, 20, 8]));
// 5





function removeDuplicates(numbers: number[]): number[] {
  return [...new Set(numbers)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
// [1, 2, 3, 4]



function factorial(num: number): number {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));
// 120



function getEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
// [2, 4, 6]



function findAverage(numbers: number[]): number {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum / numbers.length;
}

console.log(findAverage([10, 20, 30]));
// 20



function countPositive(numbers: number[]): number {
  let count = 0;

  for (let num of numbers) {
    if (num > 0) {
      count++;
    }
  }

  return count;
}

console.log(countPositive([-2, 5, 7, -1, 3]));
// 3



function findMax(numbers: number[]): number {
  let max = numbers[0];

  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(findMax([10, 25, 5, 40, 15]));
// 40





function findMin(numbers: number[]): number {
  let min = numbers[0];

  for (let num of numbers) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}

console.log(findMin([10, 25, 5, 40, 15]));
// 5



function isPrime(num: number): boolean {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
// true



function countDigits(num: number): number {
  return Math.abs(num).toString().length;
}

console.log(countDigits(12345));
// 5


function reverseArray(numbers: number[]): number[] {
  return numbers.reverse();
}

console.log(reverseArray([1, 2, 3, 4]));
// [4, 3, 2, 1]






function findDuplicates(numbers: number[]): number[] {
  const duplicates: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
        duplicates.push(numbers[i]);
      }
    }
  }

  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 3]));
// [2, 3]






function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("hello"));
// "Hello"



function fizzBuzz(num: number): void {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);







function checkNumber(num: number): string {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(-5));
// Negative

function power(base: number, exponent: number): number {
  let result = 1;

  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }

  return result;
}

console.log(power(2, 3));
// 8




function secondLargest(numbers: number[]): number | undefined {
  const uniqueNumbers = [...new Set(numbers)];
  uniqueNumbers.sort((a, b) => b - a);

  return uniqueNumbers[1];
}

console.log(secondLargest([10, 20, 30, 40]));
// 30




function toUpperCase(str: string): string {
  return str.toUpperCase();
}

console.log(toUpperCase("hello world"));
// HELLO WORLD



function countWords(str: string): number {
  const words = str.trim().split(/\s+/);

  return str.trim() === "" ? 0 : words.length;
}

console.log(countWords("I love Zareen"));
// 3




function sumEven(numbers: number[]): number {
  let sum = 0;

  for (let num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(sumEven([1, 2, 3, 4, 5, 6]));
// 12





function areEqual(str1: string, str2: string): boolean {
  return str1 === str2;
}

console.log(areEqual("hello", "hello"));
// true




function removeNegative(numbers: number[]): number[] {
  return numbers.filter((num) => num >= 0);
}

console.log(removeNegative([-2, 5, -1, 8, 0]));
// [5, 8, 0]



function stringLength(str: string): number {
  let count = 0;

  for (const char of str) {
    count++;
  }

  return count;
}

console.log(stringLength("hello"));
// 5



function findMissing(numbers: number[]): number {
  const total = (numbers.length + 1) * (numbers.length + 2) / 2;
  let sum = 0;

  for (const num of numbers) {
    sum += num;
  }

  return total - sum;
}

console.log(findMissing([1, 2, 4, 5]));
// 3



