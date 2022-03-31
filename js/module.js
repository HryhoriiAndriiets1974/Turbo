// ====== map ======
const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

console.log(students.map((obj) => obj.name));
console.log(
  students.map((obj) => ({
    ...obj,
    score: obj.score + 100,
  })),
);
