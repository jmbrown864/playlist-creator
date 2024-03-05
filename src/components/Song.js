import React from 'react'

export default function Song() {
    return (
        <div class="text-gray-700 bg-slate-200 rounded shadow mb-4 relative">
            <div class="pl-4 pt-2 pb-2">
                <span class="font-bold">Song Title</span>
                <span class="block text-sm">Artist</span>
            </div>
            <div class="bg-gray-100 mt-2 mb-2 w-10 rounded-full flex justify-center absolute inset-y-0.5 right-4">
                <svg class="w-9" data-slot="icon" fill="none" stroke-width="1" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                </svg>
            </div>
        </div>
  )
}
