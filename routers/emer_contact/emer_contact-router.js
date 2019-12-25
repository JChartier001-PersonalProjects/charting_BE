const router = require('express').Router();

const contact = require('./emer_contact-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/emer_contact', restricted, (req, res) => {
    contact.find()
    .then(contactInfo => {
        res.status(200).json(contactInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/contact/:id', restricted, (req, res) => {
    const id = req.params.id;
    contact.findById(id)
    .then(contactInfo => {
        res.json(contactInfo);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/contact/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    contact.update(id, changes)
    .then(contactInfo => {
        res.status(200).json(contactInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/contact', restricted, (req, res) => {
    const filter = req.body
    contact.findBy(filter)
    .then(contact => {
        res.status(200).json(contact)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})

router.post('/contact', restricted, (req, res) => {
    const info = req.body;
    contact.add(info)
    .then(contactInfo => {
        res.status(201).json(contactInfo)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error)
    })
})



module.exports = router;