const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())








const articleRoutes = require('./routes/article');

app.use('/article', articleRoutes)

const articleRoutes = require('./routes/author');

app.use('/author', articleRoutes)

app.listen(3010, () => {
  console.log('app is started at https://localhost:3010');
});



