const fs = require("fs")
const basePath = "D:\download mp3"
directoryContent = fs.readdirSync(basePath);
let files = directoryContent.filter((filename) => {
    return fs.statSync(`${basePath}/${filename}`).isFile();
});
let sorted = files.sort((a, b) => {
    let aStat = fs.statSync(`${basePath}/${a}`),
        bStat = fs.statSync(`${basePath}/${a}`);
    return new Date(bStat.birthtime).getTime() - new Date(aStat.birthtime).getTime()

})

console.log(sorted)
    // const dir = "D:\download mp3";
    // fs.readdir(dir, function(err, files) {
    //         files = files.map(function(fileName) {
    //             return {
    //                 name: fileName,
    //                 time: fs.statSync(dir + "/" + fileName).mtime.getTime()
    //             };

//         }).sort(function(a, b) {
//             return b.time - a.time;
//         }).map(function(v) {
//             return v.name;
//         })
//     })
// console.log()