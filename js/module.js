// ====== map ======
// Покращення оцінок на 100
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// console.log(students.map((obj) => obj.name));
// console.log(
//   students.map((obj) => ({
//     ...obj,
//     score: obj.score + 100,
//   })),
// );
// ===== filter as remove ======
// Видалення елемнта масиву за доп filter
// const arr = ['физика', 'информатика', 'математика', 'биология'];
// const newArr1 = arr.filter((item) => item !== 'биология');
// const newArr2 = newArr1.filter((item) => item !== 'физика');

// console.log(arr);
// console.log(newArr1);
// console.log(newArr2);
// ====== every ====
// every під капотом
// const numbers = [1, -2, 3]; // every > 0

// if (numbers[0] > 0 && numbers[1] > 0 && numbers[2] > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// ====== some ====
// some під капотом
// const numbers = [1, -2, 3]; // every > 0

// if (numbers[0] > 0 || numbers[1] > 0 || numbers[2] > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// ============= reduce =========
// Масив тегів масиву обєктів всіх.
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);
console.log(getTags(tweets));

// обробка масиву всіх тегів, - обєкт що містить
// кількість повторів кожного тега
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);

// ========================
// ======= examples =======
// ========================
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
console.table(cars);
// ====================================
// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.
// const getModels = (cars) => cars.map(({ model }) => model);

// console.table(getModels(cars));
// ====================================
// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.
// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({
//     ...car,
//     price: car.price - car.price * discount,
//   }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// console.table(makeCarsWithDiscount(cars, 0.9));
// console.table(makeCarsWithDiscount(cars, 1));
