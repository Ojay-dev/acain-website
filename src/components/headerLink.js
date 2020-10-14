import React from "react"
import { Link } from "gatsby"

import styles from "./headerLink.module.scss"

function HeaderLink({ navItem }) {
  return (
    <div className={styles.navDesktop}>
      <li className={styles.navDesktop__item}>
        <Link
          to={navItem.to}
          className={`${styles.navDesktop__link} ${styles.navDesktop__hover}`}
          activeClassName={styles.active}
        >
          {navItem.text}{" "}
          {navItem.dropdown ? (
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: 2 }}
            >
              <path d="M6.9125 3.4563L5 5.36463L3.0875 3.4563L2.5 4.0438L5 6.5438L7.5 4.0438L6.9125 3.4563Z" />
            </svg>
          ) : null}
        </Link>
      </li>
      {navItem.dropdown ? (
        <div className={styles.navDesktop__dropdownContent}>
          {navItem.dropdownMenu.map((submenu, idx) => {
            return (
              <Link
                to={`/${submenu.toLowerCase().split(" ").join("-")}`}
                className={styles.navDesktop__dropdownLink}
                key={idx}
              >
                {submenu}
              </Link>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default HeaderLink
