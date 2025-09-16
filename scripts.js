const songsContaner = document.querySelector(".tracks-list")
const statesContaner = document.querySelector(".stats")
const timeContaner = document.querySelector(".duration")
async function fetchData() {
    const res1 = await fetch("https://kitek.ktkv.dev/songs.json")
    const res2 = await res1.json()

    let runtime = 0
    for (let i = 0; i < res2.length; i++) {
        const song = res2[i].track
        runtime += song.album.duration_ms;
        const ListArt = song.artists
        const songsDiv = document.createElement("div")
        songsDiv.classList.add("song")
        const spanSongs = document.createElement("h3")
        spanSongs.textContent = song.name
        songsDiv.appendChild(spanSongs)

        const authorSongs = document.createElement("span")
        const authorNames = ListArt.map(artist => artist.name)
        authorSongs.textContent = authorNames
        songsDiv.appendChild(authorSongs)


        const albumSongs = document.createElement("h5")
        albumSongs.textContent = song.album.name
        songsDiv.appendChild(albumSongs)
        songsContaner.appendChild(songsDiv)

        const timeSong = document.createElement("div")
        timeSong.classList.add("time")
        const time = document.createElement("h3")
        time.textContent = song.duration_ms;
        timeSong.appendChild(time)
    }
    console.log(runtime);
    const string = document.createElement("div")
    string.classList.add("stat")
    string.textContent = "Треков: " + res2.length;
    statesContaner.appendChild(string);

}
fetchData()