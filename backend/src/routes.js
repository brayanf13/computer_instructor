const express = require('express');
const moduleController = require('./controllers/moduleController');
const loginController = require('./controllers/loginController');
const unityController = require('./controllers/unityController');
const uploadsController = require('./controllers/uploadsController');
const multer = require('multer');
// const multerConfig = require('./config/multer');
const { storage } = require('./config/multer');
// import multer from 'multer';
// const multerConfig = require('./config/multer');
// const { celebrate, Joi } = require('celebrate');

const routes = express.Router();

const upload = multer({storage});

routes.get('/', (request, response) => {
    return response.json("Server is UP!")
});

routes.post('/module', moduleController.create);
routes.get('/module', moduleController.index);
routes.delete('/module/:id', moduleController.delete);
routes.put('/module/:id', moduleController.update);

routes.get('/unity', unityController.index);
routes.get('/unityModule/:id', unityController.indexOneById);
routes.delete('/unity/:id', unityController.delete);
routes.patch('/unity/:id', upload.single('image_url'), unityController.update);
routes.post('/unity', upload.single('image_url'), unityController.create);
// routes.post('/unity', unityController.create);

routes.get('/uploads', uploadsController.index);

routes.post('/login', loginController.create);
routes.get('/login', loginController.index);
routes.delete('/login/:id', loginController.delete);

module.exports = routes;