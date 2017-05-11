import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Counter from './components/Counter'

// init express
const app = express()
app.use(express.static("dist"))

// add top page routing
app.get('/', (req, res) => {
  res.render('index')
})

// start listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
