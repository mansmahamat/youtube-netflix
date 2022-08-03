import React from "react"
import "./MovieSection.css"

function MovieSection({ title, items }) {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="movieRow--right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results?.length > 0 &&
            items.results.map((item, key) => (
              <div className="movieRow--item" key={key}>
                <img
                  alt={item.original_title}
                  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MovieSection
