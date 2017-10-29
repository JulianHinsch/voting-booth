const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();


// serve the Built file from create react APP
app.use(express.static(path.join(__dirname, '/client/build')));
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public','index.html')));

app.use('/api', require('./routes'));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening on port:${port}`));

//  any other routes will send error 404
app.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

db.seed();
