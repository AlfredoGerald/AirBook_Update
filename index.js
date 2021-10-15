const express = require('express')
const user = require('./router/user')
const auth = require('./router/auth')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost:27017/AirBook',{ 
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.set('view engine', 'ejs')

app.use("/assets", express.static('./assets'));

// Buat baca Body di dalam req
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.render('login')
})

app.use('/home', user)
app.use('/user', auth)

app.listen(5000)