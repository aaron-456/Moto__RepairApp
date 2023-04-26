require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');
const initModel = require('./models/initModel');

db.authenticate()
  .then(() => console.log('Database Authenticate ☑'))
  .catch((error) => console.log(error));

initModel();

db.sync()
  .then(() => console.log('Database Synced ☑'))
  .catch((error) => console.log(error));

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`App running on port ${port}..🦾`);
});
