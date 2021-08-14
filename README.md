# This project is made or created to learn design using CSS and something about nodjs and mongodb

[Ejs]("https://www.npmjs.com/ejs", "For the user interface you're seen")
[Express]("https://www.npmjs.com/express", "For the user interface you're seen")
[Bootstrap]("https://www.npmjs.com/bootstrap", "For the user interface you're seen")

```node
const exp = require('expresss')
const cors = require('cors')

app.use(cors())
const app = exp()
const PORT = process.env.PORT || 3004

app.use('/', require('./router/'))
app.listen(PORT, (e)=>{
    if(e) throw e
    console.log(`Server run on PORT ${PORT}`)
})
```