import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import { isLoggedIn, logout } from "../services/auth"
import styles from "./mobileMenu.module.scss"
import avatar from "../svgs/avatar.svg"

function LogInUserMenu() {
  return (
    <div className={styles.loggedInUserDetail}>
      <div className={styles.loggedInUserDetail__imageCropper}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.loggedInUserDetail__nameSection}>
        <h4 className={styles.loggedInUserDetail__text}>Welcome Tonye !</h4>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3688 5.18457L7.5 8.04707L4.63125 5.18457L3.75 6.06582L7.5 9.81582L11.25 6.06582L10.3688 5.18457Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className={styles.loggedInUserDetail__subtext}>
        <span className={styles.loggedInUserDetail__status}>Status: </span>
        Full-Member
      </div>
    </div>
  )
}

export default function ({ navItems }) {
  const [showMenu, setShowMenu] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)
  const toggleSubMenu = () => setShowSubMenu(!showSubMenu)

  return (
    <React.Fragment>
      {/* Menu Btn */}
      <div
        className={styles.menuBtn}
        onClick={toggleMenu}
        role="button"
        onKeyDown={toggleMenu}
      >
        <span
          className={`${styles.menuBtn__burger} ${showMenu ? styles.open : ""}`}
        ></span>
      </div>

      {/* Mobile Menu */}
      <nav className={`${styles.navMobile} ${showMenu ? styles.open : ""}`}>
        {isLoggedIn() ? <LogInUserMenu /> : null}

        <ul
          className={styles.menuNav}
          style={!isLoggedIn() ? { marginTop: "8rem" } : null}
        >
          {navItems.map((navItem, idx) => (
            <div className={styles.item}>
              <li key={idx} >
                <Link to={navItem.to} className={styles.link} onClick={toggleSubMenu}>
                  {navItem.text}{" "}
                  {navItem.dropdown ? (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginLeft: 2 }}
                    >
                      <path d="M6.9125 3.4563L5 5.36463L3.0875 3.4563L2.5 4.0438L5 6.5438L7.5 4.0438L6.9125 3.4563Z" />
                    </svg>
                  ) : null}
                </Link>
              </li>
              {/* {navItem.dropdown ? (
                <div
                  className={`${styles.dropdownContent} ${
                    showSubMenu ? "" : styles.dnone
                  }`}
                  // style={showSubMenu ? null : { display: "none" }}
                >
                  {navItem.dropdownMenu.map((submenu, idx) => {
                    return (
                      <Link
                        to={`/${submenu.toLowerCase().split(" ").join("-")}`}
                        className={styles.dropdownContent__dropdownLink}
                        key={idx}
                      >
                        {submenu}
                      </Link>
                    )
                  })}
                </div>
              ) : null} */}
            </div>
          ))}
        </ul>

        <div className={styles.authLink}>
          {isLoggedIn() ? (
            <Link
              to="/"
              className={styles.signin}
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/sign-in`))
              }}
            >
              Sign out
            </Link>
          ) : (
            <>
              <Link to="/sign-in" className={styles.signin}>
                Sign in
              </Link>
              <Link to="/join" className={styles.join}>
                Join
              </Link>
            </>
          )}
        </div>
      </nav>
    </React.Fragment>
  )
}
