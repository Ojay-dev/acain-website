import React from "react"
import { Link } from "gatsby"
import styles from "./sign-in.module.scss"

import { FormTitle, Input, SubmitInput as Submit } from "../components/input"

export default function () {
  return (
    <div className={styles.login}>
      <FormTitle title="Sign In" />

      <form className={styles.login__form}>
        <div className={styles.login__row}>
          <Input label="Email" placeholder="abc@xyz.com" type="text"/>
        </div>

        <div className={styles.login__row}>
          <Input label="Password" placeholder="Password"  type="password"/>
        </div>

        <span className={styles.login__subtext}>
          Not yet a member?{" "}
          <Link to="/join" className={styles.login__link}>
            Join
          </Link>
        </span>

        <Submit value="Sign in" />
      </form>
    </div>
  )
}
