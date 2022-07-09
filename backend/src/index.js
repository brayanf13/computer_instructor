const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// app.use('/uploads', express.static('../uploads'))
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// app.listen(3333);

app.use(errors());

app.listen(3333, () => {
  console.log('Server is UP! ');
});