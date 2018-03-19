const mongoose = require('mongoose')
mongoose.Promise = global.Promise

var db = require('./db/mongoose')
var NoteModel = require('./models/note')

var note = new NoteModel({
  date: new Date().toDateString(),
  note: 'Learning Mongoose Today2'
})
note.save()
  .then(result => {
    console.log(result)
    mongoose.connection.close(() => {
      console.log('connection close')
    })
  })
  .catch(err => {
    console.log('error' + err)
    mongoose.connection.close(() => {
      console.log('connection close')
    })
  })
NoteModel.find({})
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.log(err)
  })
NoteModel.findById('5aae4c1fa38fa0477cd3cdfd')
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.log(err)
  })
