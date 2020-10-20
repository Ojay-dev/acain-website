import React from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import { getUser, isLoggedIn } from "../services/auth"
import PrivateRoute from "../components/privateRoute"
import Layout from "../components/layout"
import Profile from "../components/profile"
// import Login from "../components/login"

const App = ({ location }) => {
  if (isLoggedIn() && !getUser().lastPayment) {
    debugger
    navigate("/welcome")
  }

  if (location.pathname === "/app") {
    navigate("/")
  }

  return (
    <Layout>
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        {/* <Login path="/app/login" /> */}
      </Router>
    </Layout>
  )
}

export default App
