const exp = require('express')

const router = exp.Router()
const title = 'Mr. BISIMWA'

const Student = require('../models/Students')

router.get('/', (req, res) => {
    Student.find({}, async (err, users) => {
        if (err) throw err
        await res.render('student', { title, users })
    })
})

router.get('/register', (req, res) => {
    res.render('register', { title })
})
module.exports = router