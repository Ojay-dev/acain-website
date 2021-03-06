import React from "react"
import { Link } from "gatsby"
import styles from "./input.module.scss"
import logo from "../svgs/logo-header.svg"

export function Input(props) {
  return (
    <>
      <label htmlFor={`${props.label.toLowerCase()}`}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={`${styles.input} ${
          props.errorStyle ? styles.errorStyle : ""
        }`}
        style={
          props.errorStyle
            ? {
                outline: "none !important",
                border: "1px solid red",
                boxShadow: "0 0 2px red",
              }
            : null
        }
        ref={props.register}
      />
    </>
  )
}

export function CheckboxInput(props) {
  return (
    <>
      <label htmlFor={`${props.label.toLowerCase()}`}>{props.label}</label>

      {props.options.map((option, idx) => (
        <div className={styles.checkboxArea} key={idx}>
          <input
            type="checkbox"
            name={option.name}
            label={option.value}
            ref={props.register}
          />
          <label htmlFor={option.name} className={styles.checkboxArea__label}>
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
      <select
        className={`${styles.input} ${
          props.errorStyle ? styles.errorStyle : ""
        }`}
        name={props.name}
        style={
          props.errorStyle
            ? {
                outline: "none !important",
                border: "1px solid red",
                boxShadow: "0 0 2px red",
              }
            : null
        }
        ref={props.register}
      >
        <option value="">Select...</option>
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
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <h2 className={styles.title}>{props.title}</h2>
    </div>
  )
}
