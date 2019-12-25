const router = require('express').Router();

const Allergy = require('./allergies-model.js')
const restricted = require('../../auth/auth-middleware.js');

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

router.get('/allergy/:id', restricted, (req, res) => {
    const id = req.params.id
    Allergy.findById(id)
    .then(allergy => {
        res.json(allergy);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/allergy/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body
    Allergy.update(id, changes)
    .then(allergy => {
        res.status(200).json(allergy)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/allergy', restricted, (req, res) => {
    const allergy = req.body
    Allergy.findBy(allergy)
    .then(allergy => {
        res.status(200).json(allergy)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/allergy', restricted, (req, res) => {
    const allergy = req.body
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