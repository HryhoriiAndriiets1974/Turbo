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
const numbers = [1, -2, 3]; // every > 0

if (numbers[0] > 0 && numbers[1] > 0 && numbers[2] > 0) {
  console.log(true);
} else {
  console.log(false);
}
