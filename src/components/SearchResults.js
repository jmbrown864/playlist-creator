import React from 'react'
import Song from './Song'

export default function SearchResults({ suggestedSongs }) {
    return (
        <div class="md:col-span-1">
            <h2 class="font-bold m-6 pb-2 border-b border-gray-200">Search Results</h2>

            <div class="m-6">
                {
                    suggestedSongs &&
                    suggestedSongs.map((song =>
                        <Song title={song.title} artist={song.artist} />
                    ))
                }
            </div>

        </div>
    )
}
