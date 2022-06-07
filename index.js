const express = require('express')
const app = express()
const connection = require('./config/db.config')
const PORT = process.env.PORT || 5000

connection.on('open', () => {
    console.log('Second database connection passed')
})

connection.on('error', () => {
    console.log('Connection failed');
})

app.use(express.json({
    extended: false
}))

app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
