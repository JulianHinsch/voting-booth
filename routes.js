const router = require('express').Router();

const users = require('./controllers/users.js');
const polls = require('./controllers/polls.js');
const polloptions = require('./controllers/polloptions.js');

//REST http methods
module.exports = (router) => {
  router.post('/api/users', users.add);
  router.get('/api/users/:username', users.findByUsername);
  router.post('/api/polls', polls.add);
  router.get('/api/polls', polls.findAll);
  router.get('/api/polls/:pollid', polls.findById);
  router.get('/api/polls/:userid', polls.findByUser);
  router.get('/api/polloptions/:pollid', polloptions.findByPollId);
  router.put('/api/polloptions/:id', polloptions.updateById);
};