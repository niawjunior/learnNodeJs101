const http = require('http')
const fs = require('fs')
const log = require('./logger')

http.createServer((req, res) => {
  if (req.method === 'GET') {
    log('GET method called')
    // res.write('you called GET')
    // res.end()
    displayForm(res)
  } else if (req.method === 'POST') {
    log('POST method called')
    res.write('You called POST')
    res.end()
  }
}).listen(3000, () => {
  log('listening on port 3000')
})
const displayForm = (res) => {
  fs.readFile('web/index.html', (err, data) => {
    if (err) throw err
    res.writeHead(200, '{Content-Type="text/html"}')
    res.write(data)
    res.end('OK')
  })
}
