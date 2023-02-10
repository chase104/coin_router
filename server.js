const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')));

// get requests from the frontend... then make call to a coin api
// then get data, send to frontend

app.get("get_coin/:symbol", (req, res) => {
    
})

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
});