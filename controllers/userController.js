const router = require('express').Router();
const cbrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/index').sequelize.import('../models/user');

router.post('/createuser', (req, res) => {
  User.findOne({
    where: {
        email: req.body.user.email
    }
  })
  .then(
    success = user => {
      cbrypt.compare(reqUser.password, user.password)
      .then(matches => {
        if(matches) {
          console.log('matches :', matches)
          const token = jwt.sign({ id: user. id}, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });

          res.status(200).json({
            user : user,
            token : sessionToken
          });
        } else {
          res.status(500).json("err");
        }
      });
    },

    fail = user => {
      res.status(500).json(err.message);
    }
  )
})

router.post('/login', (req, res) => {
    const user = req.body.user;

    User.create({
      fullName: user.fullName,
      email: user.email,
      password: bcrypt.hashSync(user.password),
      specilaity: req.body.specialty
    })
    .then(
      success = newUser => {
        res.status(200).json(newUser);
      },

      fail = err => {
        console.log(err.message);
      });
});

router.get('/:speciality', (res, res) => {
  User.findAll({
    where: {
      specialty: req.body.specialy
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