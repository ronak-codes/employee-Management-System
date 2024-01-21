const express = require("express");
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cors =require("cors")
const Router =require("./Routes/routes.js")
const Connection = require("./database/connection.js")

const app = express();
dotenv.config()
const PORT  = process.env.PORT || 8000
const USERNAME = process.env.DATABASE_USERNAME
const PASSWORD = process.env.DATABASE_PASSWORD

app.use(cors())
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",Router)

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });

app.listen(PORT,() =>{
    console.log(`Server is running on port number ${PORT}`)
})

Connection(USERNAME,PASSWORD);

module.exports = app


