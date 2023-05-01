import React, { useRef, useState } from "react"
import "./register.scss"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleStart = () => {
    // @ts-ignore
    setEmail(emailRef.current.value)
  }
  const handleFinish = () => {
    // @ts-ignore
    setPassword(passwordRef.current.value)
  }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited Movies,TV shows and More..</h1>
        <h2>Watch anywhere, Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              placeholder="Enter your email..."
              // @ts-ignore
              ref={emailRef}
            />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="password"
              // @ts-ignore
              ref={passwordRef}
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
