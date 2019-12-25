const router = require('express').Router();

const doctor = require('./doctor-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/doctor', restricted, (req, res) => {
    doctor.find()
    .then(doctor => {
        res.status(200).json(doctor);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/doctor/:id', restricted, (req, res) => {
    const id = req.params.id;
    doctor.findById(id)
    .then(doctor => {
        res.json(doctor);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/doctor/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    doctor.update(id, changes)
    .then(doctor => {
        res.status(200).json(doctor)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/doctor', restricted, (req, res) => {
    const filter = req.body
    doctor.findBy(filter)
    .then(doctor => {
        res.status(200).json(doctor)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/doctor', restricted, (req, res) => {
    const info = req.body;
    doctor.add(info)
    .then(doctor => {
        res.status(201).json(doctor)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;