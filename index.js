const express = require('express');

const app = express();

app.listen(process.env.PORT, () => {
  console.log('server rodando na porta ', process.env.PORT);
});
