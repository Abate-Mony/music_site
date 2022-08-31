const searchContainer = document.getElementById("search")
const text = "Search a song e.g sheeran"
var i = 0
setInterval(() => {
    searchContainer.placeholder = text.slice(0, Math.abs(i))
    i > text.length - 1 ? i *= -1 : i += 1
}, 100)