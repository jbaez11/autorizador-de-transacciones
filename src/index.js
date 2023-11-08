require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../src/shared/swagger/swaggerDefinition.json');

app.use(bodyParser.json());

const createAccount = require('../src/usecases/createAccount');
const authorizeTransaction = require('../src/usecases/authorizeTransaction');

app.post('/createAccount', (req, res) => {
  const { id, tarjeta_activa, limite_disponible } = req.body.cuenta;
  const account = createAccount.createAccount(id, tarjeta_activa, limite_disponible);
  res.json(account);
});

app.post('/authorizeTransaction', (req, res) => {
  const { id, comerciante, cantidad, tiempo } = req.body.transaccion;
  const account = authorizeTransaction.authorizeTransaction(id, comerciante, cantidad, tiempo);
  res.json(account);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
