const songsContaner = document.querySelector(".tracks-list")
const statesContaner = document.querySelector(".stats")
async function fetchData() {
    const res1 = await fetch("https://kitek.ktkv.dev/songs.json")
    const res2 = await res1.json()

    for (let i = 0; i < res2.length; i++) {
        const song = res2[i].track
        const ListArt = song.album.artists
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

        
    }
}
fetchData()