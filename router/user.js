const express = require('express')
const user = require('./../Module/user')
const router = express.Router()

router.use("/assets", express.static('./assets'));

router.get('/Homepage',(req, res)=> {
    res.render('Homepage')
})

router.get('/MyFavorites',(req, res)=> {
    res.render('MyFavorites')
})

router.get('/AccountInfo',(req, res)=> {
    res.render('AccountInfo')
})

router.get('/BookPreview',(req, res)=> {
    res.render('BookPreview')
})

router.get('/UploadBook',(req, res)=> {
    res.render('UploadBook')
})

router.get('/login',(req, res)=> {
    res.render('login')
})

module.exports = router