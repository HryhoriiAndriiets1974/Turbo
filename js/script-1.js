function calculateTotal(number) {
  // Change code below this line
   let suma = 0;
   for (let i = 1; i <= number; i += 1) { // Change this line
   suma = suma + i;
   console.log(i + " " + suma);
 }
 return suma;

   // Change code above this line
 }
 calculateTotal(100);
