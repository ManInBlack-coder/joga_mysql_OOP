const express = require('express')
const app = express()







const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const articleControllerClass = require('./controllers/article')
const articleController = new articleControllerClass()

const articleRoutes = require('./routes/article');

app.use('/', articleRoutes)

app.listen(3010, () => {
  console.log('app is started at https://localhost:3010');
});



