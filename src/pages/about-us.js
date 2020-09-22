import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Title from "../components/page-title"
import styles from "./about-us.module.scss"
import mission from "../svgs/mission.svg"
import vision from "../svgs/vision.svg"
import value from "../svgs/value.svg"
import image1 from "../images/ellipse1.png"

export default function () {
  return (
    <Layout>
      <Title>About Us</Title>
      <div className={styles.we_are}>
        <h3 className={styles.we_are__title}>Who We Are</h3>
        <p className={styles.we_are__subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eget
          odio lobortis ut tortor. Arcu porttitor bibendum lobortis molestie sit
          natoque scelerisque. Ultrices fermentum sapien nulla in velit et
          sapien. <br />
          <br /> Nunc faucibus consequat donec dictum eu neque dui faucibus.
          Urna nunc arcu ante id nisi mi luctus. Auctor porta amet, amet,
          gravida. Sit proin aliquam auctor cras tincidunt consectetur. Sit
          felis mi sagittis tortor felis in enim, pellentesque lacus. Congue mi
          lobortis adipiscing pellentesque in sagittis eget sit.
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
        <div className={styles.member}>
          <div className={styles.member__detail}>
            <img
              src={image1}
              alt="Olubunmi Aboderin Talabi"
              className={`${styles.image} ${styles.member__image}`}
            />
            <h5 className={styles.member__name}>Olubunmi Aboderin Talabi</h5>
            <span className={styles.member__position}>
              Chairman and Trustee
            </span>
          </div>

          <div className={styles.member__info}>
            <p className={styles.member__about}>
              Olubunmi Aboderin Talabi is an author; the publisher of Clever
              Clogs Books; the convener of the Akada Children's Book Festival
              and a Founding Member of the Board of Trustees of the Association
              of Children’s Authors and Illustrators of Nigeria. She is
              passionate about creating visually-engaging, culturally-relevant
              content for children, and has a desire to see steadily increasing
              literacy rates within her community and others.
            </p>
            <Link to="#" className={styles.member__morelink}>Read more...</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
