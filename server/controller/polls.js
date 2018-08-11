const Poll = require('../model/database.js').models.Poll;
const Option = require('../model/database.js').models.Option;

const findAll = (req,res,next) => {
	Poll.findAll({
        include: [
            {
                model: Option,
                as: 'options',
                attributes: [
                    'id',
                    'answer',
                    'votes',
                    ['pollId','poll_id'],
                ],
                required: false,
                nested: true,
            }
        ]
    }).then(result => {
		return res.send(result);
	}).catch(next);
}

const findById = (req,res,next) => {
	Poll.findOne({ where: {id: req.params.id}}).then(result => {
		return res.send(result);
	}).catch(next);
}

const upsertById = (req,res,next) => {
    console.log(req.body);
	Poll.upsert(req.body, { where: {id: req.params.id}}, ).then(result => {
		return res.send(200);
	}).catch(next);
}

const deleteById = (req,res,next) => {
	Poll.destroy({where: { id: req.params.id }}).then(result => {
        console.log(result);
		return res.send(200);
	}).catch(next);
}

module.exports = {
	findAll,
	findById,
    upsertById,
	deleteById,
}