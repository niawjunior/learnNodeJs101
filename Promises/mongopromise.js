const MongoClient = require('mongodb').MongoClient
var connectionPromise = MongoClient.connect('mongodb://localhost:27017')
connectionPromise.then(dbclient => {
  const dbTest = dbclient.db('test')
  console.log('Connected successfully to database: ', dbTest.databaseName)
  dbTest.stats().then(stats => {
    console.log('DB Stats: ', JSON.stringify(stats, undefined, 2))
    dbclient.close()
  })
}).catch(err => {
  console.log(err)
})
