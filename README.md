# Full stack project CRUD and graph using html with CSS valina

### This project is made or created to learn design using CSS and something about nodejs, javascript fetch method and mongodb

[x] [Ejs]("https://www.npmjs.com/ejs", "For the user interface you're seen")
[x] [HTML]("https://www.npmjs.com/ejs", "For the user interface you're seen")
[x] [CSS]("https://www.npmjs.com/ejs", "For the user interface you're seen")
[x] [javascript]("https://www.npmjs.com/express", "For the user interface you're seen")
[x] [axios]("https://www.npmjs.com/express", "For the user interface you're seen")
[Express]("https://www.npmjs.com/express", "For the user interface you're seen")
[Bootstrap]("https://www.npmjs.com/bootstrap", "For the user interface you're seen")

```ts
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Users from "./routers/User.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "./config.env" });

const app = express();

const PORT = process.env.PORT || 7000;

const DB = process.env.DB;
```

---

# For [Javascript]("w3schools.com", "Javascript") click here

# To Fetch data using Javascript

```ts
function Fetch() {
  await fetch("http://localhost:7000/fetch")
    .then((res) => {
      res.json().then((data) => {
        // console.log(data)
        if (data.length > 0) {
          output += `
                            <div class="row">
                                <div class="col-md-12">
                                    <form>
                                        <input 
                                        type="text"
                                        class="form-control" 
                                        name="search" id="search" placeholder="Search..."/>
                                    </form>
                                </div>
                            `;
          data.forEach((item) => {
            output += `
                            <div class="col-md-6 p-1">
                                <div class="card card-body">
                                    <p>Username: ${item.username}</p>
                                    <p>Fullname: ${item.username}</p>
                                </div>
                            </div>
                            `;
          });
          output += "</div>";
        } else {
          output = `<div class="card card-body">
                                <div class="alert alert-danger">
                                    <p>There is no data registered</p>
                                </div>
                            </div>`;
        }
        document.getElementById("result").innerHTML = output;
      });
    })
    .catch((e) => console.log(e));

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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    />
    <link
      rel="shortcut icon"
      href="https://avatars.githubusercontent.com/u/58594917?v=4"
      type="image/x-icon"
    />
    <title>Try</title>
  </head>

  <body>
    <div class="row justify-content-center my-2" id="result"></div>
  </body>
</html>
```

```javascript
function Select() {
  let output = "";
  fetch("http://localhost:7000/users")
    .then((res) =>
      res.json().then((data) => {
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
                            `;
          });
        } else {
          output =
            "<p class='alert alert-danger'>There is no data registered</p>";
        }
        document.getElementById("result").innerHTML = output;
      })
    )
    .catch((err) => console.log(err));
}
```

# Thank you... If you find an error please tell me

## Issues
