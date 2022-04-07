// ============== this
// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors() { return this.authors;},
//   addAuthor(authorName) { this.authors.push(authorName);},
// };

// console.log(bookShelf.getAuthors());
// bookShelf.addAuthor("Ли Танит");
// console.log(bookShelf.getAuthors());
// ================
// function foo() {
//   console.log(this);
// }

// foo();
// ===============
// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis();
// petya.showName();
// =============== геттери і сеттери
// =============== статичні властивості і методи
// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//     User.#takenEmails.push(email);
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }


// }

// const mango = new User({
//   email: "mango1@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role);
// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// ====== Наслідування класів
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"
