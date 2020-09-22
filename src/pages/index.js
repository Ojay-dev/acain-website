import React from "react"
import { Link } from "gatsby"

import styles from "./index.module.scss"
import Layout from "../components/layout"
import hero_img from "../svgs/hero-image.svg"
import reward from "../svgs/reward.svg"
import increase from "../svgs/increase.svg"
import happiness from "../svgs/happiness.svg"
import who_we_are from "../svgs/illustrator.svg"
import workshop from "../svgs/workshop.svg"
import presentation from "../svgs/presentation.svg"
import advisor from "../svgs/advisor.svg"
import organization from "../svgs/organization.svg"
import book1 from "../images/book1.png"
import book2 from "../images/book2.png"
import book3 from "../images/book3.png"
import book4 from "../images/book4.png"

function Hero() {
  return (
    <div className={styles.hero}>
      <div
        className={styles.textSection}
        data-aos="fade-up"
        data-aos-easing="ease-in-back"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
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

      <div
        className={styles.imageSection}
        data-aos="fade-up"
        data-aos-easing="ease-in-back"
        data-aos-delay="450"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
        <img src={hero_img} alt="hero" className={styles.imageSection__image} />
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
          key={idx}
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
      <img src={image} alt="happiness icon" />
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
      <div
        className={styles.about__textSection}
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-center"
      >
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

      <div
        className={styles.about__imageSection}
        data-aos="fade-down-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-center"
      >
        <img src={who_we_are} alt="An illustrator" className={styles.image} />
      </div>
    </div>
  )
}

export default function () {
  return (
    <Layout>
      <Hero />
      <Achievement />
      <About />

      <div className={styles.benefitsContainer}>
        <div className={styles.benefits}>
          <h3 className={styles.benefits__title}>Membership Benefit</h3>

          <div className={styles.benefitsOutline}>
            <div
              className={styles.benefits__point}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-center"
            >
              <div>
                <h4 className={styles.benefits__subtitle}>
                  Training and Workshops
                </h4>
                <p className={styles.benefits__paragraph}>
                  Members gain valuable technical skills, entrepreneurial skills
                  and knowledge to help them improve their craft
                </p>
              </div>
              <img src={workshop} alt="workshop icon" />
            </div>

            <div
              className={styles.benefits__point}
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-center"
            >
              <div>
                <h4 className={styles.benefits__subtitle}>
                  Information services
                </h4>
                <p className={styles.benefits__paragraph}>
                  Members are able to access the directory of technical skill
                  providers in order to accelerate and improve the quality of
                  their work. The directory would include resource providers
                  such as publishers, printers, distributors, illustrators and
                  editors
                </p>
              </div>
              <img src={presentation} alt="presentation icon" />
            </div>

            <div
              className={styles.benefits__point}
              data-aos="fade-right"
              data-aos-delay="70"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-center"
            >
              <div>
                <h4 className={styles.benefits__subtitle}>Advisory services</h4>
                <p className={styles.benefits__paragraph}>
                  Members are able to access the directory of technical skill
                  providers in order to accelerate and improve the quality of
                  their work. The directory would include resource providers
                  such as publishers, printers, distributors, illustrators and
                  editors
                </p>
              </div>
              <img src={advisor} alt="advisor icon" />
            </div>

            <div
              className={styles.benefits__point}
              data-aos="fade-left"
              data-aos-delay="80"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-center"
            >
              <div>
                <h4 className={styles.benefits__subtitle}>
                  Network and access
                </h4>
                <p className={styles.benefits__paragraph}>
                  Members are able to access the directory of technical skill
                  providers in order to accelerate and improve the quality of
                  their work. The directory would include resource providers
                  such as publishers, printers, distributors, illustrators and
                  editors
                </p>
              </div>
              <img src={organization} alt="organization icon" />
            </div>
          </div>

          <div
            className={styles.benefits__link}
            data-aos="zoom-out-up"
            data-aos-delay="90"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-center"
          >
            <Link to="/" className={styles.herolink__find}>
              See more
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.publications}>
        <h3 className={styles.benefits__title}>Publications</h3>

        <div className={styles.book}>
          <div
            className={styles.book__item}
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-center"
          >
            <img src={book1} alt="Power Cut book" className={styles.image} />
            <div className={styles.book__title}>Power Cut</div>
            <span className={styles.book__subtitle}>Tonye Faloughi-Ekezie</span>
          </div>

          <div
            className={styles.book__item}
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-center"
          >
            <img
              src={book2}
              alt="Fruits and Vegetables book"
              className={styles.image}
            />
            <div className={styles.book__title}>Fruits and Vegetables</div>
            <span className={styles.book__subtitle}>Tonye Faloughi-Ekezie</span>
          </div>

          <div
            className={styles.book__item}
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-center"
          >
            <img
              src={book3}
              alt="What is down Syndrome? book"
              className={styles.image}
            />
            <div className={styles.book__title}>What is down Syndrome?</div>
            <span className={styles.book__subtitle}>Tonye Faloughi-Ekezie</span>
          </div>

          <div
            className={styles.book__item}
            data-aos="fade-up"
            data-aos-delay="650"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-center"
          >
            <img
              src={book4}
              alt="I can do it myself book"
              className={styles.image}
            />
            <div className={styles.book__title}>I can do it myself</div>
            <span className={styles.book__subtitle}>Tonye Faloughi-Ekezie</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
