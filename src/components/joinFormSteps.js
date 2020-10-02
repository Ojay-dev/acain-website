import React from "react"
import { Input, SelectInput, CheckboxInput } from "../components/input"
import states from "../assets/nigeria-states.json"
import styles from "./joinFormSteps.module.scss"

export function StepOne({ currentStep }) {
  if (currentStep !== 1) {
    return null
  }

  return (
    <React.Fragment>
      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <Input label="Firstname" type="text" placeholder="Firstname" />
        </div>

        <div className={styles.form__input}>
          <Input label="Lastname" type="text" placeholder="Lastname" />
        </div>
      </div>

      <div className={styles.form__input}>
        <Input label="Email" type="email" placeholder="abc@xyz.com" />
      </div>

      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <Input label="Password" type="password" placeholder="Password" />
        </div>
        <div className={styles.form__input}>
          <Input
            label="Confirm Password"
            type="password"
            placeholder="confPassword"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export function StepTwo({ currentStep }) {
  if (currentStep !== 2) {
    return null
  }

  console.log(states)

  return (
    <React.Fragment>
      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <Input label="Address*" type="text" placeholder="" />
        </div>

        <div className={styles.form__input}>
          <Input label="City*" type="text" placeholder="" />
        </div>
      </div>

      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <SelectInput label="State*" options={states} />
        </div>

        <div className={styles.form__input}>
          <Input label="Postal code" type="text" placeholder="" />
        </div>
      </div>

      <div className={styles.form__input}>
        <Input label="Phone Number*" type="number" placeholder="Phone Number" />
      </div>
    </React.Fragment>
  )
}

export function StepThree({ currentStep }) {
  if (currentStep !== 3) {
    return null
  }

  return (
    <React.Fragment>
      <div className={styles.form__input}>
        <SelectInput
          label="Membership type*"
          options={[
            { code: 1, name: "Associate Membership" },
            { code: 2, name: "Full Membership" },
          ]}
        />
      </div>

      <div className={styles.form__input}>
        <CheckboxInput
          label="How do you identify yourself*"
          options={[
            { name: "author", value: "An Author" },
            { name: "illustrator", value: "An Illustrator" },
          ]}
        />
      </div>
    </React.Fragment>
  )
}
