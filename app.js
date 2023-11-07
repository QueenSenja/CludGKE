'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('NAMA:Apriatiara NIM:51022018 SISTEM INFORMASI')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
