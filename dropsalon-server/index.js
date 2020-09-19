// Node modules
const express = require('express')
var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')
var validator = require("email-validator")
var jwt = require('jsonwebtoken')
var cors = require('cors')
// Server constants
const PORT = 4000
const app = express()
var db = new sqlite3.Database('./dropsalon.db')

// Configuration
app.use(express.json({type: "application/json"})) // for parsing application/json
app.use(cors())
// -- Endpoint handlers --
/*Rest Api Get Methods*/
app.get('/', function (req, res) {
    res.send('Test')
})
app.get('/user', function (req, res) {
    db.all("SELECT * FROM users;",function(err, row){
        if (err) {
            console.error(err.message)
            res.sendStatus(500)
        } else {
            if (row === []) {
                res.sendStatus(404)
            } else {
                console.log(row)
                res.status(200).send(row)
            }
        }
    })
})
app.get('/user/:userID', function (req, res) {
    db.get("SELECT name, last_name, created_at, email, role FROM users WHERE id = ?;", [req.params.userID] ,function(err, row){
        if (err) {
            console.error(err.message)
            res.sendStatus(500)
        } else {
            if (row === undefined) {
                res.sendStatus(404)
            } else {
                console.log(row)
                res.status(200).send({name: row.name, last_name: row.last_name, created_at: row.created_at ,email: row.email, role: row.role})
            }
        }
    })
})
app.get('/servivios', function (req, res) {
    res.send('Lista de servicios')
})

/*Rest Api Post Methods*/
app.post('/signup', function (req, res) {
    if (req.body.name === "" || req.body.last_name === "" || req.body.email === "" || req.body.password === "" || !validator.validate(req.body.email)) {
        res.sendStatus(400)
    } else {
        db.run(
            "INSERT INTO users (name, last_name, created_at, email, password, role) VALUES ($name, $last_name, CURRENT_TIMESTAMP, $email, $password, 3);",
            {
                $name: req.body.name,
                $last_name: req.body.last_name,
                $email: req.body.email,
                $password: md5(req.body.password)
            },
            function (err) {
                if (err) {
                    console.error(err.message)
                    res.sendStatus(500)
                } else {
                    console.log(this.lastID)
                    res.sendStatus(201)
                }
            }
        )
    }
})
app.post('/login', function (req, res) {
    if (req.body.email === "" || req.body.password === "") {
        res.status(400).send({error: 'Credential fields cannot be empty'})
    } else if (!validator.validate(req.body.email)) {
        res.status(400).send({error: 'Wrong email address format'})
    } else {
        db.get("SELECT name, last_name, email, password, role FROM users WHERE email = ?;", [req.body.email] ,function(err, row){
            if (err) {
                console.error(err.message)
                res.sendStatus(500)
            } else {
                if (row === undefined) {
                    res.status(400).send({error: 'Wrong credentials'})
                } else {
                    if (row.email === req.body.email && row.password === md5(req.body.password)) {
                        // Sign token and send
                        var token = jwt.sign({name: row.name , last_name: row.last_name, role: row.role}, 's3cr3t', {expiresIn: '1d'})
                        // Expires after 24 hours
                        res.status(200).cookie('jwt', token, { expires: new Date(Date.now() + 86,400,000), httpOnly: true }).send()
                    } else {
                        res.status(400).send({error: 'Wrong credentials'})
                    }
                }
            }
        })
    }
})
// -- End of Endpoint handlers --

// Server start
console.log('Running on port ' + PORT)
app.listen(PORT)

// To test on dev computer the address for the app
// localhost:#### or 127.0.0.1:####