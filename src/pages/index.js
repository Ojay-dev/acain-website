import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.scss"
import Layout from "../components/layout"
import hero_img from "../svgs/hero-image.svg"
import reward from "../svgs/reward.svg"
import increase from "../svgs/increase.svg"
import happiness from "../svgs/happiness.svg"
import who_we_are from "../svgs/illustrator.svg"

function Hero() {
  return (
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
  )
}

function Achievement() {
  const achievementDta = {
    happiness: {
      image: happiness,
      text: "200+",
      subtext: "Happy Members",
    },
    achievement: {
      image: reward,
      text: "150+",
      subtext: "Achievement",
    },
    benefits: {
      image: increase,
      text: "∞",
      subtext: "Benefits",
    },
  }

  return (
    <div className={styles.achievement}>
      {Object.values(achievementDta).map((item, idx) => (
        <AchievementItem
          image={item.image}
          text={item.text}
          subtext={item.subtext}
        />
      ))}
    </div>
  )
}

function AchievementItem({ image, text, subtext }) {
  return (
    <div className={styles.achievementItem}>
      <img src={image} alt="happiness icon" className={styles.image} />
      <div className={styles.achievementItem__textSection}>
        <div className={styles.achievementItem__text}>{text}</div>
        <span className={styles.achievementItem__subtext}>{subtext}</span>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about__textSection}>
        <h3 className={styles.about__title}>Who We Are</h3>
        <article className={styles.about__article}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eget
          odio lobortis ut tortor. Arcu porttitor bibendum lobortis molestie sit
          natoque scelerisque. Ultrices fermentum sapien nulla in velit et
          sapien. <br />
          <br /> Nunc faucibus consequat donec dictum eu neque dui faucibus.
          Urna nunc arcu ante id nisi mi luctus. Auctor porta amet, amet,
          gravida. Sit proin aliquam auctor cras tincidunt consectetur. Sit
          felis mi sagittis tortor felis in enim, pellentesque lacus. Congue mi
          lobortis adipiscing pellentesque in sagittis eget sit.
        </article>

        <div className={styles.about__link}>
          <Link to="/about-us" className={styles.herolink__find}>
            More
          </Link>
        </div>
      </div>

      <div className={styles.about__imageSection}>
        <img src={who_we_are} alt="An illustrator" className={styles.image} />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Achievement />
      <About />
    </Layout>
  )
}
