import React, { useState } from "react"
import { navigate } from "gatsby"
import axios from "axios"
import Failure from "../components/failure"
import Success from "../components/success"
import Loader from "../components/loader"
import { getUser, setUser } from "../services/auth"

async function verifyPayment(transaction, setTransactionStatus) {
  const { access_token } = getUser()

  const config = {
    headers: { Authorization: `Bearer ${access_token}` },
  }

  const bodyParameters = transaction

  try {
    const resp = await axios.put(
      `https://acain.herokuapp.com/api/v1/pay`,
      bodyParameters,
      config
    )

    const { data } = resp.data

    if (data.isConfirmed) {
      ;(async () => {
        try {
          const resp = await axios.get(
            `https://acain.herokuapp.com/api/v1/profile`,
            config
          )

          const { data } = resp.data
          setUser({ ...data, access_token })
          // console.log({...data, access_token})
        } catch (error) {
          console.log(error.response)
        }
      })()

      setTransactionStatus(1)

      setTimeout(() => {
        navigate("/app/profile")
      }, 1500)
    }
  } catch (error) {
    console.log(error.response)
    setTransactionStatus(2)
    setTimeout(() => {
      navigate("/app/welcome")
    }, 1500)
  }
}

export default function ({ location }) {
  // 0-pending, 1-successful, 2-failed
  const [transactionStatus, setTransactionStatus] = useState(0)

  React.useEffect(() => {
    const params = new URLSearchParams(location.search.substring(1))
    const transaction = {
      // status: params.get("status"),
      transRef: params.get("tx_ref"),
      transID: params.get("transaction_id"),
    }

    console.log(transaction)
    verifyPayment(transaction, setTransactionStatus)
  }, [location.search])

  if (transactionStatus === 0) {
    return <Loader />
  }

  if (transactionStatus === 1) {
    return <Success />
  }

  if (transactionStatus === 2) {
    return <Failure />
  }
}
