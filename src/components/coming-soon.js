import React from "react"
import Layout from "./layout"
import styles from "./coming-soon.module.scss"

import coming_soon from "../svgs/coming-soon.svg"

export default function () {
  return (
    <Layout>
      <div className={styles.comingSoon}>
        <img
          src={coming_soon}
          alt="pasture icon"
          className={styles.comingSoon__image}
        />
        <p className={styles.comingSoon__subtext}>Coming Soon!</p>
      </div>
    </Layout>
  )
}
