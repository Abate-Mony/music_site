const express = require("express")
const router = express.Router()
const musics = require("./../music.js")
const path = require("path")
const filepath = path.join(__dirname)
const path_ = path.resolve(filepath, "../static/")

router.get("/download/:name", (req, res, next) => {
    const { name } = req.params
    const playurl = path.join(path_, name)
    res.download(playurl, (err) => {
        if (err) {
            const error = new Error("Not Found")
            error.code = 404
            next(error)
        } else {
            console.log("send file to client !!")
        }
    })
})

router.get("/search/:search", (req, res) => {
    const { search } = req.params
    if (search.trim() == "*") {
        return res.status(200).send(musics.filter(music => music.includes(".mp3")))
    } else {
        const _music_to_find = musics.filter(music => music.toLowerCase().includes(search.toLowerCase()) && music.includes(".mp3"))
        if (_music_to_find.length < 1) {
            return res.status(404).json({ status: "bad request" })
        }
        res.status(200).send(_music_to_find)
    }
})

module.exports = router