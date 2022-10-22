require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const tripRoute = require('./routes/tripRoute');

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/trips', tripRoute);

app.listen(PORT, () => {
  console.log('Vzleteli na portu ', PORT);
});
