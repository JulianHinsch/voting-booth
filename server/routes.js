const router = require('express').Router();

const polls = require('./controller/polls');
const options = require('./controller/options');

module.exports = (router) => {
    router.get('/api/polls', polls.findAll);
    router.get('/api/polls/:id', polls.findById);
    router.put('/api/polls/:id', polls.upsertById);
    router.delete('/api/polls/:id', polls.deleteById);
    router.get('/api/options', options.findAll);
    router.put('/api/options/:id', options.upsertById);
    router.delete('/api/options/:id', options.deleteById);
};