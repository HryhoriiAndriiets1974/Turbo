"use strict";
// ====================================================--- 1
// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши
//  відсутні this в місцях звернення до властивостей і методів
//  об'єкта.
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
// pizzaPalace.order("Smoked");
// console.log(pizzaPalace.order("Smoked"));
// ====================================================--- 2
// Перед звільненням розробник зламав вихідний код управління
//  акаунтами користувачів нашого сервісу доставки їжі. Виконай
//  рефакторинг методів об'єкта customer, розставивши відсутні
//  this під час звернення до властивостей об'єкта.
// Після оголошення об'єкта ми додали виклики методів у тій
// послідовності, в якій твій код перевірятимуть тести.
// Будь ласка, нічого там не змінюй.
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
// ====================================================--- 3
// ====================================================--- 4
// ====================================================--- 5
// ====================================================--- 6
// ====================================================--- 7
// ====================================================--- 8
// ====================================================--- 9
// ====================================================--- 10
// ====================================================--- 11
// ====================================================--- 12
// ====================================================--- 13
// ====================================================--- 14
// ====================================================--- 15
// ====================================================--- 16
// ====================================================--- 17
// ====================================================--- 18
// ====================================================--- 19
// ====================================================--- 20
