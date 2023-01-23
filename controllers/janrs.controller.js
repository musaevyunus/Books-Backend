const Janr = require('../models/Janr.model')

module.exports.janrController = {
    addJanr: (req, res)=> {
        Janr.create({
            name: req.body.name,
            text: req.body.text
        }).then((data)=> {
            res.json(data)
        }).catch(()=> res.json('error'))
    },
    deleteJanr: (req, res)=> {
        Janr.findByIdAndDelete(req.params.id).then(()=> {
            res.json('Жанр удален')
        }).catch(()=> res.json('error'))
    },
    getJanr: (req, res) => {
        Janr.find().then((data)=> {
            res.json(data)
        }).catch(()=> res.json('error'))
    }
}