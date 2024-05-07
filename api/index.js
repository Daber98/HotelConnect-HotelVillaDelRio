const express = require("express");
const cors = require("cors");
require("dotenv").config();
 
const app = express();
 
// Middlewares
app.use(express.json());
app.use(cors());

require('./database/mysqlConnection'); // Modulo de conexión a MySQL

// Controllers import
const hashController = require('./controllers/auth/hashController');
const loginController = require('./controllers/auth/loginController');
const registerController = require('./controllers/auth/registerController');
const reservationController = require('./controllers/auth/reservationController');

// Routes
app.get('/hash', hashController.hashPassword);
app.post('/login', loginController.login);
app.post('/register', registerController.register);
app.post('/reservation', reservationController.reservation);

const PORT = process.env.BACKEND_PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})