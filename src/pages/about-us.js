import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Title from "../components/page-title"
import styles from "./about-us.module.scss"
import mission from "../svgs/mission.svg"
import vision from "../svgs/vision.svg"
import value from "../svgs/value.svg"
import image1 from "../images/ellipse1.png"
import image2 from "../images/ellipse2.png"
import image3 from "../images/ellipse3.png"
import image4 from "../images/ellipse4.png"
import image5 from "../images/ellipse5.png"

function Member(props) {
  return (
    <div className={styles.member}>
      <div className={styles.member__detail}>
        <img
          src={props.image}
          alt={props.name}
          className={`${styles.image} ${styles.member__image}`}
        />
        <h5 className={styles.member__name}>{props.name}</h5>
        <span className={styles.member__position}>{props.position}</span>
      </div>

      <div className={styles.member__info}>
        <p className={styles.member__about}>{props.info}</p>
        <Link to="#" className={styles.member__morelink}>
          Read more...
        </Link>
      </div>
    </div>
  )
}

export default function () {
  return (
    <Layout>
      <Title>About Us</Title>
      <div className={styles.we_are}>
        <h3 className={styles.we_are__title}>Who We Are</h3>
        <p className={styles.we_are__subtitle}>
          ACAIN exists to answer the questions “Where can I find the support I
          need to improve my creativity as a children’s book author, illustrator
          and editor as well as thrive from it?”
        </p>
      </div>

      <div className={styles.missionSection}>
        <ul className={styles.missionSection__list}>
          <div className={styles.point}>
            <img
              src={vision}
              alt="Binicolar icon"
              className={`${styles.image} ${styles.point__image}`}
            />
            <div className={styles.point__text}>
              <li className={styles.point__title}>Vision</li>
              <p className={styles.point__paragraph}>
                To be the foremost platform supporting and promoting the
                creative activities of children’s book authors and illustrator s
                in Nigeria towards improving literacy and economic growth.
              </p>
            </div>
          </div>

          <div className={styles.point}>
            <img
              src={mission}
              alt="dart icon"
              className={`${styles.image} ${styles.point__image}`}
            />
            <div className={styles.point__text}>
              <li className={styles.point__title}>Mission</li>
              <p className={styles.point__paragraph}>
                To be the foremost platform supporting and promoting the
                creative activities of children’s book authors and illustrator s
                in Nigeria towards improving literacy and economic growth.
              </p>
            </div>
          </div>

          <div className={styles.point}>
            <img
              src={value}
              alt="diamond icon"
              className={`${styles.image} ${styles.point__image}`}
            />
            <div className={styles.point__text}>
              <li className={styles.point__title}>Core Values</li>
              <p className={styles.point__paragraph}>
                To be the foremost platform supporting and promoting the
                creative activities of children’s book authors and illustrator s
                in Nigeria towards improving literacy and economic growth.
              </p>
            </div>
          </div>
        </ul>
      </div>

      <div className={styles.board}>
        <h3 className={styles.board__title}>Our Board members</h3>
        <Member
          image={image1}
          name="Olubunmi Aboderin Talabi"
          position="Chairman and Trustee"
          info="Olubunmi Aboderin Talabi is an author; the publisher of Clever Clogs
          Books; the convener of the Akada Children's Book Festival and a
          Founding Member of the Board of Trustees of the Association of
          Children’s Authors and Illustrators of Nigeria. She is passionate
          about creating visually-engaging, culturally-relevant content for
          children, and has a desire to see steadily increasing literacy rates
          within her community and others."
        />
        <Member
          image={image2}
          name="Chioma Momah"
          position="Vice Chairman and Trustee"
          info="Chioma Momah is a lawyer, writer and inspirational/parenting blogger. This mother of four is the author of the children's books <em>First day at the Big School</  em> and “Fun Day at the Museum” as well as the Goals, Gratitude and Growth Journal.
          Chioma is also the founder of Let's <em>Encourage A Reading Nation (L.E.A.R.N)</em> which is aimed at improving literacy among children.
          "
        />
        <Member
          image={image3}
          name="Tonye Faloughi-Ekezie"
          position="Secretary and Trustee"
          info="Tonye Faloughi-Ekezie is a wife, mother and entrepreneur. As the
          head of TEEOF Media, she consults on media and entertainment
          projects for a range of clients. <br/><br/>
          
          In her early years Tonye attended school and university in the UK and USA, before eventually relocating back to Nigeria, working on, and commissioning major projects for such companies as Endemol South Africa, MNet and Storm 360. Imbibed with an entrepreneurial spirit from her father, Tonye started her own company, TEEOF Media, in 2011.
          "
        />
        <Member
          image={image4}
          name="Basirat Razaq-Shuaib"
          position="Treasurer and Trustee"
          info="Basirat is a Board Certified Cognitive Specialist, an author, a social entrepreneur and a global speaker advancing the conversation on disability and inclusive education in Nigeria. She is the Founder of The Winford Centre for Children and Women - a charity supporting children with developmental disabilities in Nigeria, and registered as a United Nations Global Compact partner organisation. She is also the CEO of The Winford Centre International- the premier provider of developmental and learning aids for children with special needs in Nigeria"
        />
        <Member
          image={image5}
          name="Irene Omiunu"
          position="Trustee"
          info="Irene Omiunu is a Nigerian born fashion artist/ illustrator based in the UK.
          In recent years, she has been commissioned internationally by some of the world’s top brands including Vogue, Grazia, Vlisco, The Dubai Mall and Aspinal of London.
          She has successfully illustrated 3 children's books with  2 more due early 2021. She is a firm believer in the power of illustrated pictures to convey the meaning of a story and illuminate the minds of children, thereby sparking a love of reading early on in life."
        />
      </div>

      <div className={styles.newsletter}>
        <h3 className={styles.newsletter__title}>Sign up for our newsletter</h3>
        <form
          onSubmit={e => {
            e.preventDefault()
          }}
          className={styles.newsletterForm}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.newsletterForm__input}
          />
          <input
            type="submit"
            value="Subscribe"
            className={styles.newsletterForm__submit}
          />
        </form>
      </div>
    </Layout>
  )
}
