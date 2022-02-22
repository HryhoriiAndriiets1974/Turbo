
// 6. Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.


/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],
  id: 0,

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return { amount, type, id: (this.id += 1) };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return "Недостаточно средств";
    } else {
      this.balance -= amount;
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) return transaction;
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const transactionTyped = [];
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        transactionTyped.push(transaction);
      }
    }

    return transactionTyped;
  }
};

account.deposit(1500);
account.deposit(500);
account.deposit(2500);
console.log(account.getBalance());
console.log(account.transactions);
account.withdraw(500);
account.withdraw(100);
account.withdraw(1500);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(2));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
