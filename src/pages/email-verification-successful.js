import React from "react"
import Layout from "../components/layout"
import styles from "./email-verification-successful.module.scss"

import email_success from "../svgs/email-success.svg"

export default function () {
  return (
    <Layout>
      <div className={styles.verifySuccess}>
        <h3 className={styles.verifySuccess__title}>
          Your Email was successfully Verified!
        </h3>
        <img
          src={email_success}
          alt="people"
          className={styles.verifySuccess__image}
        />
        <span className={styles.verifySuccess__text}>
          Proceed to pay for your annual Associate membership fee
        </span>

        <a href="#" className={styles.verifySuccess__link}>Make payment</a>
      </div>
    </Layout>
  )
}
