import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/page-title"
import styles from "./membership-benefits.module.scss"
import workshop from "../svgs/workshop.svg"
import presentation from "../svgs/presentation.svg"
import advisor from "../svgs/advisor.svg"
import organization from "../svgs/organization.svg"
import speech from "../svgs/speech.svg"

export default function () {
  return (
    <Layout>
      <Title>Membership Services and Benefits</Title>

      <div className={styles.memberBenefits}>
        <p className={styles.memberBenefits__text}>
          We provide services and a community that gives aspiring and published
          authors and illustrators improved skills, visibility and economic
          empowerment using a combination of knowledge and access sharing
          programs. Collectively as an association we offer:
        </p>

        <div className={styles.benefits}>
          <div className={styles.benefits__item}>
            <div className={styles.benefits__textSection}>
              <h3 className={styles.benefits__title}>Training and Workshops</h3>
              <p className={styles.benefits__text}>
                Webinars and training programs in the areas of
              </p>
              <ul>
                <div>
                  <li className={styles.benefits__list}>
                    Creative skills enhancement
                  </li>
                  <p className={styles.benefits__text}>
                    ACAIN members gain valuable technical skills to help them
                    improve their craft.
                  </p>
                </div>

                <div>
                  <li className={styles.benefits__list}>
                    Entrepreneurial skills enhancement
                  </li>
                  <p className={styles.benefits__text}>
                    ACAIN members can acquire basic entrepreneurial skills and
                    knowledge to monetize their craft and make it financially
                    viable.
                  </p>
                </div>
              </ul>
            </div>

            <img src={workshop} alt="workshop icon" />
          </div>

          <div className={styles.benefits__item}>
            <div className={styles.benefits__textSection}>
              <h3 className={styles.benefits__title}>Information services</h3>
              <p className={styles.benefits__text}>
                Members are able to access the directory of technical skill
                providers in order to accelerate and improve the quality of
                their work. The directory would include resource providers such
                as publishers, printers, distributors, illustrators and editors.
              </p>
            </div>

            <img src={presentation} alt="presentation icon" />
          </div>

          <div className={styles.benefits__item}>
            <div className={styles.benefits__textSection}>
              <h3 className={styles.benefits__title}>Network and access</h3>
              <p className={styles.benefits__text}>
                ACAIN membership creates and opportunity to network and
                collaborate with other players locally and internationally.
              </p>
            </div>
            <img src={organization} alt="organization icon" />
          </div>

          <div className={styles.benefits__item}>
            <div className={styles.benefits__textSection}>
              <h3 className={styles.benefits__title}>Advisory services</h3>
              <p className={styles.benefits__text}>
                Members benefit from advisory services of the association.
              </p>
            </div>
            <img src={advisor} alt="advisor icon" />
          </div>

          <div className={styles.benefits__item}>
            <div className={styles.benefits__textSection}>
              <h3 className={styles.benefits__title}>
                Trade shows and Conferences
              </h3>
              <p className={styles.benefits__text}>
                These will provide members with an avenue to showcase their
                products, skills and services as well as provide networking
                access.
              </p>
            </div>
            <img src={speech} alt="speech icon" />
          </div>

          <ul className={styles.benefits__otherItems}>
            <li className={styles.benefits__itemlist}>
              Improved brand visibility
            </li>
            <li className={styles.benefits__itemlist}>
              Local and international collaboration for bigger mutually
              beneficial projects
            </li>
            <li className={styles.benefits__itemlist}>
              Shared knowledge of opportunities such as funding, awards,
              speaking engagements technical expertise
            </li>
            <li className={styles.benefits__itemlist}>
              A positive influence on quality standards for Nigerian children’s
              books
            </li>
          </ul>
        </div>

        <Link to="/join" className={styles.benefits__link}>
          Become a Member
        </Link>
      </div>
    </Layout>
  )
}
