const express = require('express')
const User = require('./../Module/user')
const router = express.Router()

router.post('/createaccount', (req, res) => {
   const body = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Password: req.body.password,
        Email: req.body.email,
    }
    User.create(body)
    res.redirect('/')
})

router.post('/signin', async (req, res) => {
    const user = await User.findOne({ Email: req.body.email })
    if (!user || user.Password != req.body.password) {
        res.redirect('/')
    } else {
        res.redirect('/home/Homepage')
    }
})

module.exports = router
