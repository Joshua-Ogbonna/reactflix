import React, { useState, useEffect } from "react";
import axios from "../networks/axios";
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const imageBaseUrl = `https://image.tmdb.org/t/p/original/`;

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  function handleClick(movie) {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '', { id: true, multi: true})
        .then(url => {
          console.log(url)
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
        })
        .catch(error => console.log(error))
    }
  }

  return (
    <div className="container-fluid">
      <h2>{title}</h2>
      <div className="poster-row">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            src={`${imageBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            key={movie.id}
            className={`img-fluid row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId="{trailerUrl}" opts={opts} />}
    </div>
  );
}

export default Row;
