const exp = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    dotenv = require('dotenv'),
    bodyParser = require('body-parser'),
    { success, error } = require('consola'),
    app = exp()

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 5000
const DB = process.env.DB
// const db = require('./models/key').MongoURI
// Database connection
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { success({ message: `Connected to the database mongodb`, badge: true }) })
    .catch(err => { console.log(err) })

// Cors
app.use(cors())
app.use(exp.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
let title = 'Grace'
const errors = []
const Student = require('./models/Students')

app.get('/', (req, res) => {
    res.render('index', { title })
})
app.get('/users', (req, res) => {
    Student.find({}, (err, cb) => {
        if (err) throw err
        res.json(cb)
    })
})
app.get('/users/:text', (req, res) => {
    let id = req.params.text
    res.send(id)
})
app.get('/edit/:_id', (req, res) => {
    let id = req.params._id

    title = 'Edit'
    res.render('edit', { title })
    Student.findById(id, (err, cb) => {
        if (err) throw err
        res.render('edit', { cb })
    })
})

// Add user
app.post('/add', (req, res) => {
    const { username, fullname, email, password } = req.body
    if (username === undefined || username === '') { errors.push({ message: "Username is required" }) }
    if (errors.length === 0) {
        const NewStudent = new Student({
            username, fullname, email, password
        })
        NewStudent.save()
            .then(student => {
                res.redirect('/')
            })
            .catch(err => console.log(err))
    } else {
        res.json("Wrong")
    }
})

app.listen(PORT, (err) => {
    if (err) error({ message: `Error ${err}`, badge: true })
    success({ message: `Server run on port ${PORT}`, badge: true })
})