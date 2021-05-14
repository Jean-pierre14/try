const exp = require('express'),
    cors = require('cors'),
    dotenv = require('dotenv'),
    bodyParser = require('body-parser'),
    { success, error } = require('consola'),
    app = exp()

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 5000
// const db = process.env.DB


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