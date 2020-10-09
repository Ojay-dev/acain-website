import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./mobileMenu.module.scss"
import avatar from "../svgs/avatar.svg"

export default function () {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)
  return (
    <React.Fragment>
      {/* Menu Btn */}
      <div className={styles.menuBtn} onClick={toggleMenu} role="button">
        <span
          className={`${styles.menuBtn__burger} ${showMenu ? styles.open : ""}`}
        ></span>
      </div>

      {/* Mobile Menu */}
      <nav className={`${styles.navMobile} ${showMenu ? styles.open : ""}`}>
        <div className={styles.loggedInUserDetail}>
          <div className={styles.imageCropper}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={styles.nameSection}>
            <h4 className={styles.text}>Welcome Tonye !</h4>
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
          <div className={styles.subtext}>
            <span className={styles.status}>Status: </span>Full-Member
          </div>
        </div>

        <ul className={styles.menuNav}>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>
              About
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>
              Membership
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>
              Publications
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>
              Directory
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>
              News & Event
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>

        <div className={styles.authLink}>
          <Link to="/" className={styles.signin}>
            Sign in
          </Link>
          <Link to="/" className={styles.join}>
            Join
          </Link>
        </div>
      </nav>
    </React.Fragment>
  )
}
