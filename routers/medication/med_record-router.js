const router = require('express').Router();

const med = require('../flowsheets-model/med_record-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/med_record', restricted, (req, res) => {
    med_record.find()
    .then(medInfo => {
        res.status(200).json(medInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/med_record/:id', restricted, (req, res) => {
    const id = req.params.id;
    med_record.findById(id)
    .then(medInfo => {
        res.json(medInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/med_record/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    med_record.update(id, changes)
    .then(medInfo => {
        res.status(200).json(medInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/med_record', restricted, (req, res) => {
    const filter = req.body
    med_record.findBy(filter)
    .then(med_record => {
        res.status(200).json(med_record)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/med_record', restricted, (req, res) => {
    const info = req.body;
    med_record.add(info)
    .then(medInfo => {
        res.status(201).json(medInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;