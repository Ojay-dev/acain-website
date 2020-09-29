import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Title from "../components/page-title"
import styles from "./about-us.module.scss"
import mission from "../svgs/mission.svg"
import vision from "../svgs/vision.svg"
import value from "../svgs/value.svg"

function Member(props) {
  return (
    <div className={styles.member}>
      <div className={styles.member__detail}>
        <div className={styles.imageCropper}>
          <Img
            fluid={props.image}
            // alt={props.name}
            className={`${styles.image} ${styles.member__image}`}
          />
        </div>
        <h5 className={styles.member__name}>{props.name}</h5>
        <span className={styles.member__position}>{props.position}</span>
      </div>

      <div className={styles.member__info}>
        <div
          className={styles.member__about}
          dangerouslySetInnerHTML={{ __html: props.info }}
        />
        <Link to={props.link} className={styles.member__morelink}>
          Read more...
        </Link>
      </div>
    </div>
  )
}

export default function ({ data }) {
  let post = data.allMarkdownRemark

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
        {post.edges.map(({ node }, idx) => (
          <Member
            key={node.id}
            image={node.frontmatter.featuredImage.childImageSharp.fluid}
            name={node.frontmatter.title}
            position={node.frontmatter.position}
            info={node.excerpt}
            link={node.fields.slug}
          />
        ))}
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

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id

          frontmatter {
            position
            title
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(format: HTML, pruneLength: 500)
          fields {
            slug
          }
        }
      }
    }
  }
`
