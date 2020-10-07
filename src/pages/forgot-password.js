import React, { useState } from "react"
import { navigate } from "gatsby"
import { useForm } from "react-hook-form"
import styles from "./forgot-password.module.scss"

import { FormTitle, Input, SubmitInput as Submit } from "../components/input"

export default function () {
  const { register, handleSubmit } = useForm()

  const onSubmit = async data => {
    console.log(data)
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
            register={register}
          />
        </div>

        <Submit value="Recover" />
      </form>
    </div>
  )
}
