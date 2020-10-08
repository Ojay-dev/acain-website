import React from "react"
import Layout from "../components/layout"
import styles from "./404.module.scss"

import not_found from "../svgs/undraw_not_found.svg"

export default function () {
  return <Layout>
    <div className={styles.notFound}>
      <h2 className={styles.notFound__text}>404</h2>
      <p className={styles.notFound__subtext}>Page not found!</p>

      <img src={not_found} alt="pasture icon" className={styles.notFound__image}/>
    </div>
  </Layout>
}
