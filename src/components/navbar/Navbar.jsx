import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import React, { useState } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }
  return (
    <>
      <div className={isScrolled ? "navbar scrolled " : "navbar"}>
        <div className="container">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
              alt=""
            />
            <span>Homepage</span>

            <span>Series</span>

            <span>Movies</span>

            <span>New and Popular</span>

            <span>My List</span>
          </div>
          <div className="right">
            <Search className="icon" />
            <span>KID</span>
            <Notifications className="icon" />
            <img
              src="https://p.kindpng.com/picc/s/78-786085_robot-01-icon-robot-free-icon-hd-png.png"
              alt=""
            /> 
            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar