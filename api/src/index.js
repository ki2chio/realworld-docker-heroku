const express = require("express")
const cors = require("cors")
const {port} = require("./configuration")



const app = express()

app.use(cors())

app.get("/user", (req, res) => {
    const user = {name: "Alex", age: 40}
    res.json({
        response: true,
        user
    })
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})