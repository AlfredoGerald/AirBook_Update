const express = require('express')
const book = require('./../Module/book')
const router = express.Router()

router.post('/uploadbook', (req, res) => {
    const body = {
        Title: req.body.Title,
        Author: req.body.Author,
        Description: req.body.Description,
        Type: req.body.Type,
        Genre: req.body.Genre
    }
    book.create(body)
    res.redirect('/home/Homepage')
})

module.exports = router
