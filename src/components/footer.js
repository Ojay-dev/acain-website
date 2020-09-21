import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"
import logo from "../svgs/logo-header.svg"

export default () => {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="logo" />
      <div>Association of Children’s Authors and Illustrators of Nigeria</div>

      <div>Copyright © 2020 ACAIN. All Rights Reserved.</div>
      <h5>Follow us on Social Media</h5>
    </div>
  )
}
