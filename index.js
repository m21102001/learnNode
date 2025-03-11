const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = "mongodb+srv://mohaedelfayoumy:node_123@learnmongodb.noidb.mongodb.net/courses?retryWrites=true&w=majority&appName=learnMongoDB"

// mongoose.connect(url).then(() => {
//     console.log("connected to database")
// })

app.use(express.json())


const { coursesRouter } = require('./routes/courses.route')

app.use('/api/courses', coursesRouter)

// app.listen(5000, () => {
    // })
    mongoose.connect(url)
      .then(() => {
        // listen for requests
        app.listen(5000, () => {
          console.log('connected to db & listening on port', 5000)
        })
      })
      .catch((error) => {
        console.log(error)
      })
