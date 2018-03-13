const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://localhost:27017', (err, dbclient) => {
  if (err) {
    throw err
  }
  const dbTest = dbclient.db('test')
  console.log('Connected successfully to the database' + dbTest.databaseName)
  dbTest.stats((e, result) => {
    console.log('DB State' + JSON.stringify(result, undefined, 2))
  })
  dbclient.close()
})
