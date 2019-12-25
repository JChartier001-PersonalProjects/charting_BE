const router = require('express').Router();

const nutrition = require('../flowsheets-model/nutrition-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/nutrition', restricted, (req, res) => {
    nutrition.find()
    .then(nutritionInfo => {
        res.status(200).json(nutritionInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/nutrition/:id', restricted, (req, res) => {
    const id = req.params.id;
    nutrition.findById(id)
    .then(nutritionInfo => {
        res.json(nutritionInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/nutrition/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    nutrition.update(id, changes)
    .then(nutritionInfo => {
        res.status(200).json(nutritionInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/nutrition', restricted, (req, res) => {
    const filter = req.body
    nutrition.findBy(filter)
    .then(nutrition => {
        res.status(200).json(nutrition)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/nutrition', restricted, (req, res) => {
    const info = req.body;
    nutrition.add(info)
    .then(nutritionInfo => {
        res.status(201).json(nutritionInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;