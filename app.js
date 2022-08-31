var current_song = null
download({ search: "*" })
var audio = null
$("#clear-btn").click(function(e) {
    $("#search").val("");
    download({ search: "*" })
    e.preventDefault();
});
$("#search-btn").click(function(e) {
    const value = $("#search").val().trim().toLocaleLowerCase();
    const data = {
        search: value
    }
    if (value.trim().length != 0) {
        download(data)
    }
    e.preventDefault();

});
$("#search").keydown(function(e) {
    const value = $("#search").val().trim().toLocaleLowerCase();
    const data = {
        search: value
    }
    if (e.keyCode == 13) {
        download(data)
    }
});
const _search_box = document.querySelector("#search")

if (_search_box) _search_box.addEventListener("input", () => {
    const value = $("#search").val().trim().toLocaleLowerCase();
    const data = {
        search: value
    }
    if (value.trim().length < 1) {
        download({ search: "*" })
    } else {
        download(data)
    }
})


function download(data) {
    const { search } = data
    if (window.innerWidth <= 576)
        $("#searc-result").html(`
              <div class="d-flex justify-content-center">
              <div class="spinner-border text-danger" role="status">
             </div>
              </div>
            `)
    var value = null

    fetch(`/search/${search}`).then(res => {
            if (res.ok) {
                return res.json()
            }
            length = 0
            $("#number").text(length);
            value = `<h1 class="text-center w-100 fw-bolder text-danger" >couldn,t find the song
              <span class="text-success">${search} </span> </h1>`
            return []
        }).then(data => {

            let length = 0
            const str = data.map(music => {
                ++length
                return `
            <div class=" row  align-items-center justify-content-between border py-1">
            <div class="artist-container col-7 col-sm-8 col-md-9 col-lg-9 ">
                <div class="fw-bold song-name overflow-hidden text-break">
                ${music}
                </div>
            </div>
           <div class="d-flex border border-light gap-1 col-5 col-sm-4 col-md-3 col-lg-3  align-items-center justify-content-center border ">
           <button  
            class="btn btn-secondary ps play-btn">play
            </button>
           <button type="button" class="btn btn-primary download-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
           download
           </button>
           </div>
        </div>
        `
            }).concat(`<div class="p-4 text-center
             d-flex justify-content-center align-items-center text-success fw-bolder ">${value?value:"<div> <a href='#top'>GO BACK TO TOP</a> </div>"}</div>
            `).join("")
            if (str) {

                $("#number").text(length);
                $("#searc-result").html(str).removeClass("text-danger")
                const allbtns = [...document.querySelectorAll(".play-btn")]
                allbtns.map(btn => {
                    const _text = btn.parentElement.previousElementSibling.children[0].textContent.trim()
                    if (current_song != null && current_song == _text) {
                        btn.textContent = "STOP"
                        $(btn).addClass("btn-danger")
                        $(btn).removeClass("btn-primary");
                        return
                    }

                })
                $(".download-btn").click(function(e) {
                    const songName = e.target.parentElement.parentElement.querySelector(".song-name").textContent.trim()
                    $("#song-title").text(songName);
                    e.preventDefault();
                });

            }

            $(".download-btn").click(function(e) {
                const songName = e.target.parentElement.parentElement.querySelector(".song-name").textContent.trim()
                $("#donwload_music").click(function(e) {
                    location.href = "/download/" + songName
                });
            });
            $(".play-btn").click(function(e) {
                if (e.target.textContent.trim() == "play") {
                    if (audio) {
                        audio.load()
                        clearInterval(timer)
                    }
                    const songName = String(e.target.parentElement.parentElement.querySelector(".song-name").textContent.trim())
                    fetch(`/music/play/${songName}`).then(res => {
                        if (res.ok) {
                            return res
                        }
                        alert("fail to play music " + songName)
                    }).then(data => {
                        current_song = songName
                        const allbtns = [...document.querySelectorAll(".play-btn")]
                        allbtns.map(btn => {
                            if (btn.textContent.trim() == "Stop") {
                                btn.textContent = "play"
                                $(btn).addClass("btn-primary")
                                $(btn).removeClass("btn-danger");
                            }
                        })
                        e.target.textContent = "Stop"
                        $(e.target).addClass("btn-danger")
                        $(e.target).removeClass("btn-primary");
                        const { url } = data
                        audio = new Audio(url)
                        const runner = document.getElementById("runner")
                        timer = setInterval(() => {
                            const a_l = audio.duration
                            var c_t = audio.currentTime
                            const percent = (c_t * 100) / a_l
                            runner.style.width = `${percent}%`
                            if (percent >= 99.99) {
                                runner.style.width = `${0}%`
                                e.target.textContent = "Play"
                                $(e.target).addClass("btn-primary").removeClass("btn-danger");
                                clearInterval(timer)
                            }
                        }, 200);
                        audio.play()
                    })
                } else {
                    audio.load()
                    e.target.textContent = "play"
                    $(e.target).addClass("btn-primary").removeClass("btn-danger");
                }
            });
        })
        .catch(err => {
            console.log("this is the error that led to failure ", err)
        })



}