const express = require('express')
app = express()
const routes = require('./routes/routes')
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Hotelify app listening at http://localhost:${port}`)
})