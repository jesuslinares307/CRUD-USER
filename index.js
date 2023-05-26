// index.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/connection');
const userRouter = require('./routes/users-routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT //3000;

app.use(bodyParser.json());
app.use("/user", userRouter);

// Conexión a la base de datos y inicio del servidor
sequelize
  .sync()
  .then(() => {
    console.log('Conexión a la base de datos establecida.');
    app.listen(PORT, () => {
      console.log(`Servidor iniciado en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
