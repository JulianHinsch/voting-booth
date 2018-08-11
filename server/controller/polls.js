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

const add = (req,res,next) => {
    console.log(req.body);
	Poll.create(req.body).then(result => {
        const optionData = req.body.options.map(option => Option.create(option));
        return Promise.all(optionData);
    }).then(result => {
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
	add,
	deleteById,
}