const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 7777;
const app = express();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/the_gram';
const routes = require('./routes');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Serves react
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

// Add routes, both API and view
// app.use(routes);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
