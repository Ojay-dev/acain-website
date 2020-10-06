import React from "react"
import Layout from "../components/layout"
import styles from "./email-verification-error.module.scss"

import email_error from "../svgs/email-error.svg"

export default function () {
  return (
    <Layout>
      <div className={styles.verifyError}>
        <h3 className={styles.verifyError__title}>
          Oops! looks like something went wrong!
        </h3>
        <img
          src={email_error}
          alt="error"
          className={styles.verifyError__image}
        />
        <span className={styles.verifyError__text}>
          Click on this link to retry your Email verification
        </span>
        <a href="#" className={styles.verifyError__link}>
          Retry
        </a>
      </div>
    </Layout>
  )
}
