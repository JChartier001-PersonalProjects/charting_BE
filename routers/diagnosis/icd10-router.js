const router = require('express').Router();

const icd10 = require('./icd10-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/icd', restricted, (req, res) => {
    icd10.find()
    .then(icd => {
        res.status(200).json(icd);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/icd/:id', restricted, (req, res) => {
    const id = req.params.id;
    icd10.findById(id)
    .then(icd => {
        res.json(icd);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/icd/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    icd10.update(id, changes)
    .then(icd => {
        res.status(200).json(icd)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/icd', restricted, (req, res) => {
    const icd = req.body;
    icd10.findBy(icd)
    .then(icd => {
        res.status(200).json(icd)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/icd', restricted, (req, res) => {
    const icd = req.body;
    icd10.add(icd)
    .then(icd => {
        res.status(201).json(icd)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;