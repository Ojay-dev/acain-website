import React, { useEffect } from "react"
import Header from "./header"
import Footer from "./footer"

import AOS from "aos"
import "aos/dist/aos.css"

export default ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    }
  })

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
