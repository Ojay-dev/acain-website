import React from "react"
import { useForm } from "react-hook-form"

import Layout from "./layout"
import Title from "./page-title"
import styles from "./profile.module.scss"

export default function () {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Layout>
      <Title>Profile</Title>
      <form className={styles.profile} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.header}>Basic Info</h3>
        <div className={styles.profile__segment}>
          <div className={styles.profile__row}>
            <div className={styles.profile__item}>
              <label htmlFor="name" className={styles.profile__label}>
                Name
              </label>
              <input
                type="text"
                name="name"
                className={styles.profile__input}
                ref={register({
                  required: true,
                  validate: value => {
                    return !!value.trim()
                  },
                })}
              />
            </div>

            <div className={styles.profile__item}>
              <label htmlFor="organisation" className={styles.profile__label}>
                Your Organisation
              </label>
              <input
                type="text"
                name="organisation"
                className={styles.profile__input}
                ref={register({
                  required: true,
                  validate: value => {
                    return !!value.trim()
                  },
                })}
              />
            </div>
          </div>

          <div className={styles.profile__row}>
            <div className={styles.profile__item}>
              <label htmlFor="email" className={styles.profile__label}>
                Email Address
              </label>
              <input
                type="text"
                name="email"
                className={styles.profile__input}
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address!",
                  },
                })}
              />
            </div>

            <div className={styles.profile__item}>
              <label htmlFor="phone" className={styles.profile__label}>
                Phone. No
              </label>
              <input
                type="text"
                name="phone"
                className={styles.profile__input}
                ref={register({
                  required: true,
                })}
              />
            </div>
          </div>

          <div className={styles.profile__item}>
            <label htmlFor="about" className={styles.profile__label}>
              About You
            </label>
            <textarea
              name="about"
              className={styles.profile__textarea}
              placeholder="I am an author with the passion for writing..."
              ref={register}
            />
          </div>
        </div>

        <h3 className={styles.header}>Social</h3>
        <div className={styles.profile__segment}>
          <div className={styles.profile__item}>
            <label htmlFor="twitter">Twitter Profile</label>
            <input
              type="text"
              name="twitter"
              placeholder="https://twitter.com/johndoe"
              className={styles.profile__input}
              ref={register}
            />
          </div>

          <div className={styles.profile__item}>
            <label htmlFor="facebook">Facebook Profile</label>
            <input
              type="text"
              name="facebook"
              placeholder="https://facebook.com/johndoe"
              className={styles.profile__input}
              ref={register}
            />
          </div>

          <div className={styles.profile__item}>
            <label htmlFor="linkedin">Linkedin Profile</label>
            <input
              type="text"
              name="linkedin"
              placeholder="https://linkedin.com/john"
              className={styles.profile__input}
              ref={register}
            />
          </div>

          <div className={styles.profile__item}>
            <label htmlFor="instagram">Instagram Profile</label>
            <input
              type="text"
              name="instagram"
              placeholder="https://instagram.com/john_doe"
              className={styles.profile__input}
              ref={register}
            />
          </div>

          <div className={styles.profile__item}>
            <label htmlFor="website">Website url</label>
            <input
              type="text"
              name="website"
              placeholder="https://www.johndoe.com"
              className={styles.profile__input}
              ref={register}
            />
          </div>
        </div>

        <input
          type="submit"
          value="Update"
          className={styles.profile__submit}
        />
      </form>
    </Layout>
  )
}
