const express = require("express")

const app = express()

const page = `<html>
    <head>
        <title>Leah Carlin</title>
    </head>
    <h1>Why do comedians love !false?</h1>
    <p>It's funny because it's true.</p>

</html>`

app.get("/", (req, res) => { res.send(page) } )

// use $PORT if it is defined
const port = process.env.PORT || 3000

app.listen(port, console.log(`Listening :${port}`))





