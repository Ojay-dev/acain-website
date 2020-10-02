import React from "react"
import styles from "./input.module.scss"
import logo from "../svgs/logo-header.svg"

export function Input(props) {
  return (
    <>
      <label htmlFor={`${props.label.toLowerCase()}`}>
        {props.label}
      </label>
      <input
        type={`${props.type}`}
        name={`${props.label.toLowerCase()}`}
        placeholder={props.placeholder}
        className={styles.input}
      />

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
