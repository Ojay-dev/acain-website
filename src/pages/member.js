import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
// import Profile from "../components/profile"
// import Login from "../components/sign-in"

const App = () => (
  <Layout>
    <Router>
      {/* <Profile path="/member/profile" /> */}
      {/* <Login path="/member/login" /> */}
    </Router>
  </Layout>
)

export default App
