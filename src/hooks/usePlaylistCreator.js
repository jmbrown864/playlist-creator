import { useState, useEffect } from "react"

const usePlaylistCreator = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [suggestedSongs, setSuggestedSongs] = useState()

    const handleSearch = (event) => {
        event.preventDefault()

        console.log("Search + " + searchQuery)

        fetch('http://localhost:3001/songs')
            .then(res => res.json())
            .then(json => {
                let songs = json.filter(song => song.genre === searchQuery)
                setSuggestedSongs(songs)
            })
            .catch(error => console.log(error))
    }

    // useEffect(() => {
    //     console.log(suggestedSongs);
    //   }, [suggestedSongs]);

    return { setSearchQuery, handleSearch, suggestedSongs }
}

export default usePlaylistCreator