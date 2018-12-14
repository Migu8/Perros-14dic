const router = require('express').Router()
const User = require('../models/User')
const passport = require('passport')


//Signup
router.post('/signup', (req, res, next)=>{
  User.register(req.body, req.body.password)
    .then(user=>{
      res.status(201).json(user)
    })
    .catch(e=>{
      res.status(500).json(e)
    })
})


//Login
// router.post('/login', (req,res,next)=>{
//   passport.authenticate('local', (error, user, info)=>{
//     if (error) return res.status(500).json(error)
//     if(!user) return res.status(404).json(info)
//     req.login(user, (err)=>{
//       return res.status(201).json(user)
//     })
//   })(req.res.next)
// })

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failure) => {
    if (err) return res.status(500).json({err})
    if (!user) res.status(404).json({failure})
    req.login(user, (e) => {
      if (e) return res.status(500).json({e})
      res.status(200).json({user}) 
    })
  })(req, res, next)
})


//Profile
router.get('/profile', (req,res,next)=>{
  return res.status(201).json(req.user)
})

module.exports = router