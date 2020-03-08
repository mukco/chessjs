const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3030;

app.use(express.json());
app.get('/', (res, req) => { 
    res.sendFile(path.join(__dirname, 'index.html')); 
});
app.listen(port, () => {
  console.log(`You\'re listening on: ${port}`)
});