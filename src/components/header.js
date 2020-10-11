import React, { useState } from "react"
import { Link } from "gatsby"
import MobileMenu from "./mobileMenu"
import HeaderLinkList from "./HeaderLinkList"
import { isLoggedIn, logout } from "../services/auth"
import { navigate } from "gatsby"
import styles from "./header.module.scss"
import logo from "../svgs/logo-header.svg"
import avatar from "../svgs/avatar.svg"
import expand from "../svgs/expand_more_24px.svg"

const nav = {
  home: { to: "/", text: "Home" },
  "about-us": { to: "/about-us", text: "About us" },
  Membership: {
    to: "#",
    text: "Membership",
    dropdown: true,
    dropdownMenu: ["Types of Membership", "Membership benefits"],
  },
  Publications: { to: "/publications", text: "Publications" },
  Directory: {
    to: "#",
    text: "Directory",
    dropdown: true,
    dropdownMenu: ["Members directory", "Professional directory"],
  },
  "News-&-Events": {
    to: "/akada-book-festival",
    text: "News & Events",
    dropdown: true,
    dropdownMenu: ["Ake Festival", "Akada Book Festival", "Gallery"],
  },
  Contact: { to: "/contact", text: "Contact" },
}

export default function () {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <nav className={styles.navDesktop}>
        <ul className={styles.navDesktop__menuNav}>
          <HeaderLinkList nav={nav} />
        </ul>
      </nav>

      {/* <div className={styles.authLink}>
        <Link to="/sign-in" className={styles.authLink__signin}>
          Sign in
        </Link>
        <Link to="/join" className={styles.authLink__join}>
          Join
        </Link>
      </div> */}
      <div className={styles.user}>
        <div className={styles.imageCropper}>
          <img src={avatar} alt="avatar" className={styles.user__image} />
        </div>
        <span className={styles.user__text}>Welcome Tonye !</span>
        <span>
          <img src={expand} alt="" />
        </span>

        <div className={styles.user__dropdown}>
          <ul className={styles.droplink}>
            <li className={styles.droplink__item}>
              <Link to="#" className={styles.droplink__link}>
                Profile
              </Link>
            </li>
            <li className={styles.droplink__item}>
              <Link to="#" className={styles.droplink__link}>
                Books
              </Link>
            </li>
            <li className={styles.droplink__item}>
              <Link
                to="/"
                className={styles.droplink__link}
                onClick={event => {
                  event.preventDefault()
                  logout(() => navigate(`/sign-in`))
                }}
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <MobileMenu />
    </header>
  )
}
