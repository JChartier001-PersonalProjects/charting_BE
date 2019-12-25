const router = require('express').Router();

const diagnosis = require('./diagnosis-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/diagnosis', restricted, (req, res) => {
    diagnosis.find()
    .then(diagnosis => {
        res.status(200).json(diagnosis);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/diagnosis/:id', restricted, (req, res) => {
    const id = req.params.id;
    diagnosis.findById(id)
    .then(diagnosis => {
        res.json(diagnosis);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/diagnosis/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    diagnosis.update(id, changes)
    .then(diagnosis => {
        res.status(200).json(diagnosis)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/diagnosis', restricted, (req, res) => {
    const diagnosis = req.body;
    diagnosis.findBy(diagnosis)
    .then(diagnosis => {
        res.status(200).json(diagnosis)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/diagnosis', restricted, (req, res) => {
    const diagnosis = req.body;
    diagnosis.add(diagnosis)
    .then(diagnosis => {
        res.status(201).json(diagnosis)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;