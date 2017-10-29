const app = require('express').Router();
const User = require('./db.js').models.User;
const Polls = require('./db.js').models.Poll;
const Options = require('./db.js').models.Options;

module.exports = app;

//  ################### users route ###################
//  get all user data
app.get('/users', (req, res, next) => {
  const userData = User.findAll()
    .then((result) => {
      const resultData = res.send(result);
      return resultData;
    })
    .catch(next);

  return userData;
});

// get specific user data
app.get('/users/:id', (req, res, next) => {
  const userData = User.findAll({ where: { id: req.params.id } })
    .then((result) => {
      const resultData = res.send(result);
      return resultData;
    })
    .catch(next);

  return userData;
});

// get all user data & polls by specified user
app.get('/users/:id/polls', (req, res, next) => {
  const userData = User.findAll({
    include: [{ model: Polls, where: { id: req.params.id } }],
  })
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return userData;
});

// User Login simple authentication
app.get('/users/login/:username/:password', (req, res, next) => {
  const userData = User.findAll({
    where: { name: req.params.username, password: req.params.password },
  })
    .then((result) => {
      if (result.length === 1) {
        return res.send(true);
      }
      return res.send(false);
    })
    .catch(next);

  return userData;
});

// Create a user route - see how we want to implement this.

//  ################### polls route ###################
//  get all polls
app.get('/polls', (req, res, next) => {
  const pollData = Polls.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return pollData;
});

// get specific poll data
app.get('/polls/:id', (req, res, next) => {
  const pollData = Polls.findAll({
    include: [{ model: Options, where: { id: req.params.id } }],
  })
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return pollData;
});

// get specific poll by specific user
app.get('/polls/user/:id', (req, res, next) => {
  const pollData = Polls.findAll({ where: { userId: req.params.id } })
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return pollData;
});
