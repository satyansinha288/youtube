// import Home from "./pages/home/Home"
// import Watch from "./pages/watch/Watch"
// import Register from "./pages/register/Register"
// import Login from "./pages/login/Login"

import "../src/app.scss"
import React from "react"
// import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import { BrowserRouter } from "react-router-dom"
import Register from "./pages/register/Register"
// import Register from "./pages/register/Register"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Register /> */}
      <Login />
    </BrowserRouter>
  )
}

export default App
