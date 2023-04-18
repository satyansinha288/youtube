import React from "react"
import "./featured.scss"
import { BsFillPlayFill, BsFillInfoCircleFill } from "react-icons/bs"

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://wallpapercave.com/wp/wp6794197.jpg"
        alt=""
      />
      <div className="info">
        <img
          width="100%"
          src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          repellat accusamus nam illo minus, voluptatum maxime consequatur ullam
          ad porro exercitationem non ab necessitatibus eius enim sit, saepe
          odit cum.
        </span>

        <div className="buttons">
          <button className="play">
            <BsFillPlayFill />
            <span>Play</span>
          </button>

          <button className="more">
            <BsFillInfoCircleFill />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}
