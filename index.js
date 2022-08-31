const express = require("express")
const app = express()
const path = require("path")
app.use(express.json())
const cors = require("cors")
const downloadRouter = require("./routes/download")
const playRouter = require("./routes/playmusic")
app.use(cors())
const abs_path = path.join(__dirname)
app.use("/", express.static(abs_path))
const port = process.env.PORT || 8080

app.use("/", downloadRouter)
app.use("/", playRouter)
app.use((req, res, next) => {
    res.send(`unknown route `)
})
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(500).json({ msg: "something went wrong" })
})
const start = () => {
    app.listen(port, () => {
        console.log("app is running on port " + port)
    })
}
start()