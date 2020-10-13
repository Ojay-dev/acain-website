import React, { useEffect } from "react"
import axios from "axios"
import { navigate } from "gatsby"

async function verifyCode(code) {
  try {
    const resp = await axios.put(
      `https://acain.herokuapp.com/api/v1/auth/verify-email?code=${code}`
    )

    if (resp.status === 200) {
      navigate("/email-verification-successful/")
    }
  } catch (error) {
    console.log(error)
    navigate("/email-verification-error/")
  }
}

export default function ({ location }) {
  useEffect(() => {
    const params = new URLSearchParams(location.search.substring(1))
    const code = params.get("code")
    // console.log(code)
    verifyCode(code)
  }, [location.search])

  return <p>Verifying Email...</p>
}
