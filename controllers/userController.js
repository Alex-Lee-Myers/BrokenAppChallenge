const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const {User} = require('../models');
//!CREATE USER
router.post('/login', (req, res) => {
  User.findOne({
    where: {
        email: req.body.user.email
    }
  })
  .then(
    success = newUser => {
      bcrypt.compare(reqUser.password, user.password)
      .then(matches => {
        if(matches) {
          console.log('matches :', matches)
          const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });

          res.status(200).json({
            user: newUser,
            sessionToken: token
          });
        } else {
          res.status(500).json("err");
        }
      });
    },

    fail = err => {
      res.status(500).json(err.message);
    }
  )
})
//! LOGIN
router.post('/createuser', (req, res) => {
    const user = req.body.user;

    User.create({
      firstName: user.fullName,
      lastName: user.lastName,
      email: user.email,
      password: bcrypt.hashSync(user.password),
      speciality: req.body.speciality
    })
    .then(
      success = newUser => {
        res.status(200).json(newUser);
      },

      fail = err => {
        console.log(err.message);
      });
});

router.get('/:speciality', (req, res) => {
  User.findAll({
    where: {
      speciality: req.body.speciality
    }
  })
  .then(
    success = user => {
      res.status(200).json({
        user : user
      })
    }
  )
  .then(
    fail = err => {
    res.status(500).json(err.message);
    }
  )
})

module.exports = router;