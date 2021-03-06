const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../routers/user/user-model.js')

router.post('/register', (req, res) => {
  let user= req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;

  Users.add(user)
  .then(newUser => {
    res.status(201).json(newUser);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json(error)
  })
});


router.post('/login', (req, res) => {
  let {email, password} = req.body;

  Users.findBy({email})
  .first()
  .then(user => {
    if(user && bcrypt.compareSync(password, user.password)) {
      const token = signToken(user);

      res.status(200).json({
        token, 
        message: `Welcome ${user.email}!`
      });
    } else {      
      res.status(401).json({message: "Invalid Credentials"});
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json(error)
  });
}); 


function signToken(user) {
  const payload = {
    username: user.username,    
  };

  const secret = process.env.JWT_SECRET || "is this a secret?";

  const options = {
    expiresIn:  "1h"
  };
  return jwt.sign(payload, secret, options);
}


module.exports = router;