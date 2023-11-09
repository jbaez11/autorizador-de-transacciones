const accounts = {};

module.exports = {
  saveAccount: (account) => {
    accounts[account.id] = account;
  },
  getAccount: (id) => {
    return accounts[id];
  },
  getAll:() => {
    return accounts;
  }
};
