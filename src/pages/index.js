import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.scss"
import Layout from "../components/layout"
import hero_img from "../svgs/hero-image.svg"
import reward from "../svgs/reward.svg"
import increase from "../svgs/increase.svg"
import happiness from "../svgs/happiness.svg"

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
          <img src={hero_img} alt="hero" className={styles.image} />
        </div>
      </div>

      <div className={styles.achievement}>
        <div className={styles.achievementItem}>
          <img src={happiness} alt="happiness icon" className={styles.image} />
          <div className={styles.achievementItem__textSection}>
            <div className={styles.achievementItem__text}>200+</div>
            <span className={styles.achievementItem__subtext}>
              Happy Members
            </span>
          </div>
        </div>

        <div className={styles.achievementItem}>
          <img src={reward} alt="reward icon" className={styles.image} />
          <div className={styles.achievementItem__textSection}>
            <div className={styles.achievementItem__text}>150+</div>
            <span className={styles.achievementItem__subtext}>
              Achievements
            </span>
          </div>
        </div>

        <div className={styles.achievementItem}>
          <img src={increase} alt="increase icon" className={styles.image} />
          <div className={styles.achievementItem__textSection}>
            <div className={styles.achievementItem__text}>&infin;</div>
            <span className={styles.achievementItem__subtext}>Benefits</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
