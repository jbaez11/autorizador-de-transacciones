const createAccount = require('../usecases/createAccount');
const authorizeTransaction = require('../usecases/authorizeTransaction');

module.exports = {
  handleInput: (input) => {
    if (input.cuenta) {
        const { id, tarjeta_activa, limite_disponible } = input.cuenta;
        const account = createAccount.createAccount(id, tarjeta_activa, limite_disponible);
        console.log(JSON.stringify(account));
      
    } else if (input.transaccion) {
        const { id, comerciante, cantidad, tiempo } = input.transaccion;
        const account = authorizeTransaction.authorizeTransaction(id, comerciante, cantidad, tiempo);
        console.log(JSON.stringify(account));
    }
  },
};
