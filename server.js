const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

const port = 8080;
app.listen(port, () => { });