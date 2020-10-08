import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"
import logo from "../svgs/logo-header.svg"
import facebook from "../svgs/facebook.svg"
import twitter from "../svgs/twitter.svg"
import instagram from "../svgs/instagram.svg"
import linkedin from "../svgs/linkedin.svg"

const nav = {
  home: { to: "/", text: "Home" },
  "about-us": { to: "/about-us", text: "About us" },
  Membership: { to: "/membership", text: "Membership" },
  Publications: { to: "/publications", text: "Publications" },
  Directory: { to: "/mirectory", text: "Directory" },
  "News-&-Events": { to: "/News-&-Events", text: "News & Events" },
  Contact: { to: "/contact", text: "Contact" },
}

const FooterLink = props => (
  <li className={styles.footer__navItem}>
    <Link to={props.to} className={styles.footer__navlink}>
      {props.text}
    </Link>
  </li>
)

export default () => {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="logo" />
      <div className={styles.footer__title}>
        Association of Children’s Authors and Illustrators of Nigeria
      </div>
      <nav className={styles.footer__navmenu}>
        {/* <div className={styles. footer__hr}></div> */}
        <ul className={styles.footer__nav}>
          {Object.values(nav).map((menu, idx) => (
            <FooterLink to={menu.to} text={menu.text} key={idx} />
          ))}
        </ul>

        {/* <div className={styles. footer__hr}></div> */}
      </nav>
      <div className={styles.footer__copyright}>
        Copyright © 2020 ACAIN. All Rights Reserved.
      </div>

      <h5 className={styles.footer__socialTitle}>Follow us on Social Media</h5>
      <div className={styles.footer__socialLink}>
        <a href="/" className={styles.footer__socialLink__item}>
          <img src={facebook} alt="facebook icon" />
        </a>
        <a href="/" className={styles.footer__socialLink__item}>
          <img src={twitter} alt="twitter icon" />
        </a>
        <a href="/" className={styles.footer__socialLink__item}>
          <img src={instagram} alt="instagram icon" />
        </a>
        <a href="/" className={styles.footer__socialLink__item}>
          <img src={linkedin} alt="linkedin icon" />
        </a>
      </div>
    </div>
  )
}
