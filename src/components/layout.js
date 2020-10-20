import React, { useEffect } from "react"
import { navigate } from "gatsby";
import {  getUser, isLoggedIn } from "../services/auth"
import Header from "./header"
import Footer from "./footer"

import AOS from "aos"
import "aos/dist/aos.css"

export default ({ children }) => {
  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //   })
  // }, [])

  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    }
  })

  if (isLoggedIn() && !getUser().lastPayment) {
    navigate("/welcome")
  }

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
