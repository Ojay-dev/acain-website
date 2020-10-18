import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import { isLoggedIn, logout } from "../services/auth"
import styles from "./mobileMenu.module.scss"
import avatar from "../svgs/avatar.svg"

function LogInUserMenu() {
  const [loggedInMenu, setLoggedInMenu] = useState(false)
  const showLoggedInMenu = () => setLoggedInMenu(!loggedInMenu)

  return (
    <div className={styles.loggedInUserDetail}>
      <div className={styles.loggedInUserDetail__imageCropper}>
        <img src={avatar} alt="avatar" />
      </div>
      <div
        className={styles.loggedInUserDetail__nameSection}
        onClick={showLoggedInMenu}
      >
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

      <div
        className={`${styles.loggedInUserDetail__dropdown} ${
          loggedInMenu ? "" : styles.dnone
        }`}
      >
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
  )
}

function MobileNavLink({ navItem }) {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const toggleSubMenu = () => setShowSubMenu(!showSubMenu)

  return (
    <div className={styles.item}>
      <li>
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
      {navItem.dropdown ? (
        <div
          className={styles.dropdownContent}
          // style={showSubMenu ? null : { display: "none" }}
        >
          {navItem.dropdownMenu.map((submenu, idx) => {
            return (
              <Link
                to={`/${submenu.toLowerCase().split(" ").join("-")}`}
                className={`${styles.dropdownContent__dropdownLink} ${
                  showSubMenu ? "" : styles.dnone
                }`}
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

export default function ({ navItems }) {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <React.Fragment>
      {/* Menu Btn */}
      <div
        className={styles.menuBtn}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
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
            <MobileNavLink navItem={navItem} key={idx} />
          ))}
        </ul>

        <div
          className={styles.authLink}
          style={isLoggedIn() ? { marginTop: 30 } : null}
        >
          {isLoggedIn() ? (
            <Link
              to="/"
              className={styles.join}
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
