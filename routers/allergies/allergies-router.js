const router = require('express').Router();

const Allergy = require('./allergies-model.js')
const restricted = require('../auth/auth-middleware.js');

router.get('/allergy', restricted, (req, res) => {
    Allergy.find()
    .then(allergy => {
        res.json(allergy);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/allergy', restricted, (req, res) => {
    Allergy.findById(id)
    .then(allergy => {
        res.json(allergy);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/allergy/:id', (req, res) => {
    Allergy.update(id, changes)
    .then(allergy => {
        res.status(200).json(allergy)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/allergy', (req, res) => {
    Allergy.findBy(allergy)
    .then(allergy => {
        res.status(200).json(allergy)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/allergy', (req, res) => {
    Allergy.add(allergy)
    .then(allergy => {
        res.status(201).json(allergy)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;