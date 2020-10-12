import React from "react"
import { Link, navigate } from "gatsby"
import { logout } from "../services/auth"
import styles from "./welcome.module.scss"
import payment from "../svgs/payment.svg"

export default function () {
  return (
    <div className={styles.welcome}>
      <h2 className={styles.welcome__text}>Welcome, Alfred Chado.</h2>
      <p className={styles.welcome__subtext}>
        Proceed to pay your Associate membership fee of ₦5,000 before you can
        proceed with your account
      </p>

      <img src={payment} alt="pasture icon" className={styles.welcome__image} />

      <Link to="#" className={styles.welcome__paymentLink}>
        Make payment
      </Link>
      <Link
        to="#"
        className={styles.welcome__backLink}
        onClick={event => {
          event.preventDefault()
          logout(() => navigate(`/sign-in`))
        }}
      >
        Sign out
      </Link>
    </div>
  )
}
