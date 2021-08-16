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

---
## To Fetch users using a javascript method
---
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/58594917?v=4" type="image/x-icon">
    <title>Try</title>
</head>

<body>
    <div class="row justify-content-center my-2" id="result"></div>
    </body>
</html>
```
```javascript
function Select() {
            let output = ''
            fetch('http://localhost:7000/users')
                .then(res => res.json().then((data) => {
                    if (data.length > 0) {
                        data.forEach((user) => {
                            output += `
                        <div class="col-md-4 my-1">
                            <div class="card shadow-sm">
                                <div class="card-header">
                                    ${user.username}
                                </div>
                                <div class="card-body">
                                    <p><b>Email: </b> ${user.email}</p>
                                    <a href="/get/${user._id}" class="btn btn-sm btn-warning">Ready more</a>
                                </div>
                                </div>
                            </div>
                            `
                        })
                    } else {
                        output = "<p class='alert alert-danger'>There is no data registered</p>"
                    }
                    document.getElementById('result').innerHTML = output
                }))
                .catch(err => console.log(err))
        }
```
