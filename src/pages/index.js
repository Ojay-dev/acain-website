import React from "react"
import { Link } from "gatsby"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

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
import book5 from "../images/Diary-of-a-Toddler-book.jpg"
import book6 from "../images/tobi-bakes-cake-cover.jpg"
import book7 from "../images/cover-1.png"
import book8 from "../images/I_am_not_naughty.jpg"
import book9 from "../images/tlts-cover.jpg"

function Hero() {
  return (
    <div className={styles.hero}>
      <div
        className={styles.textSection}
        // data-aos="fade-up"
        // data-aos-delay="300"
        // data-aos-duration="1000"
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
          <Link to="/types-of-membership" className={styles.herolink__join}>
            Join Us now
          </Link>
          <Link to="/about-us" className={styles.herolink__find}>
            Find out more
          </Link>
        </div>
      </div>

      <div
        className={styles.imageSection}
        // data-aos="fade-up"
        // data-aos-easing="ease-in-back"
        // data-aos-delay="50"
        // data-aos-duration="1000"
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
      text: 200,
      subtext: "Happy Members",
    },
    achievement: {
      image: reward,
      text: 150,
      subtext: "Achievement",
    },
    benefits: {
      image: increase,
      text: 50,
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
    <CountUp start={0} end={text} redraw={true} suffix="+">
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
          <div className={styles.achievementItem}>
            <img src={image} alt="happiness icon" />
            <div className={styles.achievementItem__textSection}>
              <div className={styles.achievementItem__text} ref={countUpRef} />

              <span className={styles.achievementItem__subtext}>{subtext}</span>
            </div>
          </div>
        </VisibilitySensor>
      )}
    </CountUp>
  )
}

function About() {
  return (
    <div className={styles.about}>
      <div
        className={styles.about__textSection}
        // data-aos="fade-up"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        // data-aos-anchor-placement="bottom-center"
      >
        <h3 className={styles.about__title}>Who We Are</h3>
        <article className={styles.about__article}>
          ACAIN exists to answer the questions “Where can I find the support I
          need to improve my creativity as a children’s book author, illustrator
          and editor as well as thrive from it?”
        </article>

        <div className={styles.about__link}>
          <Link to="/about-us" className={styles.herolink__find}>
            More
          </Link>
        </div>
      </div>

      <div
        className={styles.about__imageSection}
        // data-aos="fade-down-left"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        // data-aos-anchor-placement="bottom-center"
      >
        <img src={who_we_are} alt="An illustrator" className={styles.image} />
      </div>
    </div>
  )
}

export default function () {
  // const user = useContext(UserContext)
  // console.log(user);
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
              // data-aos="fade-right"
              // data-aos-delay="50"
              // data-aos-duration="1000"
              // data-aos-anchor-placement="bottom-center"
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
              // data-aos="fade-left"
              // data-aos-delay="60"
              // data-aos-duration="1000"
              // data-aos-anchor-placement="bottom-center"
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
              // data-aos="fade-right"
              // data-aos-delay="70"
              // data-aos-duration="1000"
              // data-aos-anchor-placement="bottom-center"
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
              // data-aos="fade-left"
              // data-aos-delay="80"
              // data-aos-duration="1000"
              // data-aos-anchor-placement="bottom-center"
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
            // data-aos="zoom-out-up"
            // data-aos-delay="90"
            // data-aos-duration="1000"
            // data-aos-anchor-placement="bottom-center"
          >
            <Link to="/membership-benefits" className={styles.herolink__find}>
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
            // data-aos="fade-up"
            // data-aos-delay="50"
            // data-aos-duration="1000"
            // data-aos-anchor-placement="bottom-center"
          >
            <div className={styles.book__cropper}>
              <img
                src={book5}
                alt="Dairy of a toddler"
                className={styles.image}
              />
            </div>
            <div className={styles.book__title}>Dairy of a Toddler</div>
            <span className={styles.book__subtitle}>
              Olubunmi Aboderin Talabi
            </span>
          </div>

          <div
            className={styles.book__item}
            // data-aos="fade-up"
            // data-aos-delay="450"
            // data-aos-duration="1000"
            // data-aos-anchor-placement="bottom-center"
          >
            <div className={styles.book__cropper}>
              <img src={book1} alt="Power Cut" className={styles.image} />
            </div>
            <div className={styles.book__title}>Power Cut</div>
            <span className={styles.book__subtitle}>Tonye Faloughi-Ekezie</span>
          </div>

          <div
            className={styles.book__item}
            // data-aos="fade-up"
            // data-aos-delay="650"
            // data-aos-duration="1000"
            // data-aos-anchor-placement="bottom-center"
          >
            <div className={styles.book__cropper}>
              <img
                src={book7}
                alt="Dragons Canosing"
                className={styles.image}
              />
            </div>
            <div className={styles.book__title}>Dragons Canosing</div>
            <span className={styles.book__subtitle}>Basirat Razaq-Shuaib</span>
          </div>

          <div
            className={styles.book__item}
            // data-aos="fade-up"
            // data-aos-delay="250"
            // data-aos-duration="1000"
            // data-aos-anchor-placement="bottom-center"
          >
            <div className={styles.book__cropper}>
              <img src={book6} alt="Tobi Bakes Cake" className={styles.image} />
            </div>
            <div className={styles.book__title}>Tobi Bakes Cake</div>
            <span className={styles.book__subtitle}>
              Olubunmi Aboderin Talabi
            </span>
          </div>

          <div
            className={styles.book__item}
            // data-aos="fade-up"
            // data-aos-delay="250"
            // data-aos-duration="1000"
            // data-aos-anchor-placement="bottom-center"
          >
            <div className={styles.book__cropper}>
              <img src={book8} alt="I am not Naughty" className={styles.image} />
            </div>
            <div className={styles.book__title}>I am not Naughty</div>
            <span className={styles.book__subtitle}>
            Basirat Razaq-Shuaib
            </span>
          </div>

          <div
            className={styles.book__item}
            // data-aos="fade-up"
            // data-aos-delay="450"
            // data-aos-duration="1000"
            // data-aos-anchor-placement="bottom-center"
          >
            <div className={styles.book__cropper}>
              <img src={book2} alt="Fruits and Vegetables" className={styles.image} />
            </div>
            <div className={styles.book__title}>Fruits and Vegetables</div>
            <span className={styles.book__subtitle}>Tonye Faloughi-Ekezie</span>
          </div>
          
          <div
            className={styles.book__item}
            // data-aos="fade-up"
            // data-aos-delay="450"
            // data-aos-duration="1000"
            // data-aos-anchor-placement="bottom-center"
          >
            <div className={styles.book__cropper}>
              <img src={book3} alt="Fruits and Vegetables" className={styles.image} />
            </div>
            <div className={styles.book__title}>Fruits and Vegetables</div>
            <span className={styles.book__subtitle}>Tonye Faloughi-Ekezie</span>
          </div>
          
          <div
            className={styles.book__item}
            // data-aos="fade-up"
            // data-aos-delay="450"
            // data-aos-duration="1000"
            // data-aos-anchor-placement="bottom-center"
          >
            <div className={styles.book__cropper}>
              <img src={book9} alt="Fruits and Vegetables" className={styles.image} />
            </div>
            <div className={styles.book__title}>Fruits and Vegetables</div>
            <span className={styles.book__subtitle}>Tonye Faloughi-Ekezie</span>
          </div>
          
          <div
            className={styles.book__item}
            // data-aos="fade-up"
            // data-aos-delay="450"
            // data-aos-duration="1000"
            // data-aos-anchor-placement="bottom-center"
          >
            <div className={styles.book__cropper}>
              <img src={book4} alt="Fruits and Vegetables" className={styles.image} />
            </div>
            <div className={styles.book__title}>I can Do It Myself</div>
            <span className={styles.book__subtitle}>Tonye Faloughi-Ekezie</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
