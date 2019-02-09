const models = require('../../models/models');

exports.index = (req, res) => {

    models.User.findAll().then(function(results) {
        res.json(results);
    }).catch(function(err) {
        //TODO: error handling
        return res.status(404).json({err: 'Undefined error!'});
    });
};


exports.show = (req, res) => {
    // console.log("show");
    const id = parseInt(req.params.id, 10);
    if(!id){
        return res.status(400).json({err: 'Incorrect id'});
    }

    models.User.findOne({
        where: {
            id: id
        }
    }).then(user => {
        if(!user){
            return res.status(404).json({err: 'No User'});
        }
        return res.json(user);
    });
};

exports.destroy = (req, res) => {
    // console.log("destory");
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    models.User.destroy({
        where: {
            id: id
        }
    }).then(() => res.status(204).send());
};

exports.create = (req, res) => {
    // console.log("create");
    const name = req.body.name || '';

    if(!name.length){
        return res.status(400).json({err: 'Incorrect name'});
    }
    
    models.User.create({
        name: name
    }).then((user) => res.status(201).json(user));
};

exports.update = (req, res) => {
    const newName = req.body.name || '';
    const name = models.User.name;
    const id = parseInt(req.params.id, 10);

    if(!name.length){
        return res.status(400).json({err: 'Incrrect name'});
    }

    models.User.update(
        {name: newName},
        {where: {id: id}, returning: true})
        .then(function(result) {
             res.json(result[1][0]);
        }).catch(function(err) {
             //TODO: error handling
             return res.status(404).json({err: 'Undefined error!'});
    });
}