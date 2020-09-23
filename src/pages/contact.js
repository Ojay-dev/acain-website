import React from "react"

import Layout from "../components/layout"
import Title from "../components/page-title"
import styles from "./contact.module.scss"
import location from "../svgs/location.svg"
import email from "../svgs/email.svg"
import phone from "../svgs/phone.svg"

export default function () {
  return (
    <Layout>
      <Title>Contact Us</Title>
      <div className={styles.contactDetails}>
        <div className={styles.contactDetails__contact}>
          <div className={styles.contactinfo}>
            <img
              src={location}
              alt="location icon"
              className={styles.contactinfo__icon}
            />
            <p className={styles.contactinfo__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo arcu
              urna, nunc nunc quisque. Lectus ipsum lorem euismod sed.
            </p>
          </div>

          <div className={styles.contactinfo}>
            <img
              src={email}
              alt="mail icon"
              className={styles.contactinfo__icon}
            />
            <p className={styles.contactinfo__text}>Loremipsum@mail.com</p>
          </div>

          <div className={styles.contactinfo}>
            <img
              src={phone}
              alt="phone icon"
              className={styles.contactinfo__icon}
            />
            <p className={styles.contactinfo__text}>012-3456-78911</p>
          </div>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault()
          }}
          className={styles.form}
        >
          <div className={styles.form__row}>
            <div className={styles.form__inputSection}>
              <label htmlFor="Name" className={styles.form__label}>
                Name
              </label>
              <input
                type="text"
                name="Name"
                placeholder="Enter your name"
                className={styles.form__input}
              />
            </div>

            <div className={styles.form__inputSection}>
              <label htmlFor="organisation" className={styles.form__label}>
                Your Organisation
              </label>
              <input
                type="text"
                name="organisation"
                placeholder="Enter your organisation's name"
                className={styles.form__input}
              />
            </div>
          </div>

          <div className={styles.form__row}>
            <div className={styles.form__inputSection}>
              <label htmlFor="email" className={styles.form__label}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="abc@xyz.com"
                className={styles.form__input}
              />
            </div>

            <div className={styles.form__inputSection}>
              <label htmlFor="phone" className={styles.form__label}>
                Phone. No
              </label>
              <input
                type="number"
                name="phone"
                placeholder="012-3456-78911"
                className={styles.form__input}
              />
            </div>
          </div>

          <div className={styles.form__inputSection}>
            <label htmlFor="enquiry" className={styles.form__label}>
              How can we help you?
            </label>
            <textarea
              name="enquiry"
              placeholder="Hi, there I’ll like to..."
              className={`${styles.form__input} ${styles.form__textarea}`}
            />
          </div>

          <input type="submit" value="Send" className={styles.form__submit}/>
        </form>
      </div>
    </Layout>
  )
}
