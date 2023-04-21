// import "../components/navbar/navbar.scss"
import React from "react"
import Navbar from "../components/navbar/Navbar"
import "./home.scss"
import Featured from "../components/featured/Featured"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <Featured type={"series"} /> */}
      <Featured type={undefined} />
    </div>
  )
}

export default Home
