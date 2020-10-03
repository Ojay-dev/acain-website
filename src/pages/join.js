import React, { useState } from "react"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import { FormTitle } from "../components/input"
import { StepOne, StepTwo, StepThree } from "../components/joinFormSteps"
import styles from "./join.module.scss"

export default function () {
  const [currentStep, setCurrentStep] = useState(1)
  const { register, errors, handleSubmit } = useForm()

  const _next = () => {
    // If the current step is 1 or 2, then add one on "next" button click
    setCurrentStep(currentStep >= 2 ? 3 : currentStep + 1)
  }

  const _prev = () => {
    // If the current step is 2 or 3, then subtract one on "previous" button click
    setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1)
  }

  const previousButton = () => {
    if (currentStep !== 1) {
      return (
        <button
          className={styles.join__nxtbutton}
          type="submit"
          onClick={_prev}
        >
          Previous
        </button>
      )
    }
    // ...else return nothing
    return null
  }

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button
          className={`${styles.join__nxtbutton} ${
            currentStep === 1 ? styles.join__btnMarginRightZero : ""
          } `}
          type="submit"
          // onClick={_next}
        >
          Next
        </button>
      )
    }

    if (currentStep === 3) {
      return (
        <input
          className={`${styles.join__nxtbutton} ${
            currentStep === 1 ? styles.join__btnMarginRightZero : ""
          } `}
          type="submit"
          name="submit"
          value="Join Now"
        />
      )
    }
    // ...else render nothing
    return null
  }

  const onSubmit = data => {
    console.log(data)
    // const { email, username, password } = this.state
    // alert(`Your registration detail: \n
    //   Email: ${email} \n
    //   Username: ${username} \n
    //   Password: ${password}`)
  }

  return (
    <div className={styles.join}>
      <FormTitle title="Become a member" />

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <StepOne currentStep={currentStep} register={register} errors={errors} />
        <StepTwo currentStep={currentStep} register={register} errors={errors}/>
        <StepThree currentStep={currentStep} register={register} errors={errors}/>

        <div className={styles.join__buttonArea}>
          <Link to="/sign-in" className={styles.join__link}>
            Sign in instead
          </Link>
          <div>
            {previousButton()}
            {nextButton()}
          </div>
        </div>
      </form>
    </div>
  )
}
