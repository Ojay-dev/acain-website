import React, { useState } from "react"
import axios from "axios"
import { Link, navigate } from "gatsby"
import Loader from "../components/loader"
import { logout, getUser } from "../services/auth"
import styles from "./welcome.module.scss"
import payment from "../svgs/payment.svg"

const consistantCapitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.substring(1)

export default function () {
  const [loading, setLoading] = useState(false)
  const { firstname, membershipType } = getUser()

  const proceedWithPayment = async () => {
    const config = {
      headers: { Authorization: `Bearer ${getUser().access_token}` },
    }

    const bodyParameters = {
      membershipType: getUser().membershipType,
    }

    try {
      setLoading(true)
      const resp = await axios.post(
        "https://acain.herokuapp.com/api/v1/pay",
        bodyParameters,
        config
      )
      const { data } = resp.data
      // console.log(data)
      window.location = data.link
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className={styles.welcome}>
      <h2 className={styles.welcome__text}>Welcome, {firstname}.</h2>
      <p className={styles.welcome__subtext}>
        Proceed to pay your{" "}
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
