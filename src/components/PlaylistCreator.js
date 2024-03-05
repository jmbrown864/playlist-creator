import React from 'react'
import SearchBar from './Search'
import Song from './Song'
import SearchResults from './SearchResults'
import Playlist from './Playlist'

export default function PlaylistCreator() {
    return (
        <div>
            <SearchBar/>
            <div class="w-full p-2 grid md:grid-cols-2 sm:gap-2 md:gap-10">
                <SearchResults/>
                <Playlist/>
            </div>
        </div>
    )
}
