const express = require('express');
const mongoose = require('mongoose');
const serverInfo = { port: 7777, serverName: 'THE GRAM' };
const dbInfo = { port: 27017, dbName: 'the_gram' };
const app = express();
const PORT = process.env.PORT || serverInfo.port;

const routes = require('./routes');

//db connections
// const models = require('./models');

const MONGODB_URI =
  process.env.MONGODB_URI ||
  `mongodb://127.0.0.1:${dbInfo.port.toString()}/${dbInfo.dbName}`;
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() =>
    console.log(`DB's Port -> :${dbInfo.port}\nDB's Name -> ${dbInfo.dbName}`)
  )
  .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Serves react
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

// Add routes, both API and view
app.use(routes);

app.listen(PORT, () => {
  console.log(
    `Server's Name 🌎 -> ${serverInfo.serverName} \nServer's port -> :${
      serverInfo.port
    }`
  );
});
