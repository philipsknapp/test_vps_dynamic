const mongoose = require('mongoose')
require('dotenv').config({path: '../.env'})

mongoose.set('strictQuery', false)

const vegetableSchema = new mongoose.Schema({
  name: String,
  flavor: String,
})

const Vegetable = mongoose.model('Vegetable', vegetableSchema)

async function selectAll() {
  await mongoose.connect(process.env.VEGETABLES_DB_URI)
  const allVegetables = await Vegetable.find({})
  mongoose.connection.close()
  return allVegetables
}

async function create(data) {
  await mongoose.connect(process.env.VEGETABLES_DB_URI)

  const vegetable = new Vegetable({
    name: data.name || "",
    flavor: data.flavor || ""
  })

  const result = await vegetable.save()

  mongoose.connection.close()
  return result
}

module.exports = { selectAll, create };
