const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

app.listen(port, (req, res) => {
    console.log(`Server started on PORT: ${port}`)

})