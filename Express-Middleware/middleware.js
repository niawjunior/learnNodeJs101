const express = require('express')
const app = express()
app.use('/welcome', (req, res, next) => {
  res.name = 'Niaw'
  next()
})
// app.get('/welcome/login', (req, res, next) => {
//   res.log = 'Logging'
//   next()
// }, (req, res, next) => {
//   res.auth = 'Authentication'
//   next()
// }, (req, res, next) => {
//   res.send(res.log + '   ' + res.auth)
// })
var logging = function (req, res, next) {
  res.log = 'logging'
  next()
}
var auth = function (req, res, next) {
  res.auth = 'auth'
  next()
}

app.use('/welcome/login', logging)
app.get('/welcome/login', auth, (req, res) => {
  res.send(res.log + '   ' + res.auth)
})

app.get('/', (req, res) => {
  res.send('Home Page ' + res.name)
})
app.get('/welcome', (req, res) => {
  res.send('Welcome ' + res.name)
})

app.listen('3000')
