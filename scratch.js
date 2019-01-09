const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('dev'))
app.get('/', (req, res, next) => {
console.log('This is my first js app')
  next()
},function (req, res, next) {
    console.log('Request Type:', req.method);
    next()
  },
  function (req, res, next) {
    res['name'] = {age: 20, bio:"this is my bio"}
    res.json(res.name);
  })
const port = 3000
app.listen(port, () => {
  console.log('server running on port'+port)
})