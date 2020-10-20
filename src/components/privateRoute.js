import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() ) {
    navigate("/sign-in")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute