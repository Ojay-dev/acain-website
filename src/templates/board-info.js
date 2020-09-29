import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import styles from "./board-info.module.scss"

function BoardInfo({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className={styles.boardInfo}>
        <div className={styles.boardInfo__detail}>
          <div className={styles.imageCropper}>
            <Img
              fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
              className={styles.boardInfo__image}
            />
          </div>
  
         <div className={styles.boardInfo__nameSection}>
            <h5 className={styles.boardInfo__name}>{post.frontmatter.title}</h5>
            <span className={styles.boardInfo__position}>{post.frontmatter.position}</span>
         </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} className={styles.boardInfo__about}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        position
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BoardInfo
