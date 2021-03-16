import React, { useState, useEffect } from 'react'
import axios from '../networks/axios'
import requests from '../requests/requests'

function Banner() {
    let [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])

            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }

        // console.log(movie)

        fetchData()
    }, [])

    // console.log(movie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str
    }

    return (
        <div>

            <header className="banner"
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            >
                <div className="banner-contents">
                    <h2>{movie?.name || movie?.title || movie?.original_name}</h2>
                    <div className="buttons">
                        <button className="btn mr-4">Play</button>
                        <button className="btn mr-4">My List</button>
                    </div>
                    <p>{truncate(movie?.overview, 200)}</p>
                </div>

                <div className="banner_fade" />
            </header>
        </div>
    )
}

export default Banner
