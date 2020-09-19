import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"
import logo from "../svgs/logo-header.svg"

const nav = {
  home: { to: "/", text: "Home" },
  "about-us": { to: "/about-us", text: "About us" },
  Membership: { to: "/membership", text: "Membership" },
  Publications: { to: "/publications", text: "Publications" },
  Directory: { to: "/mirectory", text: "Directory" },
  "News-&-Events": { to: "/News-&-Events", text: "News & Events" },
  Contact: { to: "/contact", text: "Contact" },
}

const HeaderLink = props => (
  <li className={styles.navmenu__item}>
    <Link
      to={props.to}
      className={`${styles.navmenu__link} ${styles.navmenu__hover}`}
      activeClassName={styles.active}
    >
      {props.text}
    </Link>
  </li>
)

export default () => {
  const [showMenu, setShowMenu] = useState(false)

  const onBurgerTap = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <nav className={`${styles.navmenu} ${showMenu ? "" : styles.hide}`}>
        <ul className={styles.navmenu__navlink}>
          {Object.values(nav).map((menu, idx) => (
            <HeaderLink to={menu.to} text={menu.text} key={idx} />
          ))}
        </ul>
      </nav>

      <nav>
        <ul className={styles.navmenu__authlink}>
          <li className={styles.navmenu__item}>
            <Link to="/" className={styles.navmenu__authenlink}>
              Log in
            </Link>
          </li>
          <li className={styles.navmenu__item}>
            <Link
              to="/"
              className={`${styles.navmenu__authenlink} ${styles.navmenu__join}`}
            >
              Join
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={styles.menuBtn}
        onClick={onBurgerTap}
        onKeyDown={onBurgerTap}
        role="button"
        tabIndex="0"
      >
        <span
          className={`${styles.menuBtn__burger} ${
            showMenu ? styles.menuBtn__burger__open : ""
          }`}
        ></span>
      </div>
    </header>
  )
}
