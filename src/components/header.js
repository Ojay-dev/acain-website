import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"
import logo from "../svgs/logo-header.svg"

const nav = {
  home: { to: "/", text: "Home" },
  "about-us": { to: "/", text: "About us" },
  Membership: { to: "/quick-poll", text: "Membership" },
  Publications: { to: "/suggest", text: "Publications" },
  Directory: { to: "/suggest", text: "Directory" },
  "News-&-Events": { to: "/suggest", text: "News & Events" },
  Contact: { to: "/sign-in", text: "Contact" },
}

const HeaderLink = props => (
  <li className={styles.navmenu__item}>
    <Link to={props.to} className={styles.navmenu__link}>{props.text}</Link>
  </li>
)

export default () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <nav className={styles.navmenu}>
        <ul className={styles.navmenu__navlink}>
          {Object.values(nav).map((menu, idx) => (
            <HeaderLink to={menu.to} text={menu.text} key={idx} />
          ))}
        </ul>
      </nav>

      <nav>
      <ul className={styles.navmenu__authlink}>
          <li className={styles.navmenu__item}>
            <Link to="/" className={styles.navmenu__link}>Log in</Link>
          </li>
          <li className={styles.navmenu__item}>
            <Link to="/" className={`${styles.navmenu__link} ${styles.navmenu__join}`}>Join</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
