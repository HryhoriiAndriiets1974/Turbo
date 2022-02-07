// function calculateTotal(number) {
//   // Change code below this line
//    let suma = 0;
//    for (let i = 1; i <= number; i += 1) { // Change this line
//    suma = suma + i;
//    console.log(i + " " + suma);
//  }
//  return suma;

//    // Change code above this line
//  }
//  calculateTotal(100);
//  dz-2-20 =============================================
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (i = 0; i < order.length; i += 1) {
//     total = total + order[i];
//   }
//   console.log(total);
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// dz-2-21 ===========================================
// function findLongestWord(string) {
//   // Change code below this line
//   let array;
//   let maxLongest = 0;
//   let maxj = 0;
//   let j = 0;
//   array = string.split(" ");
//     for (let i = 0; i < array.length; i += 1) {
//     j = array[i].length;
//     console.log(i + " " + array[i] + " " +j);
//     if (maxj < j) {
//       maxj = j;
//       maxLongest = i;
//     }
//   }
//   console.log(array[maxLongest]);
//   return array[maxLongest];

//   // Change code above this line
// }
// findLongestWord("Google do a roll");
// dz-2-22 ===============================================
// function createArrayOfNumbers(min, max) {
//   const numbers = [min];
//   // Change code below this line
//   let j = 0;
//   for (let i = min; i <= max - 1; i += 1) {
//     numbers.push(i + 1);
//     j = j + 1;
//   }
//   console.log(numbers);
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// dz-2-23 =================================================
// function filterArray(numbers, value) {
//   // Change code below this line
//  let array = [];
//  let j = 0;
//  let k = numbers.length;
//  console.log(k);
//  for (let i = 0; i <= numbers.length; i += 1) {

//    if (numbers[i] > value) {
//      j = numbers[i];
//      array.push(j);
//      console.log(j + "  " + numbers[i] + "  " + value);
//    }
//  }
// console.log(array);
// return array;
//  // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// dz-2-24 ===========================================
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// dz-2-25 =============================================
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const array = [];
//   let i = 0;
//   let j = 0;
//   for (i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       array.push(array1[i]);
//     }
//   }

// return array;
//  // Change code above this line
// }
// dz-2-26 =============================================
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const i of order) {
//     total += i;
//   }

//   // Change code above this line
//   return total;
// }
// dz-2-27 ==============================================
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const i of numbers) {

//     if (i > value) {
//       filteredNumbers.push(i);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// dz-2-28 ===============================================
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// dz-2-29 ===============================================
// function getEvenNumbers(start, end) {
//   // Change code below this line
//    const filteredNumbers = [];

//  for (let i = start; i <= end; i += 1) {

//    if (i % 2 === 0) {
//      filteredNumbers.push(i);
//    }
//  }
//  console.log(filteredNumbers);
//  return filteredNumbers;


//    // Change code above this line
//  }
//  getEvenNumbers(6, 12);
//  dz-2-30 ==============================================
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// dz-2-31 ===============================================
// function findNumber(start, end, divisor) {
//   // Change code below this line


//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   return null;
//   // Change code above this line
// }
// console.log(findNumber(16, 35, 7));
// dz-2-32 =================================================
// function includes(array, value) {
//   // Change code below this line
//   for (const i of array) {
//     if (i === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
