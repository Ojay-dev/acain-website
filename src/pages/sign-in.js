import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import SnackBar from "../components/snackBar"
import { handleLogin } from "../services/auth"
import { useForm } from "react-hook-form"
import styles from "./sign-in.module.scss"

import { FormTitle, Input, SubmitInput as Submit } from "../components/input"

export default function () {
  const [loading, setLoading] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    status: null,
    message: "",
  })
  const { register, handleSubmit } = useForm()

  const handleOpen = newState => {
    setOpenSnackbar({ open: true, ...newState })
  }

  const handleClose = () => {
    setOpenSnackbar({ ...openSnackbar, open: false })
  }

  const onSubmit = async data => {
    if (data.email === "" || data.password === "") {
      return
    }

    try {
      setLoading(true)
      await handleLogin(data)
      navigate(`/app/welcome`)
    } catch (e) {
      // console.log(e.response)
      const { status } = e.response.data
      setLoading(false)
      handleOpen({
        status,
        message: "Invalid Email or Password!",
      })
    }
  }

  return (
    <React.Fragment>
      <div className={styles.login}>
        <FormTitle title="Sign In" />

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

          <Link
            to="/forgot-password"
            className={`${styles.login__link} ${styles.login__forgotLink}`}
          >
            Forgot password?
          </Link>
          <span className={styles.login__subtext}>
            Not yet a member?{" "}
            <Link to="/join" className={styles.login__link}>
              Join
            </Link>
          </span>

          <Submit
            value={loading ? "Signin... " : "Sign in"}
            isDisabled={loading}
          />
        </form>
      </div>

      <SnackBar
        openSnackbar={openSnackbar}
        handleClose={handleClose}
        severity={openSnackbar.status === 201 ? "success" : "error"}
        message={openSnackbar.message}
      />
    </React.Fragment>
  )
}
