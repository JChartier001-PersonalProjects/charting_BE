const router = require('express').Router();

const suction = require('../flowsheets-model/suction-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('suction', restricted, (req, res) => {
    suction.find()
    .then(suctionInfo => {
        res.status(200).json(suctionInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/suction/:id', restricted, (req, res) => {
    const id = req.params.id;
    suction.findById(id)
    .then(suctionInfo => {
        res.json(suctionInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/suction/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    suction.update(id, changes)
    .then(suctionInfo => {
        res.status(200).json(suctionInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/suction', restricted, (req, res) => {
    const filter = req.body
    suction.findBy(filter)
    .then(suction => {
        res.status(200).json(suction)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/suction', restricted, (req, res) => {
    const info = req.body;
    suction.add(info)
    .then(suctionInfo => {
        res.status(201).json(suctionInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;