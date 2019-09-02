const express = require('express');

const app2 = express();

app2.get('/', (req, res) => {
    return res.send('HELLO GUY');
})

app2.get('/teste', (req, res) => {
    return res.send('HELLO GUY teste');
})



app2.listen(3334);