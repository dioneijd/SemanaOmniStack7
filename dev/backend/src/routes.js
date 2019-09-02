const express = require('express');
const multer = require('multer');

const PostController = require('./controllers/PostController');

const upload = multer();



const routes = new express.Router();

//routes.get('/', (req, res) => {
//    return res.send(`hello world, ${req.query.name}!`);
//});

routes.post('/posts', upload.single('image'), PostController.store); 


module.exports = routes;