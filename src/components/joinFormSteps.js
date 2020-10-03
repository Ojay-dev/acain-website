import React from "react"
import { Input, SelectInput, CheckboxInput } from "../components/input"
import states from "../assets/nigeria-states.json"
import styles from "./joinFormSteps.module.scss"

export function StepOne({ currentStep, register, errors }) {
  return (
    <div className={currentStep !== 1 ? styles.none : ""}>
      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <Input
            label="First Name*"
            name="firstname"
            type="text"
            placeholder="First Name"
            register={register({ required: true })}
            errorStyle={errors.firstname}
          />
          {errors.firstname && (
            <span role="alert" className={styles.form__error}>
              First name is required
            </span>
          )}
        </div>

        <div className={styles.form__input}>
          <Input
            label="Last Name*"
            name="lastname"
            type="text"
            placeholder="Last Name"
            register={register({ required: true })}
            errorStyle={errors.lastname}
            />
            {errors.lastname && (
              <span role="alert" className={styles.form__error}>
                Last name is required
              </span>
            )}
        </div>
      </div>

      <div className={styles.form__input}>
        <Input
          label="Email*"
          name="email"
          type="email"
          placeholder="abc@xyz.com"
          register={register({ required: true })}
          errorStyle={errors.email}
          />
          {errors.email && (
            <span role="alert" className={styles.form__error}>
              Email is required
            </span>
          )}
      </div>

      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <Input
            label="Password*"
            name="password"
            type="password"
            placeholder="Password"
            register={register({ required: true })}
            errorStyle={errors.password}
            />
            {errors.password && (
              <span role="alert" className={styles.form__error}>
                Password is required
              </span>
            )}
        </div>
        <div className={styles.form__input}>
          <Input
            label="Confirm Password*"
            name="confPassword"
            type="password"
            placeholder="Confirm Password"
            register={register({ required: true })}
            errorStyle={errors.confPassword}
            />
            {errors.confPassword && (
              <span role="alert" className={styles.form__error}>
                You have to verify your password
              </span>
            )}
        </div>
      </div>
    </div>
  )
}

export function StepTwo({ currentStep, register }) {
  return (
    <div className={currentStep !== 2 ? styles.none : ""}>
      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <Input
            label="Address*"
            name="address"
            type="text"
            placeholder=""
            register={register}
          />
        </div>

        <div className={styles.form__input}>
          <Input
            label="City*"
            name="city"
            type="text"
            placeholder=""
            register={register}
          />
        </div>
      </div>

      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <SelectInput
            label="State*"
            name="state"
            options={states}
            register={register}
          />
        </div>

        <div className={styles.form__input}>
          <Input
            label="Postal code"
            name="postalCode"
            type="text"
            placeholder=""
            register={register}
          />
        </div>
      </div>

      <div className={styles.form__input}>
        <Input
          label="Phone Number*"
          name="number"
          type="number"
          placeholder="Phone Number"
          register={register}
        />
      </div>
    </div>
  )
}

export function StepThree({ currentStep, register }) {
  return (
    <div className={currentStep !== 3 ? styles.none : ""}>
      <div className={styles.form__input}>
        <SelectInput
          label="Membership type*"
          name="memberType"
          options={[
            { code: 1, name: "Associate Membership" },
            { code: 2, name: "Full Membership" },
          ]}
          register={register}
        />
      </div>

      <div className={styles.form__input}>
        <CheckboxInput
          label="How do you identify yourself*"
          options={[
            { name: "author", value: "An Author" },
            { name: "illustrator", value: "An Illustrator" },
          ]}
          register={register}
        />
      </div>
    </div>
  )
}
