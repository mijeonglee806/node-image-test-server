const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const multer  = require('multer')
const sharp = require('sharp')
const uuid = require('uuid/v4')

//App
const app = express();

//Config

//Router
const router = require('./router');

//Cors
const cors = require('cors');

//App setup
app.use(morgan('combined')); //logging framework - debugging
app.use(cors());
app.use(bodyParser.json('*/*')); //parsing incoming request to especially json

//Router connection
router(app);

//Server setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on: ', port);