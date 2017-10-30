const User = require('../database.js').models.User;

const findByUsername = (req,res,next) => {
	User.find({ where: { username: req.params.username }}).then(result => {
		return res.send(result);
	}).catch(next);
}

const add = (req,res,next) => {
	User.create(req.body).then(result => {
		return res.send(result);
	}).catch(next);
}

module.exports = {
	findByUsername,
	add,
}