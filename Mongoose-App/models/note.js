const mongoose = require('mongoose')
mongoose.Promise = global.Promise
var Schema = mongoose.Schema
var noteSchema = new Schema({
  date: {
    type: String,
    required: true,
    unique: true
  },
  note: {
    type: String,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})
var NoteModel = mongoose.model('note', noteSchema)
module.exports = NoteModel
