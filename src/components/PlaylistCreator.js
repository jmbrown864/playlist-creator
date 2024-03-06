import React from 'react'
import SearchBar from './Search'
import SearchResults from './SearchResults'
import Playlist from './Playlist'
import usePlaylistCreator from '../hooks/usePlaylistCreator'

export default function PlaylistCreator() {
    const { setSearchQuery, handleSearch, suggestedSongs } = usePlaylistCreator()

    return (
        <div>
            <SearchBar setSearchQuery={setSearchQuery} handleSearch={handleSearch}/>
            <div class="w-full p-2 grid md:grid-cols-2 sm:gap-2 md:gap-10">
                <SearchResults suggestedSongs={suggestedSongs}/>
                <Playlist />
            </div>
        </div>
    )
}
