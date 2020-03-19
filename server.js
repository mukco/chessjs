const express = require('express');
const app = express();
const path = require('path'); var __dirname = path.resolve()

const port = process.env.PORT || 3030;

app.use(express.json());
console.log(app._router.stack); 
console.log(path.join(__dirname, 'index.html'));
app.use(express.static('public'));
app.get('/', (res, req) => { 
  res.sendFile(path.join(__dirname, 'index.html')); 
});
app.listen(port, () => {
  console.log(`You\'re listening on: ${port}`); 
});