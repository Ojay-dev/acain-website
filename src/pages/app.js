import React from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import { getUser, isLoggedIn } from "../services/auth"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Welcome from "../components/welcome"

const App = ({ location }) => {
  if (isLoggedIn() && !getUser().lastPayment) {
    navigate("/app/welcome")
  }

  if (location.pathname === "/app") {
    navigate("/")
  }

  return (
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PrivateRoute path="/app/welcome" component={Welcome} />
        {/* <Login path="/app/login" /> */}
      </Router>
  )
}

export default App
