const router = require('express').Router();

const output = require('../flowsheets-model/void-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/output', restricted, (req, res) => {
    output.find()
    .then(voidInfo => {
        res.status(200).json(voidInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/output/:id', restricted, (req, res) => {
    const id = req.params.id;
    output.findById(id)
    .then(voidInfo => {
        res.json(voidInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/output/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    output.update(id, changes)
    .then(voidInfo => {
        res.status(200).json(voidInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/output', restricted, (req, res) => {
    const filter = req.body
    output.findBy(filter)
    .then(output => {
        res.status(200).json(output)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/output', restricted, (req, res) => {
    const info = req.body;
    output.add(info)
    .then(voidInfo => {
        res.status(201).json(voidInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;