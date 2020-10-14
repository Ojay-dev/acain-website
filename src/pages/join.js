import React, { useState } from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import Loader from "../components/loader"
import { FormTitle } from "../components/input"
import { StepOne, StepTwo, StepThree } from "../components/joinFormSteps"
import styles from "./join.module.scss"
import { handleJoin } from "../services/auth"

export default function Join() {
  const [currentStep, setCurrentStep] = useState(1)
  const [serverSideError, setServerSideError] = useState()
  const [loading, setLoading] = useState(false)
  const {
    register,
    watch,
    errors,
    handleSubmit,
    getValues,
    trigger,
  } = useForm()

  const _prev = () => {
    // If the current step is 2 or 3, then subtract one on "previous" button click
    setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1)
  }

  const previousButton = () => {
    if (currentStep !== 1) {
      return (
        <button
          className={styles.join__nxtbutton}
          type="button"
          onClick={_prev}
          disabled={loading}
        >
          Previous
        </button>
      )
    }

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
          value={loading ? "Joining..." : "Join Now"}
          disabled={loading}
        />
      )
    }

    return null
  }

  const onSubmit = async data => {
    // console.log(data)
    if (data.email) {
      setCurrentStep(2)
    }

    if (data.number) {
      setCurrentStep(3)
    }

    if (data.memberType) {
      var userDetails = {
        password: data.password,
        firstname: data.firstname,
        lastname: data.lastname,
        phone: `+234${data.number.substring(1)}`,
        address: data.address,
        city: data.city,
        state: data.state,
        membershipType: data.memberType.split(" ").join("_"),
        email: data.email,
        profession: {
          isIllustrator: data.illustrator,
          isAuthor: data.author,
        },
      }

      console.log(userDetails)

      try {
        setLoading(true)
        await setTimeout(async () => {
          await handleJoin(userDetails)
        }, 5000)
        navigate(`/welcome`)
      } catch (e) {
        console.log(e.response)
        setServerSideError(e.response.data.message)
        setLoading(false)
      }
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className={styles.join}>
      <FormTitle title="Become a member" />

      {serverSideError ? (
        <span style={{ color: "red" }}>{serverSideError}</span>
      ) : null}

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <StepOne
          currentStep={currentStep}
          register={register}
          watch={watch}
          errors={errors}
        />
        <StepTwo
          currentStep={currentStep}
          register={register}
          errors={errors}
        />
        <StepThree
          currentStep={currentStep}
          register={register}
          watch={watch}
          errors={errors}
          getValues={getValues}
          trigger={trigger}
        />

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
