const mongoose = require('mongoose')
var Schema = mongoose.Schema
var moment = require('moment')
// create schema
var CustomerSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
    default: parseInt(moment(new Date()).format('mmssSSS'))
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    trim: true,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  update_timestamp: {
    type: Date,
    default: Date.now()
  }
})
// create model
var Customer = mongoose.model('Customer', CustomerSchema)
module.exports = Customer
