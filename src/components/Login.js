import React, { useState, useEffect } from 'react'

export default function Login() {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const redirect_uri = 'http://127.0.0.1:3000/spotify/callback/'
    const auth_endpoint = 'https://accounts.spotify.com/authorize'
    const response_type = 'token'

    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
            setToken(token)
        }
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <div className='loginOut'>
            {!token
                ? <a href={`${auth_endpoint}?response_type=${response_type}&client_id=${encodeURIComponent(client_id)}&redirect_uri=${encodeURIComponent(redirect_uri)}`}>Login</a>
                : <a href="/" onClick={logout}>Logout</a>}
        </div>
    )
}
