const express = require('express');
const app = express();
app.use('/users', require('./api/users'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

module.exports = app;