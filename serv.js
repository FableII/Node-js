const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOvveride = require('method-override');
const postRoutes = require('./routes/post-routes');
const contactRoutes = require('./routes/contact-routes');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
const db = 'mongodb+srv://Eugene:qwerty96@cluster0.qih6psf.mongodb.net/node-blog?retryWrites=true&w=majority';

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('styles'));

app.use(methodOvveride('_method'));

app.use(contactRoutes);

app.use(postRoutes);

app.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .render(createPath('error'), { title });
});