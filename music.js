const fs = require("fs")
const { join } = require("path")
const path_ = join(__dirname, "static")

try {
    const musics = fs.readdirSync(path_)
    module.exports = musics
} catch (err) {
    console.log(err)
}