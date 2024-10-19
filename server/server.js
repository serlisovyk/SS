const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const router = require('./routes/router.js')
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/', router)

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB')

    app.listen(port, () => {
      console.log(`Server started on PORT: ${port}`)
    })
  } catch (err) {
    console.log('Error connecting to MongoDB:', err)
  }
}

startServer()
