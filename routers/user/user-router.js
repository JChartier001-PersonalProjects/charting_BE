const router = require('express').Router();

const User = require('../user/user-model.js')
const restricted = require('../../auth/auth-middleware.js');

router.get('/', restricted, (req, res) => {
    User.find()
    .then(users => {
        res.json(users);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.get('/', restricted, (req, res) => {
    User.findById(id)
    .then(user => {
        res.json(user);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

router.put('/:id', (req, res) => {
    user.update(id, changes)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
})

module.exports = router;