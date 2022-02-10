// =======================================-- 1
// const apartment = {
//   imgUrl:  "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);
// =======================================-- 2
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.log(apartment);
// console.log(apartment.owner);
// =======================================-- 3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(apartment);
// console.log(aptDescr );
// =======================================-- 4
// =======================================-- 5
// =======================================-- 6
// =======================================-- 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// //   location: {
// //     country: "Jamaica",
// //     city: "Kingston",
// //     },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// // const location = Object.create(apartment);
// // location.country = "Jamaica";
// // location.city = "Kingston";
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// // Change code below this line
// console.log(apartment.location.city);
// =======================================-- 8
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// console.log(product);
// =======================================-- 9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };
// console.log(credentials);
// =======================================-- 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // const keys = Object.keys(apartment);
// // const values = Object.values(apartment);
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// // Change code below this line
// console.log(keys);
// console.log(values);
// =======================================-- 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//   }

//   // Change code above this line
// }
// =======================================-- 12
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount = propCount + 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }
// =======================================-- 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// =======================================-- 14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   propCount = Object.keys(object).length;
//   return propCount;
//   // Change code above this line
// }
// console.log(propCount);
// =======================================-- 15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);
// =======================================-- 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const array = Object.values(salaries);
//   for (salary of array) {
//     totalSalary += salary;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// =======================================-- 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
// =======================================-- 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product["name"] === productName) {
//       return product["price"];
//     }
//   }
//   return null;
//    // Change code above this line
// }
// =======================================-- 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const array = [];
//   for (const key of products) {
//     if (key[propName]) {
//       array.push(key[propName]);
//     }
//   }
// return array;

//   // Change code above this line
// }
// =======================================-- 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (const key of products) {
//     if (key["name"] === productName) {
//       totalPrice = key["price"] * key["quantity"];
//     }
//   }
//   return totalPrice;
//   // Change code above this line
// }
// console.log(calculateTotalPrice("Grip"));
// =======================================-- 21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// =======================================-- 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// =======================================-- 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today:  highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//   } = highTemperatures;
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
