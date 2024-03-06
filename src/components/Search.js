import React, { useState } from 'react'

export default function SearchBar({ setSearchQuery, handleSearch }) {

    return (
        <div className="search" class="flex justify-center p-4 mt-2">
            <form onSubmit={handleSearch}>
                <label>
                    <span class="block text-sm font-medium text-slate-700">Search for...</span>
                    <input
                        class="text-center text-sm placeholder-slate-400 rounded-md border border-slate-300 shadow-sm p-2 sm:pl-24 sm:pr-24 md:pl-48 md:pr-48 focus:outline-none focus:border-sky-500"
                        placeholder="Search for..."
                        onChange={(event) => setSearchQuery(event.target.value)}>
                    </input>
                </label>
            </form>
        </div>
    )
}
