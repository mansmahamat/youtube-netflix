import React from "react"
import "./FeaturedMovie.css"

function FeaturedMovie({ films }) {
  console.log("FILM", films)

  let genres = []
  for (let genre of films.genres) {
    genres.push(genre.name)
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${films.backdrop_path})`,
        backgroundPosition: "center",
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{films.title}</div>
          <div className="featured--info">
            <div className="featured--points">
              {films.vote_average.toFixed(2)}
            </div>
            <div className="featured--year">{films.release_date}</div>
          </div>
          <div className="featured--description">{films.overview}</div>
          <div className="featured--button">
            <a href="/" className="featured--watchbutton">
              Lecture
            </a>
            <a href="/" className="featured--mylistbutton">
              + Ma Liste
            </a>
          </div>
          <div className="featured--genres">
            {" "}
            <strong>Genres</strong> : {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie
