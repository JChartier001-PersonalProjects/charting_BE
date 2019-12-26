const router = require('express').Router();

const patient = require('./patient-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/patient', restricted, (req, res) => {
    patient.find()
    .then(patientInfo => {
        res.status(200).json(patientInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/patient/:id', restricted, (req, res) => {
    const id = req.params.id;
    patient.findById(id)
    .then(patientInfo => {
        res.json(patientInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/patient/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    patient.update(id, changes)
    .then(patientInfo => {
        res.status(200).json(patientInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/patient/search', restricted, (req, res) => {
    const filter = req.body
    patient.findBy(filter)
    .then(patient => {
        console.log(patient)
        res.status(200).json(patient)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/patient', restricted, (req, res) => {
    const info = req.body;
    patient.add(info)
    .then(patientInfo => {
        console.log(patientInfo);
        res.status(201).json(patientInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;