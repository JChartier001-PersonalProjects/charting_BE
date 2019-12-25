const router = require('express').Router();

const nurse = require('./nurse-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/nurse', restricted, (req, res) => {
    nurse.find()
    .then(nurseInfo => {
        res.status(200).json(nurseInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/nurse/:id', restricted, (req, res) => {
    const id = req.params.id;
    nurse.findById(id)
    .then(nurseInfo => {
        res.json(nurseInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/nurse/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    nurse.update(id, changes)
    .then(nurseInfo => {
        res.status(200).json(nurseInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/nurse', restricted, (req, res) => {
    const filter = req.body
    nurse.findBy(filter)
    .then(nurse => {
        res.status(200).json(nurse)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/nurse', restricted, (req, res) => {
    const info = req.body;
    nurse.add(info)
    .then(nurseInfo => {
        res.status(201).json(nurseInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;