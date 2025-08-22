const express = require('express')
require('dotenv').config()
const animals = require('./db_services/animals.js')
const vegetables = require('./db_services/vegetables.js')

const app = express()

app.use(express.json())
app.use(express.static('dist'))

app.get('/api', (req, res) => {
  res.send('hello world')
})

app.get('/api/animals', (req, res) => {
  animals.selectAll()
    .then(result => res.json(result))
})

app.post('/api/animals', (req, res) => {
  animals.create(req.body)
    .then(result => result.rows[0])
    .then(result => res.send(result))
})

app.get('/api/vegetables', (req, res) => {
  vegetables.selectAll()
    .then(result => res.json(result))
})

app.post('/api/vegetables', (req, res) => {
  vegetables.create(req.body)
    .then(result => res.send(result))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)})