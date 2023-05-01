import React, { useRef, useState } from "react"
import "./login.scss"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <Link to={"/Register"}>Sign up now.</Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot. <a href="#!">Learn More</a>
          </small>
        </form>
      </div>
    </div>
  )
}
