import React, { useState } from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import { handleLogin } from "../services/auth"
import { useForm } from "react-hook-form"
import styles from "./sign-in.module.scss"

import { FormTitle, Input, SubmitInput as Submit } from "../components/input"

export default function () {
  const [serverSideError, setServerSideError] = useState()
  const { register, handleSubmit } = useForm()

  const onSubmit = async data => {
    console.log(data)

    try {
      await handleLogin(data)
      navigate(`/`)
    } catch (e) {
      console.log(e.response)
      setServerSideError(e.response.data.message)
    }
  }

  return (
    <div className={styles.login}>
      <FormTitle title="Sign In" />

      {serverSideError ? (
        <span style={{ color: "red", marginBottom: "1.5rem" }}>{serverSideError}</span>
      ) : null}

      <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.login__row}>
          <Input
            label="Email"
            placeholder="abc@xyz.com"
            type="text"
            name="email"
            register={register}
          />
        </div>

        <div className={styles.login__row}>
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            name="password"
            register={register}
          />
        </div>

        
          <Link to="/forgot-password" className={`${styles.login__link} ${styles.login__forgotLink}`}>
            Forgot password?
          </Link>
        <span className={styles.login__subtext}>
          Not yet a member?{" "}
          <Link to="/join" className={styles.login__link}>
            Join
          </Link>
        </span>

        <Submit value="Sign in" />
      </form>
    </div>
  )
}
