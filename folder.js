const fs = require("fs")
fs.mkdir("tutorial", (err) => {
    if (err)
        console.log(err, "the was an error in the cause of creating the file")
    else
        console.log("folder created")
    fs.writeFile("./tutorial/exampleone.txt", "the file is the pathh and the name ", (err) => {
        if (err)
            console.log("err")
        else
            console.log("file created ")

    })
})
setTimeout(() => {
    fs.rmdir("tutorial", err => {
        if (err)
            console.log("failed")
        else
            console.log("deleted folder")
    })
}, 5000)