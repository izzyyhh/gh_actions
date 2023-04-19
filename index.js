import express from 'express'

console.log('hello izzy')

const server = express()

server.get('/', (req, res) => {
  res.send('POWER!')
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
  console.log(`server rennt auf ${PORT}.`)
})
