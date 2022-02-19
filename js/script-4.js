"use strict";
//===========================---- 1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
//===============================================---- 2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
//===============================================---- 3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`)
// });
//===============================================---- 4
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for (const key of this.pizzas) {
//       if (pizzaName === key) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return  onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
//===============================================---- 5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   // Change code above this line
//   return totalPrice;
// }
//===============================================---- 5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   // Change code above this line
//   return totalPrice;
// }
//===============================================---- 6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//     numbers.forEach((item) => {
//       if (item > value) {
//         filteredNumbers.push(item);
//       }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
//===============================================---- 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//    firstArray.forEach((item) => {
//       if (secondArray.includes(item)) {
//         commonElements.push(item);
//       }
//   });

//   return commonElements;
//   // Change code above this line
// }
//===============================================---- 8
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     // Change code above this line
//     return quantity * pricePerItem;
//   }
//===============================================---- 9
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;

// Change code above this line
//===============================================---- 10
// Change code below this line
// const calculateTotalPrice = orderedItems => {
//     let totalPrice = 0;
  
//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }
  // Change code above this line
//===============================================---- 11
//===============================================---- 12
//===============================================---- 13
//===============================================---- 14
//===============================================---- 15
//===============================================---- 16
//===============================================---- 17
//===============================================---- 18
//===============================================---- 19
//===============================================---- 20
//===============================================---- 21
//===============================================---- 22
//===============================================---- 23
//===============================================---- 24
