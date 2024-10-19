const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const router = require('./routes/router.js')
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected to MongoDB')

    app.listen(process.env.PORT, () => {
      console.log(`Server started on PORT: ${process.env.PORT}`)
    })
  } catch (err) {
    console.log('Error connecting to MongoDB:', err)
  }
}

startServer()
