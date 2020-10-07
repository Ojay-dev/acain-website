import React from "react"
import { Input, SelectInput, CheckboxInput } from "../components/input"
import states from "../assets/nigeria-states.json"
import styles from "./joinFormSteps.module.scss"

export function StepOne({ currentStep, register, watch, errors }) {
  return (
    <div className={currentStep !== 1 ? styles.none : ""}>
      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <Input
            label="First Name*"
            name="firstname"
            type="text"
            placeholder="First Name"
            register={register({
              required: true,
              validate: value => {
                return !!value.trim()
              },
            })}
            errorStyle={errors.firstname}
          />
          {errors.firstname && (
            <span role="alert" className={styles.form__error}>
              First name is required!
            </span>
          )}
        </div>

        <div className={styles.form__input}>
          <Input
            label="Last Name*"
            name="lastname"
            type="text"
            placeholder="Last Name"
            register={register({
              required: true,
              validate: value => {
                return !!value.trim()
              },
            })}
            errorStyle={errors.lastname}
          />
          {errors.lastname && (
            <span role="alert" className={styles.form__error}>
              Last name is required!
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
          <span role="alert" className={styles.form__error}>
            Email is required!
          </span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span role="alert" className={styles.form__error}>
            {errors.email.message}
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
            register={register({
              required: true,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?.&])[A-Za-z\d@$!%*.#?&]{8,20}$/,
                message: "Password must be 8-20 characters long, and must contain at least one letter, one number and one special character"
              },
            })}
            errorStyle={errors.password}
          />
          {errors.password && errors.password.type === "pattern" && (
            <span role="alert" className={styles.form__error}>
              {errors.password.message}
            </span>
          )}
          {/* {errors.password && errors.password.type === "minLength" && (
            <span role="alert" className={styles.form__error}>
              Password must be atleast 8 characters!
            </span>
          )} */}
        </div>
        <div className={styles.form__input}>
          <Input
            label="Confirm Password*"
            name="confPassword"
            type="password"
            placeholder="Confirm Password"
            register={register({
              validate: value => value === watch("password"),
            })}
            errorStyle={errors.confPassword}
          />
          {errors.confPassword && errors.confPassword.type === "validate" && (
            <span role="alert" className={styles.form__error}>
              You have to verify the exact password!
            </span>
          )}
          {/* {errors.confPassword && errors.confPassword.type === "minLength" && (
            <span role="alert" className={styles.form__error}>
              Password must be atleast 8 characters
            </span>
          )} */}
        </div>
      </div>
    </div>
  )
}

export function StepTwo({ currentStep, register, errors }) {
  return (
    <div className={currentStep !== 2 ? styles.none : ""}>
      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <Input
            label="Address*"
            name="address"
            type="text"
            placeholder=""
            register={
              currentStep === 2
                ? register({
                    required: true,
                    validate: value => {
                      return !!value.trim()
                    },
                  })
                : null
            }
            errorStyle={errors.address}
          />
          {errors.address && errors.address.type === "required" && (
            <span role="alert" className={styles.form__error}>
              Address is required!
            </span>
          )}
        </div>

        <div className={styles.form__input}>
          <Input
            label="City*"
            name="city"
            type="text"
            placeholder=""
            register={
              currentStep === 2
                ? register({
                    required: true,
                    validate: value => {
                      return !!value.trim()
                    },
                  })
                : null
            }
            errorStyle={errors.city}
          />
          {errors.city && errors.city.type === "required" && (
            <span role="alert" className={styles.form__error}>
              City is required!
            </span>
          )}
        </div>
      </div>

      <div className={styles.form__row}>
        <div className={styles.form__input}>
          <SelectInput
            label="State of Residence*"
            name="state"
            options={states}
            register={
              currentStep === 2
                ? register({
                    required: true,
                    validate: value => {
                      return !!value.trim()
                    },
                  })
                : null
            }
            errorStyle={errors.state}
          />
          {errors.state && errors.state.type === "required" && (
            <span role="alert" className={styles.form__error}>
              State is required!
            </span>
          )}
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
          register={
            currentStep === 2
              ? register({
                  required: true,
                  validate: value => {
                    return !!value.trim()
                  },
                  pattern: {
                    value: /^[0-9]{11}/,
                    message: "Invalid phone number!",
                  },
                })
              : null
          }
          errorStyle={errors.number}
        />
        {errors.number && errors.number.type === "required" && (
          <span role="alert" className={styles.form__error}>
            Phone number is required!
          </span>
        )}
        {errors.number && errors.number.type === "pattern" && (
          <span role="alert" className={styles.form__error}>
            {errors.number.message}
          </span>
        )}
      </div>
    </div>
  )
}

export function StepThree({ currentStep, watch, register, errors }) {
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
          register={
            currentStep === 3
              ? register({
                  required: true,
                  validate: value => {
                    return !!value.trim()
                  },
                })
              : null
          }
          errorStyle={errors.memberType}
        />
        {errors.memberType && errors.memberType.type === "required" && (
          <span role="alert" className={styles.form__error}>
            Select a Membership type!
          </span>
        )}
      </div>

      <div className={styles.form__input}>
        <CheckboxInput
          label="How do you identify yourself*"
          options={[
            { name: "author", value: "An Author" },
            { name: "illustrator", value: "An Illustrator" },
          ]}
          register={register}
          // errorStyle={errors.author && errors.illustrator}
        />
        {errors.author && errors.illustrator && (
          <span role="alert" className={styles.form__error}>
            Identify your category (one or more)!
          </span>
        )}
      </div>
    </div>
  )
}
