# This project is made or created to learn design using CSS and something about nodjs and mongodb

[Ejs]("https://www.npmjs.com/ejs", "For the user interface you're seen")
[Express]("https://www.npmjs.com/express", "For the user interface you're seen")
[Bootstrap]("https://www.npmjs.com/bootstrap", "For the user interface you're seen")

```javascript
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
---
[Javascript]("w3schools.com", "Javascript")
# To Fetch data using Javascript 
```javascript
function Fetch() {
        await fetch('http://localhost:7000/fetch')
            .then(res => {
                res.json().then(data => {
                    // console.log(data)
                    if (data.length > 0) {
                        output += `
                            <div class="row">
                                <div class="col-md-12">
                                    <form>
                                        <input type="text" class="form-control" name="search" id="search" placeholder="Search..."/>
                                    </form>
                                </div>
                            `

                        data.forEach(item => {
                            output += `
                            <div class="col-md-6 p-1">
                                <div class="card card-body">
                                    <p>Username: ${item.username}</p>
                                    <p>Fullname: ${item.username}</p>
                                </div>
                            </div>
                            `
                        })
                        output += '</div>'
                    } else {
                        output = `<div class="card card-body">
                                <div class="alert alert-danger">
                                    <p>There is no data registered</p>
                                </div>
                            </div>`
                    }
                    document.getElementById('result').innerHTML = output
                })
            })
            .catch(e => console.log(e))

        // return console.log('Cool')
    }
```
