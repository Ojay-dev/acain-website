import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, navigate } from "gatsby"
import Loader from "../components/loader"

import { logout, getUser, setUser, isLoggedIn } from "../services/auth"
import styles from "./welcome.module.scss"
import payment from "../svgs/payment.svg"

const consistantCapitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.substring(1)
}

export default function ({location}) {
  const [loading, setLoading] = useState(false)
  const { firstname, membershipType, access_token } = getUser()

  const config = {
    headers: { Authorization: `Bearer ${access_token}` },
  }

  if (isLoggedIn() && getUser().lastPayment) {
    navigate("/")
  }

  const proceedWithPayment = async () => {
    const bodyParameters = {
      membershipType: getUser().membershipType,
    }

    try {
      setLoading(true)
      const resp = await axios.post(
        "http://localhost:4000/api/v1/pay",
        bodyParameters,
        config
      )
      const { data } = resp.data
      window.location = data.link
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className={styles.welcome}>
      <h2 className={styles.welcome__text}>Welcome, {firstname}.</h2>
      <p className={styles.welcome__subtext}>
        Proceed to pay your
        {consistantCapitalizeFirstLetter(membershipType).split("_").join(" ")}{" "}
        fee of ₦5,000 before you can proceed with your account
      </p>

      <img src={payment} alt="pasture icon" className={styles.welcome__image} />

      <button
        className={styles.welcome__paymentLink}
        onClick={proceedWithPayment}
      >
        Make payment
      </button>
      <Link
        to="#"
        className={styles.welcome__backLink}
        onClick={event => {
          event.preventDefault()
          logout(() => navigate(`/sign-in`))
        }}
      >
        Sign out
      </Link>
    </div>
  )
}
