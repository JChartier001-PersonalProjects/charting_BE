const router = require('express').Router();

const med = require('../flowsheets-model/med_order-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/med_order', restricted, (req, res) => {
    med_order.find()
    .then(medInfo => {
        res.status(200).json(medInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/med_order/:id', restricted, (req, res) => {
    const id = req.params.id;
    med_order.findById(id)
    .then(medInfo => {
        res.json(medInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/med_order/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    med_order.update(id, changes)
    .then(medInfo => {
        res.status(200).json(medInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/med_order', restricted, (req, res) => {
    const filter = req.body
    med_order.findBy(filter)
    .then(med_order => {
        res.status(200).json(med_order)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/med_order', restricted, (req, res) => {
    const info = req.body;
    med_order.add(info)
    .then(medInfo => {
        res.status(201).json(medInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;