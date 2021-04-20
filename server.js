const exp = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    { success, error } = require('consola'),
    app = exp(),
    PORT = process.env.PORT || 7000

app.listen(PORT, (err) => {
    if (err) error({ message: `Error ${err}`, badge: true })
    success({ message: `Server run on port ${PORT}`, badge: true })
})