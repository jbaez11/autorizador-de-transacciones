const db = require('../data/memoryDB');

module.exports = {
  authorizeTransaction: (accountId, comerciante, cantidad, tiempo) => {
    const account = db.getAccount(accountId);

    if (!account) {
      return { violaciones: ['cuenta-no-inicializada'] };
    }
    account.violaciones = [];

    if (!account.tarjeta_activa) {
      return { ...account, violaciones: ['tarjeta-no-activa'] };
    }

    if (cantidad > account.limite_disponible) {
      account.violaciones.push('límite-insuficiente');
    }else{
     account.limite_disponible -= cantidad;
    }

    const recentTransactions = account.transactions.filter((transaction) => {
      const transactionTime = new Date(transaction.tiempo);
      const currentTime = new Date(tiempo);
      const timeDifference = (currentTime - transactionTime) / 1000;
      return timeDifference <= 120;
    });

    if (recentTransactions.length >= 3) {
      account.violaciones.push('alta-frecuencia-pequeño-intervalo');
    }

    const duplicateTransaction = recentTransactions.find((transaction) => {
      return transaction.comerciante === comerciante && transaction.cantidad === cantidad;
    });

    if (duplicateTransaction) {
      account.violaciones.push('transacción-duplicada');
      account.limite_disponible += cantidad;
    }

    account.transactions.push({ comerciante, cantidad, tiempo });

    return account;
  },
};
