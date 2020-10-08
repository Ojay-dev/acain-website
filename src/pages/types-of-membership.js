import React from "react"
import Layout from "../components/layout"
import Title from "../components/page-title"
import styles from "./types-of-membership.module.scss"

export default function () {
  return (
    <Layout>
      <Title>Types of membership</Title>

      <div className={styles.membershipType}>
        <p className={styles.membershipType__text}>
          There are two levels of membership – Associate and Full membership:
        </p>

        <ol>
          <div>
            <li className={styles.membershipType__item}>
              Associate Membership
            </li>
            <p className={styles.membershipType__text}>
              This category is the minimum entry level and serves aspiring
              children’s book authors and illustrators who are looking to learn
              how to become published.
            </p>
            <h3>Requirements for Associate Membership</h3>
            <p className={styles.membershipType__text}>
              An associate member can progress to full membership upon
              publishing a book.
              <br />
              <br />
              To qualify to become an associate member, the prospective
              applicant must satisfy the requirements below:
            </p>

            <ul>
              <li className={styles.membershipType__list}>
                Applicant must be a minimum of 18 years.
              </li>
              <li className={styles.membershipType__list}>
                Applicant must hold Nigerian citizenship.
              </li>
              <li className={styles.membershipType__list}>
                Applicant must have demonstrable unpublished work.
              </li>
              <li className={styles.membershipType__list}>
                Payment of joining fees
              </li>
              <li className={styles.membershipType__list}>
                Payment of annual dues
              </li>
              <li className={styles.membershipType__list}>
                An associate member must participate in a minimum of two
                A.C.A.I.N events annually to continue to qualify for membership.
              </li>
            </ul>

            <h3>Associate membership additional benefits</h3>
            <ul>
              <li className={styles.membershipType__list}>
                Discounted participation at training programmes and workshops
                (5%).
              </li>
              <li className={styles.membershipType__list}>
                Opportunity to partake in affinity programs (partbershhop
                programs TBD.
              </li>
              <li className={styles.membershipType__list}>
                Weekly newsletter.
              </li>
              <li className={styles.membershipType__list}>
                Volunteer and internship opportunities.
              </li>
              <li className={styles.membershipType__list}>
                Access to member only are of website.
              </li>
              <li className={styles.membershipType__list}>
                Representation of members’ interests at various stakeholder
                forums.
              </li>
            </ul>
          </div>

          <div>
            <li className={styles.membershipType__item}>Full Membership</li>
            <p className={styles.membershipType__text}>
              This membership category serves more experienced authors and
              illustrators looking to gain more visibility, knowledge and growth
              in their craft.
              <br />
              <br />A full member can be elected into the Executive Council.
              <br />
              <br />
              To qualify to become a full member a prospective applicant must
              satisfy the below requirements.
            </p>
            <h3>Requirements for Full Membership</h3>
            <p className={styles.membershipType__text}>
              An associate member can progress to full membership upon
              publishing a book.
              <br />
              <br />
              To qualify to become an full member, the prospective applicant
              must satisfy the requirements below:
            </p>

            <ul>
              <li className={styles.membershipType__list}>
                Applicant must be a minimum of 18 years.
              </li>
              <li className={styles.membershipType__list}>
                Applicant must hold Nigerian citizenship.
              </li>
              <li className={styles.membershipType__list}>
                Applicant must have a minimum of one published book.
              </li>
              <li className={styles.membershipType__list}>
                Payment of joining fees
              </li>
              <li className={styles.membershipType__list}>
                Payment of annual dues
              </li>
              <li className={styles.membershipType__list}>
                A full member must publish a minimum of one work annually to
                continue to qualify for membership.
              </li>
              <li className={styles.membershipType__list}>
                An full member must participate in a minimum of 3 A.C.A.I.N
                events annually to continue to qualify for membership.
              </li>
            </ul>

            <h3>Full membership additional benefits</h3>
            <ul>
              <li className={styles.membershipType__list}>
                Discounted participation at training programmes and workshops
                (15%).
              </li>
              <li className={styles.membershipType__list}>
                Eligibility for election into the Executive Council..
              </li>
              <li className={styles.membershipType__list}>
                Exclusive invitation to some networking events.
              </li>
              <li className={styles.membershipType__list}>
                Awards and sponsorship opportunities delivered weekly bye email.
              </li>
              <li className={styles.membershipType__list}>
                Opportunity to partake in affinity programs (partnership
                programs TBD).
              </li>
              <li className={styles.membershipType__list}>
                Weekly newsletter.
              </li>
              <li className={styles.membershipType__list}>
                Access to member only are of website.
              </li>
              <li className={styles.membershipType__list}>
                Speaking opportunities at ACAIN events.
              </li>
              <li className={styles.membershipType__list}>
                Volunteer opportunities.
              </li>
              <li className={styles.membershipType__list}>
                Representation of members’ interests at various stakeholder
                forums.
              </li>
            </ul>
          </div>
        </ol>
      </div>
    </Layout>
  )
}
