const express = require("express")
const { initError } = require("./../error-Handler/errorHandler")
const router = express.Router()
const path = require("path")
const filepath = path.join(__dirname)
const path_ = path.resolve(filepath, "../static/")

router.get("/music/play/:name", (req, res, next) => {
    const { name } = req.params
    return res.sendFile(path.join(path_, name), (err) => {
        if (err) {
            // const error = new Error("Not Found")
            // error.code = 404
            // next(error)
            const error = initError("not found ", 404)
            next(error)
        } else {
            console.log("send file to client !!")
        }
    })
})

module.exports = router