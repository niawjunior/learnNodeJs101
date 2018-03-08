const express = require('express')
const app = express()
app.use(express.static('web'))
app.get('/', (req, res) => {
  res.send('index.html')
})
var customerList = {
  cust1: {'name': 'Cust1', 'ID': '1'},
  cust2: {'name': 'Cust2', 'ID': '2'},
  cust3: {'name': 'Cust3', 'ID': '3'}
}
app.get('/customer/:customerId', (req, res) => {
  // res.send(req.params)

  var customerName
  for (let i in customerList) {
    if (customerList[i].ID === req.params.customerId) {
      customerName = customerList[i].name
    }
  }
  res.send('Customer ID:' + req.params.customerId + ' has a name: ' + customerName)
})

app.get('/customers', (req, res) => {
  res.send(customerList)
})

app.post('/welcome', (req, res) => {
  res.send('You called POST')
})
app.listen(3000)
