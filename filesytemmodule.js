const fs = require("fs")
fs.writeFile("examole.txt", "this is an example", (err) => {
    if (err) console.log(err)
    else
        console.log("file successful created !!")
    fs.readFile("examole.txt", "utf8", (err, file) => {
        if (err)
            console.log(err)
        else
            console.log(file)
    })
})
fs.rename("example.txt", "example2.txt", (err) => {
    if (err)
        console.log(err)
    else
        console.log("successfully rename the file")
})
fs.unlink("example2.txt", (err) => {
    if (err)
        console.log(err)
    else
        console.log("successfully delete the file from the system")
})