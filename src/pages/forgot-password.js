import React, { useState } from "react"
import axios from "axios"
import { navigate } from "gatsby"
import { useForm } from "react-hook-form"
import styles from "./forgot-password.module.scss"

import { FormTitle, Input, SubmitInput as Submit } from "../components/input"

export default function () {
  const { register, handleSubmit, errors } = useForm()
  const [confirmation, setConfirmation] = useState()
  const [error, setError] = useState()

  const onSubmit = async data => {
    console.log(data)

    try {
      const resp = await axios.post(
        "https://acain.herokuapp.com/api/v1/auth/forgot-password",
        {
          type: "email",
          email: data.email,
        }
      )

      if (resp.status === 200) {
        setConfirmation("Click on the link sent to your email to reset your password!")
        setTimeout(() => {
          navigate("/sign-in")
        }, 4000)
      }
    } catch (error) {
      setError("An Error Occurred!!!")
      setTimeout(() => {
        navigate("/forgot-password")
      }, 3000)
    }
  }

  if (confirmation) {
  return <p>{confirmation}</p>
  }
  
  if (error) {
  return <p>{error}</p>
  }

  return (
    <div className={styles.forgotPass}>
      <FormTitle title="Recover password" />

      <form
        className={styles.forgotPass__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.forgotPass__row}>
          <Input
            label=""
            placeholder="Enter your email to recover password"
            type="text"
            name="email"
            register={register({
              required: "required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address!",
              },
            })}
            errorStyle={errors.email}
          />
          {errors.email && errors.email.type === "required" && (
            <span role="alert" className={styles.forgotPass__error}>
              Email is required!
            </span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span role="alert" className={styles.forgotPass__error}>
              {errors.email.message}
            </span>
          )}
        </div>

        <Submit value="Recover" />
      </form>
    </div>
  )
}
