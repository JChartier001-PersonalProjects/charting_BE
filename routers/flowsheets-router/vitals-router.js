const router = require('express').Router();

const vitals = require('../flowsheets-model/vitals-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/vitals', restricted, (req, res) => {
    vitals.find()
    .then(vitalsInfo => {
        res.status(200).json(vitalsInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/vitals/:id', restricted, (req, res) => {
    const id = req.params.id;
    vitals.findById(id)
    .then(vitalsInfo => {
        res.json(vitalsInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/vitals/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    vitals.update(id, changes)
    .then(vitalsInfo => {
        res.status(200).json(vitalsInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/vitals', restricted, (req, res) => {
    const filter = req.body
    vitals.findBy(filter)
    .then(vitals => {
        res.status(200).json(vitals)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/vitals', restricted, (req, res) => {
    const info = req.body;
    vitals.add(info)
    .then(vitalsInfo => {
        res.status(201).json(vitalsInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;