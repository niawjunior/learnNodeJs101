var promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('promise fulfilled')
  }, 1000)
})

const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return (a + b)
  } else {
    return 'Only numbers can be added'
  }
}

promise.then((message) => {
  console.log(message)
}).then(() => {
  console.log(add(2, 3))
}).then(() => {
  console.log('Completed my run')
}).catch((msg) => {
  console.log(msg)
})
