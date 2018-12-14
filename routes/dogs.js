const express = require('express')
const Dog = require('../models/Dog')
const router = express.Router()

//List
router.get('/dogs', (req, res, next)=>{
  Dog.find()
    .then(response=>{
      res.json(response)
    })
    .catch(e=>{
      res.json(e)
    })
})

//Detail
router.get('/dogs/:id', (req, res, next)=>{
  Dog.findById(req.params.id)
    .then(response=>{
      res.json(response)
    })
    .catch(e=>{
      res.json(e)
    })
})

module.exports = router