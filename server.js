// dependencies
const express = require('express');
const db = require('mysql');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3306;

// initiallizing the express app setting it to parse response as json
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting express to use the handlebars engine
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');


// setting express to use the routes from the burger controller file
const routes = require('./controllers/burgers_controller.js');
app.use(routes);
// start listening on the indiated port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));