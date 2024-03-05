import React from 'react'

export default function PlaylistCreator() {
    return (
        <div>

            <div className="search" class="flex justify-center p-4 mt-2"> {/* search box */}
                <form action="/">
                    <label>
                        <span class="block text-sm font-medium text-slate-700">Search for...</span>
                        <input class="text-center text-sm placeholder-slate-400 rounded-md border border-slate-300 shadow-sm p-2 sm:pl-24 sm:pr-24 md:pl-48 md:pr-48 focus:outline-none focus:border-sky-500" placeholder="Search for..."></input>
                    </label>
                </form>
            </div> { /* end search box */}

            <div class="w-full p-2 grid md:grid-cols-2 sm:gap-2 md:gap-10">

                <div class="md:col-span-1"> { /* search results */}
                    <h2 class="font-bold m-6 pb-2 border-b border-gray-200">Search Results</h2>

                    <div class="m-6"> { /* search results content */}

                        <div class="text-gray-700 bg-slate-200 rounded shadow-md mb-4 relative"> { /* search results item */}
                            <div class="pl-4 pt-2 pb-2">
                                <span class="font-bold">Song Title</span>
                                <span class="block text-sm">Artist</span>
                            </div>
                            <div class="bg-gray-100 mt-2 mb-2 w-10 rounded-full flex justify-center absolute inset-y-0.5 right-4">
                                <svg class="w-9" data-slot="icon" fill="none" stroke-width="1" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                                </svg>
                            </div>
                        </div> { /* end search result item */}

                        <div class="text-gray-700 bg-slate-200 rounded shadow-md mb-4 relative"> { /* search results item */}
                            <div class="pl-4 pt-2 pb-2">
                                <span class="font-bold">Song Title</span>
                                <span class="block text-sm">Artist</span>
                            </div>
                            <div class="bg-gray-100 mt-2 mb-2 w-10 rounded-full flex justify-center absolute inset-y-0.5 right-4">
                                <svg class="w-9" data-slot="icon" fill="none" stroke-width="1" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                                </svg>
                            </div>
                        </div> { /* end search result item */}

                    </div>

                </div> { /* end search results */}

                <div class="md:col-span-1"> { /* add to playlist */}
                    <h2 class="font-bold m-6 pb-2 border-b border-gray-200">Create Playlist</h2>
                </div> { /* end add to playlist */}

            </div>

        </div>
    )
}
