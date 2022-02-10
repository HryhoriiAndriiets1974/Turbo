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
// =======================================-- 17
// =======================================-- 18
// =======================================-- 19
// =======================================-- 20
// =======================================-- 21
// =======================================-- 22
// =======================================-- 23
