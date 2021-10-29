const express = require('express')
const {MemoryStore} = require('express-session')
const session = require('express-session')
const multer = require('multer')
const user = require('./router/user')
const auth = require('./router/auth')
const book = require('./router/book')
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

const sessionStorage = new MemoryStore()

app.use(session({
    name: 'sessionid',
    secret: 'secret123',
    store: sessionStorage,
    saveUninitialized: false,
    resave: false,
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000*60
    }
}))

app.get('/cookies', (req, res) => {
    if (req.session.views){
        req.session.views++
        res.send('session increment')
    } else{
        req.session.views = 1
        res.send('welcome to session')
    }
})

app.get('/cek', (req, res, next) => {
    sessionStorage.all((err, obj) => {
        if(err){
            next(err)
        }
        console.log(obj)
        res.send(obj)
    })
})

app.get('/', (req,res)=>{
    res.render('login')
})

const filestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "filebooks");
    },
    filename: (req, file, cb) =>{
        cb(null, new Date().toString() + '-' + file.originalname)
    }
})

app.use('/home', user)
app.use('/user', auth)
app.use('/upload', book)
app.use(multer({storage: filestorage}).single('files'))

app.listen(5000)