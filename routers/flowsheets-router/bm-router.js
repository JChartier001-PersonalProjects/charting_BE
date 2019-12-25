const router = require('express').Router();

const bm= require('./bm-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/bm', restricted, (req, res) => {
    bm.find()
    .then(bmInfo => {
        res.status(200).json(bmInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/bm/:id', restricted, (req, res) => {
    const id = req.params.id;
    bm.findById(id)
    .then(bmInfo => {
        res.json(bmInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/bm/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    bm.update(id, changes)
    .then(bmInfo => {
        res.status(200).json(bmInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/bm', restricted, (req, res) => {
    const filter = req.body
    bm.findBy(filter)
    .then(bm => {
        res.status(200).json(bm)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/bm', restricted, (req, res) => {
    const info = req.body;
    bm.add(info)
    .then(bmInfo => {
        res.status(201).json(bmInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;