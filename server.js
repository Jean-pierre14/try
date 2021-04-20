const exp = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    { success, error } = require('consola'),
    app = exp(),
    PORT = process.env.PORT || 7000

app.use(cors())
app.use(exp.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.json("Welcome")
})
app.listen(PORT, (err) => {
    if (err) error({ message: `Error ${err}`, badge: true })
    success({ message: `Server run on port ${PORT}`, badge: true })
})