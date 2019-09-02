const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//mongoose.connect('mongodb+srv://sys:1234@cluster0-z6ohu.mongodb.net/test?retryWrites=true&w=majority', {
//    useNewUrlParser: true,
//});

app.use(routes);
app.listen(3333);

 