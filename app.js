const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`);
});
