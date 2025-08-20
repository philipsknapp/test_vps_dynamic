const express = require('express')
require('dotenv').config()
const { selectAll } = require('./db_services/animals.js')

console.log(selectAll)

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/animals', (req, res) => {
  selectAll()
    .then(result => res.json(result))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)})