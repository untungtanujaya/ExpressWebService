const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname + '/LogAct_Minggu1_Juan.pdf'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))