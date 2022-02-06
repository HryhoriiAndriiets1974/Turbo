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
//  dz-2-20
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
// dz-2-21
function findLongestWord(string) {
  // Change code below this line
  let array;
  let maxLongest = 0;
  let maxj = 0;
  let j = 0;
  array = string.split(" ");
    for (let i = 0; i < array.length; i += 1) {
    j = array[i].length;
    console.log(i + " " + array[i] + " " +j);
    if (maxj < j) {
      maxj = j;
      maxLongest = i;
    }
  }
  console.log(array[maxLongest]);
  return array[maxLongest];

  // Change code above this line
}
findLongestWord("Google do a roll");
