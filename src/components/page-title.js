import React from "react"
import styles from "./page-title.module.scss"

export default ({ children }) => {
  return (
    <div className={styles.pageTitle}>
      <h2 className={styles.pageTitle__text}>{children}</h2>
      <div className={styles.pageTitle__subtext}>
        Home/
        <span className={styles.pageTitle__span}>
          {children.split(" ").join("-")}
        </span>
      </div>
    </div>
  )
}
