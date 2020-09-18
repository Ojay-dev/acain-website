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
  <li>
    <Link to={props.to}>{props.text}</Link>
  </li>
)

export default () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <nav>
        <ul>
          {Object.values(nav).map((menu, idx) => (
            <HeaderLink to={menu.to} text={menu.text} key={idx} />
          ))}
        </ul>

        <ul>
          <li>
            <Link to="/">Log in</Link>
          </li>
          <li>
            <Link to="/">Join</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
