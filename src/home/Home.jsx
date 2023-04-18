// import "../components/navbar/navbar.scss"
import React from "react"
import Navbar from "../components/navbar/Navbar"
import "./home.scss"
import Featured from "../components/featured/Featured"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        width="100%"
        src="https://wallpapercave.com/wp/wp6794197.jpg"
        alt=""
      />
      <Featured />
    </div>
  )
}

export default Home
