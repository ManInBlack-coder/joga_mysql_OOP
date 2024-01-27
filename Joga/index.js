app.use(express.static('public'));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const articleRoutes = require('./routes/article');

app.use('/', articleRoutes)
app.use('/article', articleRoutes)
app.use('/author', articleRoutes)

app.listen(3001, () => {
  console.log('app is started at https://localhost:3000');
});
