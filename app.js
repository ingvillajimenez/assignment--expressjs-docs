require('dotenv').config();
const express =  require('express');
const app = express();
const logger = require('morgan');

const jsonResponse = require('./data')

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.set('views', './src/views')
app.set('view engine', 'pug')

app.use('/static', express.static('./public'))

app.get('/', (req, res) => {
    res.render('main', {
        projectTitle: 'Myownfancyproject API'         
    });
});

app.get('/docs/books/list', (req, res) => {
    res.render('docsBooksList', {
        projectTitle: 'GET /books',
        snippet: jsonResponse.books                    
    });
});

app.get('/docs/books/item', (req, res) => {
    res.render('docsBooksItem', {
        projectTitle: 'GET /books/:id',
        snippet: jsonResponse.booksId                 
    });
});

app.get('/docs/products/list', (req, res) => {
    res.render('docsProductsList', {
        projectTitle: 'GET /products',
        snippet: jsonResponse.products                  
    });
});

app.get('/docs/products/item', (req, res) => {
    res.render('docsProductsItem', {
        projectTitle: 'GET /products/:id',
        snippet: jsonResponse.productsId                    
    });
});

app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`)
});