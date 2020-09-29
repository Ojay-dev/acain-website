import React from "react"
import { Link } from "gatsby"
import { FormTitle, Input, SubmitInput as Submit } from "../components/input"
import styles from "./join.module.scss"

export default function () {
  return (
    <div className={styles.join}>
      <FormTitle title="Became a member" />

      <form className={styles.login__form}>
        <div className={styles.login__row}>
          <Input label="Email" placeholder="abc@xyz.com" />
        </div>

        <div className={styles.login__row}>
          <Input label="Password" placeholder="Password" />
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
