import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"
import logo from "../svgs/logo-header.svg"
// import expand from "../svgs/expand_more.svg"

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

const HeaderLink = props => {
  const [showDropdown, setShowDropdown] = useState(false)

  function showMobileDropdown() {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className={styles.navmenu__item} onClick={showMobileDropdown}>
      <li>
        <Link
          to={props.to}
          className={`${styles.navmenu__link} ${styles.navmenu__hover}`}
          activeClassName={styles.active}
        >
          {props.text}{" "}
          {props.dropdown ? (
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              // fill="none"
              className={styles.navmenu__icon}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.9125 3.4563L5 5.36463L3.0875 3.4563L2.5 4.0438L5 6.5438L7.5 4.0438L6.9125 3.4563Z" />
            </svg>
          ) : null}
        </Link>
      </li>
      {props.dropdown ? (
        <div
          className={`${styles.navmenu__dropdownContent} ${
            showDropdown ? "" : styles.none
          }`}
        >
          {props.dropdownMenu.map((submenu, idx) => {
            return (
              <a
                href={`/${submenu.toLowerCase().split(" ").join("-")}`}
                className={styles.navmenu__dropdownLink}
                key={idx}
              >
                {submenu}
              </a>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

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
            <HeaderLink
              to={menu.to}
              text={menu.text}
              key={idx}
              dropdown={menu.dropdown}
              dropdownMenu={menu.dropdownMenu}
            />
          ))}
        </ul>
      </nav>

      <nav>
        <ul className={styles.navmenu__authlink}>
          <li className={styles.navmenu__list}>
            <Link to="/" className={styles.navmenu__authenlink}>
              Log in
            </Link>
          </li>
          <li className={styles.navmenu__list}>
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
