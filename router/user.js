const express = require('express')
const user = require('./../Module/user')
const Book = require('./../Module/book')
const router = express.Router()

router.use("/assets", express.static('./assets'));

router.get('/Homepage', async(req, res)=> {
    const book = await Book.find().sort({name: 'desc'})
    res.render('Homepage',{
        book : book
    })
})

router.get('/MyFavorites',(req, res)=> {
    res.render('MyFavorites')
})

router.get('/AccountInfo',(req, res)=> {
    res.render('AccountInfo')
})

router.get('/BookPreview/:id', async(req, res)=> {
    const book = await Book.findById(req.params.id)
    res.render('BookPreview',{
        book : book
    })
})

router.get('/UploadBook',(req, res)=> {
    res.render('UploadBook')
})

router.get('/login',(req, res)=> {
    res.render('login')
})

router.get('/logout',(req, res)=> {
    req.session.destroy()
    res.render('login')
})

module.exports = router