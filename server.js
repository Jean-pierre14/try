const exp = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    dotenv = require('dotenv'),
    bodyParser = require('body-parser'),
    { success, error } = require('consola'),
    app = exp()

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 5000
const key = process.env.DB
const db = require('./models/key').MongoURI
// Database connection
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { success({ message: `Connected to the database mongodb`, badge: true }) })
    .catch(err => { console.log(err) })

// Cors
app.use(cors())
app.use(exp.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
let title = 'Grace'

app.get('/', (req, res) => {
    res.render('index', { title })
})
app.get('/edit', (req, res) => {
    title = 'Edit'
    res.render('edit', { title })
})

app.listen(PORT, (err) => {
    if (err) error({ message: `Error ${err}`, badge: true })
    success({ message: `Server run on port ${PORT}`, badge: true })
})