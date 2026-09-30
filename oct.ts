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
