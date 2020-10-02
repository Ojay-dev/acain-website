import React, { Component } from "react"
import { Link } from "gatsby"
import { FormTitle } from "../components/input"
import { StepOne, StepTwo, StepThree } from "../components/joinFormSteps"
import styles from "./join.module.scss"

class Join extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1, // Default is Step 1
      email: "",
      username: "",
      password: "",
    }

    // Bind new functions for next and previous
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep,
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep,
    })
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className={`${styles.join__nxtbutton} ${
            currentStep === 3 ? styles.join__btnMarginRightZero : ""
          }`}
          onClick={this._prev}
        >
          Previous
        </button>
      )
    }
    // ...else return nothing
    return null
  }

  get nextButton() {
    let currentStep = this.state.currentStep
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <button className={`${styles.join__nxtbutton} ${currentStep=== 1 ? styles.join__btnMarginRightZero  : ""} `} onClick={this._next}>
          Next
        </button>
      )
    }
    // ...else render nothing
    return null
  }

  handleSubmit = event => {
    event.preventDefault()
    // const { email, username, password } = this.state
    // alert(`Your registration detail: \n
    //   Email: ${email} \n
    //   Username: ${username} \n
    //   Password: ${password}`)
  }

  render() {
    return (
      <div className={styles.join}>
        <FormTitle title="Become a member" />

        <form className={styles.form} onSubmit={this.handleSubmit}>
          <StepOne currentStep={this.state.currentStep} />
          <StepTwo currentStep={this.state.currentStep} />
          <StepThree currentStep={this.state.currentStep} />

          {/* <Submit value="Sign in" /> */}

          <div className={styles.join__buttonArea}>
            <Link to="sign-in" className={styles.join__link}>
              Sign in instead
            </Link>
            <div>
              {this.previousButton}
              {this.nextButton}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Join
