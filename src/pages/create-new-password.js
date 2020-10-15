import React, { useState } from "react"
import axios from "axios"
import { navigate } from "gatsby"
import { useForm } from "react-hook-form"
import styles from "./create-new-password.module.scss"

import { FormTitle, Input, SubmitInput as Submit } from "../components/input"

export default function ({ location }) {
  const { register, handleSubmit, watch, errors } = useForm()
  const [confirmation, setConfirmation] = useState()
  const [error, setError] = useState()

  const onSubmit = async data => {
    console.log(data)

    const params = new URLSearchParams(location.search.substring(1))
    const code = params.get("code")

    try {
      const resp = await axios.put(
        `https://acain.herokuapp.com/api/v1/auth//forgot-password?code=${code}`,
        data
      )

      if (resp.status === 200) {
        setConfirmation(resp.data.message)
        setTimeout(() => {
          navigate("/sign-in")
        }, 3000)
      }
    } catch (error) {
      setError("An Error Occurred while updating your Password, Resend mail!!!")
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
    <div className={styles.createNewPass}>
      <FormTitle title="Create new password" />

      <form
        className={styles.createNewPass__form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.createNewPass__row}>
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            name="password"
            register={register({
              required: true,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?.&])[A-Za-z\d@$!%*.#?&]{8,20}$/,
                message:
                  "Password must be 8-20 characters long, and must contain at least one letter, one number and one special character",
              },
            })}
            errorStyle={errors.password}
          />
          {errors.password && errors.password.type === "pattern" && (
            <span role="alert" className={styles.createNewPass__error}>
              {errors.password.message}
            </span>
          )}
        </div>

        <div className={styles.createNewPass__row}>
          <Input
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            register={register({
              validate: value => value === watch("password"),
            })}
            errorStyle={errors.confPassword}
          />
          {errors.confPassword && errors.confPassword.type === "validate" && (
            <span role="alert" className={styles.createNewPass__error}>
              You have to verify the exact password!
            </span>
          )}
        </div>

        <Submit value="Create" />
      </form>
    </div>
  )
}
