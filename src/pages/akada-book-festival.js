import React from "react"
import Countdown, { zeroPad } from "react-countdown"

import Layout from "../components/layout"
import styles from "./akada-book-festival.module.scss"
import akada from "../images/akada-event.png"

export default function () {
  // Random component
  const Completionist = () => <span className={styles.timer__end}>This event has commenced!</span>

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />
    }

    return (
      <div className={styles.countdown__timersection}>
        <div className={styles.timer}>
          <div className={styles.timer__value}>{zeroPad(days)}</div>
          <span className={styles.timer__subvalue}>Days</span>
        </div>

        <div className={styles.timer}>
          <div className={styles.timer__value}>{zeroPad(hours)}</div>
          <span className={styles.timer__subvalue}>Hours</span>
        </div>

        <div className={styles.timer}>
          <div className={styles.timer__value}>{zeroPad(minutes)}</div>
          <span className={styles.timer__subvalue}>Minutes</span>
        </div>

        <div className={styles.timer}>
          <div className={styles.timer__value}>{zeroPad(seconds)}</div>
          <span className={styles.timer__subvalue}>seconds</span>
        </div>
      </div>
    )
  }
  return (
    <Layout>
      <div className={styles.banner}>
        <img
          src={akada}
          alt="akada event banner"
          className={styles.banner__image}
        />
      </div>

      <div className={styles.countdown}>
        <h3 className={styles.countdown__title}>
          Countdown to Akada Festival 2020
        </h3>

        <Countdown date={Date.now() + 864000000} renderer={renderer} />
      </div>

      <div className={styles.dateSection}>
        <div className={styles.dateSection__value}>
          <h5 className={styles.dateSection__text}>Date</h5>
          <p className={styles.dateSection__subtext}>
            Friday 30th - Saturday 31st October, 2020
          </p>
        </div>

        <div className={styles.dateSection__value}>
          <h5 className={styles.dateSection__text}>Time</h5>
          <p className={styles.dateSection__subtext}>8am – 8pm</p>
        </div>

        <div className={styles.dateSection__value}>
          <h5 className={styles.dateSection__text}>Venue</h5>
          <p className={styles.dateSection__subtext}>Online</p>
        </div>

        <div
          className={`${styles.dateSection__value} ${styles.dateSection__note}`}
        >
          <h5 className={styles.dateSection__text}>Note:</h5>
          <p className={styles.dateSection__subtext}>
            Entrance to the festival is FREE but registration is required
          </p>
        </div>
      </div>

      <div className={styles.aboutEvent}>
        <p className={styles.aboutEvent__text}>
          The Akada Children’s Book Festival (ACBF) is a fun event to showcase
          children’s books written by African authors, or books written for
          children of colour. To the best of our knowledge, ACBF is the first
          Nigerian book festival specifically for children. The inaugural event
          took place on April 27, 2019 at the British Council in Ikoyi, Lagos
          and attracted over 1400 attendees. The festival is an initiative of
          the Publisher of Clever Clogs Books, Olubunmi Aboderin Talabi. The
          2020 event will be held online over 2 days. On the first day, Friday
          October 30th there will be professional workshops for children’s book
          writers, illustrators and publishers. On the second day, Saturday
          October 31st there will be author book readings; Book Chat; Giggle
          Box; Happy Tunes; story time; pop quizzes and prizes; fun workshops
          for children and insightful sessions for parents and teachers.
        </p>
      </div>
    </Layout>
  )
}
