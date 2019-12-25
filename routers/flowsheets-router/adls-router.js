const router = require('express').Router();

const adls = require('../flowsheets-model/adls-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/adls', restricted, (req, res) => {
    adls.find()
    .then(adlsInfo => {
        res.status(200).json(adlsInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/adls/:id', restricted, (req, res) => {
    const id = req.params.id;
    adls.findById(id)
    .then(adlsInfo => {
        res.json(adlsInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/adls/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    adls.update(id, changes)
    .then(adlsInfo => {
        res.status(200).json(adlsInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/adls', restricted, (req, res) => {
    const filter = req.body
    adls.findBy(filter)
    .then(adls => {
        res.status(200).json(adls)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/adls', restricted, (req, res) => {
    const info = req.body;
    adls.add(info)
    .then(adlsInfo => {
        res.status(201).json(adlsInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;