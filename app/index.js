const express = require('express');
const app = express();
const PORT = process.env.HTTP_PORT || 3000;
var logger = require('morgan');
app.use(logger('combined'));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(PORT, () => console.log(`🚀 Listening on port: ${PORT}!`));