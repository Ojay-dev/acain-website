import React from "react"
import styles from "./sign-in.module.scss"
import logo from "../svgs/logo-header.svg"

export default function () {
  return (
    <div className={styles.login}>
      <div>
        <img src={logo} alt="logo" />
        <h2 className={styles.login__title}>Sign In</h2>
      </div>

      <form className={styles.login__form}>
        <div className={styles.login__row}>
          <label htmlFor="email" className={styles.login__label}>
            Email
          </label>
          <input type="text" name="email" placeholder="abc@xyz.com" className={styles.login__input} />
        </div>

        <div className={styles.login__row}>
          <label htmlFor="password" className={styles.login__label}>
            Password
          </label>
          <input type="text" name="password" placeholder="Password" className={styles.login__input} />
        </div>

        <span className={styles.login__subtext}>
          Not yet a member?{" "}
          <a href="#" className={styles.login__link}>
            Join
          </a>
        </span>

        <div className={styles.login__submitDiv}><input type="submit" value="Sign in" className={styles.login__submit} /></div>
      </form>
    </div>
  )
}
