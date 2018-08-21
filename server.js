require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./model/database');
const sanitize = require('sanitize').middleware;

const app = express();

app.use(sanitize);
app.use(bodyParser.json({extended: true}));
app.use(cors());

require('./routes')(app);

//serve static assets in production
if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(__dirname+'../client/build'));
}

//general error handling middleware
app.use((req,res,next) => {
	const err = new Error('Internal Server Error');
	err.status = 500;
	next(err);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port:${port}`));

if (process.env.NODE_ENV === 'development') {
    database.seed();
} else {
    database.sync();
}

module.exports=app;
