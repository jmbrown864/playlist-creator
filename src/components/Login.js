import React from 'react'

export default function Login() {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const redirect_uri = 'http://127.0.0.1:3000/spotify/callback/'
    const auth_endpoint = 'https://accounts.spotify.com/authorize'
    const response_type = 'token'

    return (
        <div className='login'>
            <a href={`${auth_endpoint}?response_type=${response_type}&client_id=${encodeURIComponent(client_id)}&redirect_uri=${encodeURIComponent(redirect_uri)}`}>Login</a>
        </div>
    )
}
