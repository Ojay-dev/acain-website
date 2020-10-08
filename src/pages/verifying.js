import React, { useEffect } from "react"
import axios from "axios"

async function verifyCode(code) {
  try {
    const resp = await axios.put(
      `http://localhost:4000/api/v1/auth/verify-email?code=${code}`
    )

    if (resp.status === 200) {
      window.location = "/email-verification-successful/"
    }
  } catch (error) {
    console.log(error)
    window.location = "/email-verification-error/"
  }
}

export default function ({ location }) {
  useEffect(() => {
    let params = new URLSearchParams(location.search.substring(1))
    const code = params.get("code")
    // console.log(code)
    verifyCode(code)
  }, [location.search])

  return <p>Verifying Email...</p>
}
