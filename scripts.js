const songsContaner = document.querySelector(".tracks-list")
//const statesContaner = document.querySelector(".stats")
const artistsCon = document.querySelectorAll(".artists")
async function fetchData() {
    const res1 = await fetch("https://kitek.ktkv.dev/songs.json")
    const res2 = await res1.json()

    for (let i = 0; i < res2.length; i++) {
        const songsDiv = document.createElement("div")
        songsDiv.classList.add("song")
        const spanSongs = document.createElement("h5")
        const authorSongs = document.createElement("span")
        spanSongs.textContent = res2[i].track.name
        authorSongs.textContent = res2[i].track.album.artists.name;
        
        songsDiv.appendChild(spanSongs)
        songsDiv.appendChild(authorSongs)
        songsContaner.appendChild(songsDiv)

    }

}
fetchData()