const Poll = require('../database.js').models.Poll;

//request handlers

const findAll = (req,res,next) => {
	Poll.findAll().then(result => {
		return res.send(result);
	}).catch(next);
}

const findById = (req,res,next) => {
	Poll.findAll({ where: {id: req.params.id}}).then(result => {
		return res.send(result);
	}).catch(next);
}

const findByUser = (req,res,next) => {
	Poll.findAll({ where: {user: req.params.user}}).then(result => {
		return res.send(result);
	}).catch(next);
}

const add = (req,res,next) => {
	Poll.create(req.body).then(result => {
		return res.send(result);
	}).catch(next);
}

const updateById = (req,res,next) => {
	Poll.update(req.body, {where: { id: req.params.id }}).then(result => {
		return res.send(result);
	}).catch(next);
}

module.exports = {
	findAll,
	findById,
	findByUser,
	add,
	updateById,
}