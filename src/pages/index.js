import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.scss"
import Layout from "../components/layout"
import hero_img from "../svgs/hero-image.svg"

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.textSection}>
          <h2 className={styles.textSection__text}>
            Welcome to the Association of Children’s Authors and Illustrators of
            Nigeria
          </h2>
          <p className={styles.textSection__subtext}>
            The national organization for professional and aspiring children’s
            book authors and illustrators in Nigeria.
          </p>
          <div className={styles.herolink}>
            <Link to="/" className={styles.herolink__join}>
              Join Us now
            </Link>
            <Link to="/" className={styles.herolink__find}>
              Find out more
            </Link>
          </div>
        </div>

        <div className={styles.imageSection}>
          <img
            src={hero_img}
            alt="hero image"
            className={styles.imageSection__image}
          />
        </div>
      </div>
    </Layout>
  )
}
