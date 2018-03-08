const express = require('express')
const app = express()
app.use(express.static('web'))
app.get('/', (req, res) => {
  res.send('index.html')
})
app.post('/welcome', (req, res) => {
  res.send('You called POST')
})
app.listen(3000)
