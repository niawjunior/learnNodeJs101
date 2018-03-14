const MongoClient = require('mongodb').MongoClient
const argv = require('yargs').argv

MongoClient.connect('mongodb://localhost:27017', (err, dbclient) => {
  if (err) {
    throw err
  }
  const MYDIARY_DB = dbclient.db('MyDiary')
  const NOTES_COLLECTION = MYDIARY_DB.collection('niaw')
  if (argv._[0] === 'write' && argv.note !== undefined) {
    NOTES_COLLECTION.find({'date': new Date().toDateString()}).toArray((err, noteToday) => {
      if (err) throw err
      if (noteToday.length === 0) {
        NOTES_COLLECTION.insertOne({'date': new Date().toDateString(), 'note': argv.note}, (err, result) => {
          if (err) {
            return console.log('Error inserting note to database' + err)
          }
          console.log('Inserted document:' + JSON.stringify(result.ops))
        })
      } else {
        console.log('Note for today already exists... Updating it...')
        NOTES_COLLECTION.updateOne({'date': new Date().getDate}, {
          $set: {'note': noteToday[0].note + argv + noteToday}
        }, (err, status) => {
          if (err) throw err
          console.log('Matching record count:' + status.matchedCount)
          console.log('Updated record count:' + status.modifiedCount)
        })
      }
      dbclient.close()
      console.log('Found note: ' + JSON.stringify(noteToday, undefined, 2))
    })
  } else if (argv._[0] === 'delete' && argv.date !== undefined) {
    NOTES_COLLECTION.deleteOne({'date': argv.date}, (err, result) => {
      if (err) throw err
      console.log('Deleted Record Count:' + result.deletedCount)
      dbclient.close()
    })
  } else if (argv._[0] === 'view') {
    NOTES_COLLECTION.find({}).toArray((err, allNotes) => {
      if (err) {
        dbclient.close()
        return console.log(err)
      }
      console.log(allNotes)
      dbclient.close()
    })
  } else {
    console.log('Unknow command')
  }
})
