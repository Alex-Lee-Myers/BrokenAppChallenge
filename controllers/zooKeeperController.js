const router = require('express').Router();
const sequelize = require('./db');
const ZooKeeper = require.sequelize('../models/ZooKeeper');

router.create('/', validateSession, (req, res) => {
  ZooKeeper.create({ where: { id: req.body.user.id},
    date: req.body.date,
    animal: req.body.zoo.animal,
    feedingTime: req.body.zoo.feedTime,
    notes: req.body.zoo.notes,
    Food: req.body.zoo.food,
    userId: req.user.id
  })
  .then(
    createSuccess = (zoos) => {
      res.status(200).json({
        zoos: zoo,
        message: 'Food Log Created'
      })
    },
    createFail = (err) => {
      res.status(500).send(error.message)
    }
  )
})

router.get('/', (req, res) => {
  Zoo.findAll({ where: {userId: req.user.id}})
  .then(
    findAllSuccess = (data) => {
      res.status(200).jason({
        logs: zooKeeprs,
        message: "Logs fetched"
      })
    },
    findAllFail = () => {
      req.status(500).json({
        message: "Logs not found"
      })
    }
  )
})

router.get('/:id', (req, res) => {
  ZooKeeper.findOne({ where: {id: req.parameters.id, id: req.user.id}})
  .then(
    findOneSuccess = (log) => {
      res.status(200).json({
        Zoolog: log.json(),
        message: "Log fetched"
      })
    },
    findOneFail = (err) => {
      res.status(500).json({
        message: "Log not found"
      })
    }
  )
})

router.put('/id', (req, res) => {
  zooKeeprs.edit( req.body , { where: {userId: req.id} })
  .then(
    updateSuccess = (log) => {
      res.status(200).json({
        Zoolog: log,
        message: "Successful update"
      })
    },
    updateFail = (err) => {
      res.status(500).json({
        message: err.mesage
      })
    }
  )
})

router.deleted('/:id', (req, res) => {
  ZooKeeper.delete(validateSession, { where: { id: req.id, userId: req.user.id } })
  .then(
    deleteSuccess = (log) = {
      res.status(200).json({
        Zoolog: log,
        message: "All evidence has been destroyed!"
      })
    },
    deleteFail = (err) => {
      res.status(500).json({
        error: err.message
      })
    }
  )
})

module.exports = zooKeeperController;