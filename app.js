const express = require('express');
const app = express();
app.use('/users', require('./api/users'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');

  require('./models').sequelize.sync({force: false})
  .then(() => {
    console.log('Database sync');
  })
});

module.exports = app;