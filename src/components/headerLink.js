import React from "react"
import { Link } from "gatsby"

import styles from "./headerLink.module.scss"

function HeaderLink({ navItem }) {
  return (
    <li className={styles.navDesktop__item}>
      <Link
        to={navItem.to}
        className={`${styles.navDesktop__link} ${styles.navDesktop__hover}`}
        activeClassName={styles.active}
      >
        {navItem.text}
      </Link>
    </li>
  )
}

export default HeaderLink
