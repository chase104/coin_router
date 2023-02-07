const express = require('express')

const app = express()


// get requests from the frontend... then make call to a coin api
// then get data, send to frontend

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})