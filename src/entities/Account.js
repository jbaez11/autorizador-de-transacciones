class Account {
    constructor(id, tarjeta_activa, limite_disponible) {
      this.id = id;
      this.tarjeta_activa = tarjeta_activa;
      this.limite_disponible = limite_disponible;
      this.transactions = [];
    }
  }
  
  module.exports = Account;