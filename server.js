// dependencies
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
// setting express to use the handlebars engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    
})