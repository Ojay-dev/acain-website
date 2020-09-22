import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styles from "./akada-book-festival.module.scss"
import akada from "../images/akada-event.png"

export default function () {
  return <Layout>
    <div className={styles.banner}>
      <img src={akada} alt="akada event banner" className={styles.banner__image} />
    </div>

    <div className={styles.countdown}>
      <h3 className={styles.countdown__title}>Countdown to Akada Festival 2020</h3>
      <div className={styles.countdown__timersection}>
        <div className={styles.timer}>
          <div className={styles.timer__value}>43</div>
          <span className={styles.timer__subvalue}>Days</span>
        </div>
        
        <div className={styles.timer}>
          <div className={styles.timer__value}>07</div>
          <span className={styles.timer__subvalue}>Hours</span>
        </div>
        
        <div className={styles.timer}>
          <div className={styles.timer__value}>24</div>
          <span className={styles.timer__subvalue}>Minutes</span>
        </div>
        
        <div className={styles.timer}>
          <div className={styles.timer__value}>24</div>
          <span className={styles.timer__subvalue}>seconds</span>
        </div>
      </div>
    </div>
  </Layout>
}
