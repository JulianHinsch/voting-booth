const Option = require('../model/database.js').models.Option;

const findAll = (req,res,next) => {
	Option.findAll().then(result => {
		return res.send(result);
	}).catch(next);
}

const upsertById = (req,res,next) => {
	Option.upsert(req.body, { where: {id: req.params.id}}).then(result => {
		return res.send(200);
	}).catch(next);
}
const deleteById = (req,res,next) => {
    Option.destroy({where: {id: req.params.id}}).then(result => {
        return res.send(200);
    })
}

module.exports = {
    findAll,
    upsertById,
    deleteById,
}