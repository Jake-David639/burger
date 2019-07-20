// dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller.js');
const PORT = 3306;

// initiallizing the express app
const app = express();
// setting express to use the handlebars engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting express to serve static content from the public folder in the root directory
// app.use(express.static("public"));
// setting express to use the routes from the burger controller file
app.use(routes);
// start listening on the indiated port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));