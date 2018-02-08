const express = require('express')
const app = express()

const port = process.env.PORT || 4000

const listener = () => console.log(`listening on port ${port}`)

app.listen(port, listener)