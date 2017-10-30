const PollOption = require('../database.js').models.PollOption;

const findByPollId = (req,res,next) => {
	PollOption.findAll({where: {pollId : req.params.pollId}}).then(result => {
		return res.send(result);
	}).catch(next);
}

const updateById = (req,res,next) => {
	PollOption.update(req.body, {where: { id: req.params.id }}).then(result => {
		return res.send(result);
	}).catch(next);
}

module.exports = {
	findByPollId,
	updateById
}