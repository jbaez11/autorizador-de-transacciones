const Account = require('../entities/Account');
const db = require('../data/memoryDB');

module.exports = {
  createAccount: (id, tarjeta_activa, limite_disponible) => {
    if (db.getAccount(id)) {
        const getAccount = db.getAccount(id)
        getAccount.violaciones = [];
        getAccount.violaciones.push('cuenta-ya-inicializada')
        return getAccount;
    }
    const account = new Account(id, tarjeta_activa, limite_disponible);
    db.saveAccount(account);
    return account;
  },
  getAccount : ()=> {
    return db.getAll()
  }
};
