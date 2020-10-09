import React, { useState } from "react"
import { Link } from "gatsby"
import MobileMenu from "./mobileMenu"
// import { isLoggedIn, logout } from "../services/auth"
// import { navigate } from "gatsby"
import styles from "./header.module.scss"
import logo from "../svgs/logo-header.svg"
import avatar from "../svgs/avatar.svg"
import expand from "../svgs/expand_more_24px.svg"

// const nav = {
//   home: { to: "/", text: "Home" },
//   "about-us": { to: "/about-us", text: "About us" },
//   Membership: {
//     to: "#",
//     text: "Membership",
//     dropdown: true,
//     dropdownMenu: ["Types of Membership", "Membership benefits"],
//   },
//   Publications: { to: "/publications", text: "Publications" },
//   Directory: {
//     to: "#",
//     text: "Directory",
//     dropdown: true,
//     dropdownMenu: ["Members directory", "Professional directory"],
//   },
//   "News-&-Events": {
//     to: "/akada-book-festival",
//     text: "News & Events",
//     dropdown: true,
//     dropdownMenu: ["Ake Festival", "Akada Book Festival", "Gallery"],
//   },
//   Contact: { to: "/contact", text: "Contact" },
// }

export default function () {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <nav className={styles.navDesktop}>
        <ul className={styles.navDesktop__menuNav}>
          <li className={styles.navDesktop__item}>
            <Link to="/" className={styles.navDesktop__link}>
              Home
            </Link>
          </li>
          <li className={styles.navDesktop__item}>
            <Link to="/" className={styles.navDesktop__link}>
              About
            </Link>
          </li>
          <li className={styles.navDesktop__item}>
            <Link to="/" className={styles.navDesktop__link}>
              Membership
            </Link>
          </li>
          <li className={styles.navDesktop__item}>
            <Link to="/" className={styles.navDesktop__link}>
              Publications
            </Link>
          </li>
          <li className={styles.navDesktop__item}>
            <Link to="/" className={styles.navDesktop__link}>
              Directory
            </Link>
          </li>
          <li className={styles.navDesktop__item}>
            <Link to="/" className={styles.navDesktop__link}>
              News & Event
            </Link>
          </li>
          <li className={styles.navDesktop__item}>
            <Link to="/" className={styles.navDesktop__link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.authLink}>
        <Link to="/" className={styles.authLink__signin}>
          Sign in
        </Link>
        <Link to="/" className={styles.authLink__join}>
          Join
        </Link>
      </div>

      <MobileMenu />
    </header>
  )
}
