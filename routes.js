const router = require('express').Router();

const polls = require('./controller/polls');
const options = require('./controller/options');

module.exports = (router) => {
    router.get('/api/polls', polls.findAll);
    router.post('/api/polls', polls.add);
    router.delete('/api/polls/:id', polls.deleteById);
    router.get('/api/options', options.findAll);
    router.patch('/api/options/:id', options.updateById);
    router.delete('/api/options/:id', options.deleteById);
};