const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send({ name: 'niaw', age: 20 })
  res.send('Hello Express')
})
app.listen(3000)
