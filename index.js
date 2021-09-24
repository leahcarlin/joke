const express = require("express")

const app = express()

const page = `<html>
    <head>
        <title>Leah Carlin</title>
    </head>
    <h1>What do computers and air conditioners have in common?</h1>
    <p>They both become useless when you open windows</p>

</html>`

app.get("/", (req, res) => { res.send(page) } )

// use $PORT if it is defined
const port = process.env.PORT || 3000

app.listen(port, console.log(`Listening :${port}`))





