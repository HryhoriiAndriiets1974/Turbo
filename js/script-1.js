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
