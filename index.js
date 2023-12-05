const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/crud")

app.get('/', (req, res) =>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.post('/createUsers',(req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json)
})

app.listen(3001, () => {
    console.log('server is running')
})