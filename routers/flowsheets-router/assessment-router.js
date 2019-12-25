const router = require('express').Router();

const assessment = require('./assessment-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/assessment', restricted, (req, res) => {
    assessment.find()
    .then(assessmentInfo => {
        res.status(200).json(assessmentInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/assessment/:id', restricted, (req, res) => {
    const id = req.params.id;
    assessment.findById(id)
    .then(assessmentInfo => {
        res.json(assessmentInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/assessment/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    assessment.update(id, changes)
    .then(assessmentInfo => {
        res.status(200).json(assessmentInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/assessment', restricted, (req, res) => {
    const filter = req.body
    assessment.findBy(filter)
    .then(assessment => {
        res.status(200).json(assessment)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/assessment', restricted, (req, res) => {
    const info = req.body;
    assessment.add(info)
    .then(assessmentInfo => {
        res.status(201).json(assessmentInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;