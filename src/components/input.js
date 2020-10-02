import React from "react"
import styles from "./input.module.scss"
import logo from "../svgs/logo-header.svg"

export function Input(props) {
  return (
    <>
      <label htmlFor={`${props.label.toLowerCase()}`}>{props.label}</label>
      <input
        type={`${props.type}`}
        name={`${props.label.toLowerCase()}`}
        placeholder={props.placeholder}
        className={styles.input}
      />
    </>
  )
}

export function CheckboxInput(props) {
  return (
    <>
      <label htmlFor={`${props.label.toLowerCase()}`}>{props.label}</label>

      {props.options.map((option, idx) => (
        <div className={styles.checkboxArea}>
          <input type="checkbox" name={option.name} value={option.name} />
          <label for="vehicle1" className={styles.checkboxArea__label}>
            {option.value}
          </label>
        </div>
      ))}
    </>
  )
}

export function SelectInput(props) {
  return (
    <>
      <label htmlFor={`${props.label.toLowerCase()}`}>{props.label}</label>
      <select className={styles.input}>
        <option value="Select..." selected="selected" disabled>
          Select...
        </option>
        {props.options.map(option => (
          <option value={option.name.toLowerCase()} key={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  )
}

export function SubmitInput(props) {
  return (
    <div className={styles.submit}>
      <input
        type="submit"
        value={props.value}
        className={styles.submit__input}
      />
    </div>
  )
}

export function FormTitle(props) {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      <h2 className={styles.title}>{props.title}</h2>
    </div>
  )
}
