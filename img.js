const fs = require("fs")
const path = require("path")
const basePath = path.join(__dirname, "img")
fs.readdir(basePath, (err, files) => {
    if (err) {
        throw new err
    } else {

        files.forEach(file => {
            console.log(file)
        })
    }
})