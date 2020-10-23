import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import imageCompression from "browser-image-compression"
import axios from "axios"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"

import { getUser } from "../services/auth"
import states from "../assets/nigeria-states.json"
import Layout from "./layout"
import Loader from "./loader"
import Title from "./page-title"
import styles from "./profile.module.scss"
// import upload from "../svgs/upload.svg"
import avatar from "../svgs/avatar.svg"
import edit from "../svgs/baseline-edit-24px.svg"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function () {
  const { register, handleSubmit, reset, errors } = useForm({
    mode: "onBlur",
  })
  const [profile, setProfile] = useState()
  const [loading, setLoading] = useState(true)
  const [image, setImage] = useState({ preview: "", raw: "" })
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  })
  const { access_token } = getUser()
  const classes = useStyles()

  const config = {
    headers: { Authorization: `Bearer ${access_token}` },
  }

  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/profile",
          config
        )
        const { data } = response.data
        console.log(data)
        setProfile(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    })()
    /* eslint-disable */
  }, [])

  useEffect(() => {
    console.log(!!profile)

    if (profile) {
      reset({
        firstname: profile.firstname,
        lastname: profile.lastname,
        phone: `0${profile.phone.substring(4)}`,
        address: profile.address,
        city: profile.city,
        email: profile.email,
        organisation: profile.organisation,
        about: profile.about,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        instagram: profile.instagram,
        website: profile.website,
      })
    }
  }, [profile])

  const handleCloseSnackbar = () => {
    setOpenSnackbar({ ...openSnackbar, open: false })
  }
  const handleOpenSnackbar = newState => {
    setOpenSnackbar({ open: true, ...newState })
  }

  const handleChange = async e => {
    if (e.target.files.length) {
      const imageFile = e.target.files[0]
      const options = {
        maxSizeMB: 2,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      }
      try {
        const compressedFile = await imageCompression(imageFile, options)

        setImage({
          preview: URL.createObjectURL(compressedFile),
          raw: compressedFile,
        })
        //

        // console.log(response)
      } catch (error) {
        console.log(error.response)
      }
    }
  }

  const updateProfile = async profileData => {
    console.log(profileData)
    let imageResponse
    let response
    try {
      if (image.raw) {
        setLoading(true)
        const formData = new FormData()
        formData.append("avatar", image.raw)

        imageResponse = await axios.put(
          "http://localhost:4000/api/v1/profile/avatar",
          formData,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        console.log(imageResponse)
      }

      if (Object.keys(profileData).length > 0) {
        setLoading(true)
        response = await axios.put(
          "http://localhost:4000/api/v1/profile",
          profileData,
          config
        )
        console.log(response)
      }

      if (Object.keys(profileData).length < 1 && !image.raw) {
        handleOpenSnackbar({
          message: "No Changes has been made!",
          severity: "error",
        })
      }

      if (imageResponse || response) {
        setLoading(false)
        location.reload();
        handleOpenSnackbar({
          message: "Profile updated!",
          severity: "success",
        })

      }
    } catch (error) {
      setLoading(false)
      console.log(error.response)
      const { data } = error.response
      console.log(data)
      handleOpenSnackbar({
        message: data.message,
        severity: "error",
      })
    }
  }

  const onSubmit = data => {
    // console.log(data)
    let profileData = {}

    if (data.firstname !== profile.firstname) {
      profileData["firstname"] = data.firstname
    }

    if (data.lastname !== profile.lastname) {
      profileData["lastname"] = data.lastname
    }

    if (data.address !== profile.address) {
      profileData["address"] = data.address
    }

    if (data.city !== profile.city) {
      profileData["city"] = data.city
    }
    if (data.state !== profile.state) {
      profileData["state"] = data.state
    }

    if (data.facebook) {
      profileData["facebook"] = data.facebook
    }

    if (data.twitter && data.twitter !== profile.twitter) {
      profileData["twitter"] = data.twitter
    }

    if (data.linkedin && data.linkedin !== profile.linkedin) {
      profileData["linkedin"] = data.linkedin
    }

    if (data.instagram && data.instagram !== profile.instagram) {
      profileData["instagram"] = data.instagram
    }

    if (data.website && data.website !== profile.website) {
      profileData["website"] = data.website
    }

    if (data.organisation !== profile.organisation) {
      profileData["organisation"] = data.organisation
    }

    if (data.about !== profile.about) {
      profileData["about"] = data.about
    }
    updateProfile(profileData)
  }

  const Avatar = () => {
    if (image.preview) {
      return (
        <img
          // src={image.preview ? image.preview : avatar}
          src={image.preview}
          alt="upload icon"
          className={styles.profile__avatar}
        />
      )
    }

    if (profile && profile.avatar) {
      return (
        <img
          // src={image.preview ? image.preview : avatar}
          src={profile.avatar}
          alt="upload icon"
          className={styles.profile__avatar}
        />
      )
    }

    return (
      <img
        // src={image.preview ? image.preview : avatar}
        src={avatar}
        alt="upload icon"
        className={styles.profile__avatar}
      />
    )
  }

  if (loading) {
    return <Loader />
  }

  return (
    <Layout>
      <Title>Profile</Title>
      <form className={styles.profile} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.header}>Basic Info</h3>
        <div className={styles.profile__segment}>
          <div className={styles.profile__avatrCropper}>
            <Avatar />
            <label htmlFor="upload-button">
              <div className={styles.profile__uploadBtn}>
                <img src={edit} alt="" style={{ width: "60%" }} />
              </div>
            </label>
            <input
              type="file"
              name="avatar"
              id="upload-button"
              style={{ display: "none" }}
              onChange={handleChange}
            />
          </div>

          <div>
            <div className={styles.profile__row}>
              <div className={styles.profile__item}>
                <label htmlFor="firstname" className={styles.profile__label}>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className={styles.profile__input}
                  // value={profile && profile.firstname}
                  ref={register({
                    validate: value => {
                      return !!value.trim()
                    },
                  })}
                />
              </div>

              <div className={styles.profile__item}>
                <label htmlFor="lastname" className={styles.profile__label}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  // value={profile && profile.lastname}
                  className={styles.profile__input}
                  ref={register({
                    validate: value => {
                      return !!value.trim()
                    },
                  })}
                />
              </div>

              <div className={styles.profile__item}>
                <label htmlFor="phone" className={styles.profile__label}>
                  Phone. No
                </label>
                <input
                  type="number"
                  name="phone"
                  // value={profile && `0${profile.phone.substring(4)}`}
                  className={styles.profile__input}
                  ref={register({
                    validate: value => {
                      return !!value.trim()
                    },
                  })}
                  disabled
                />
              </div>

              <div className={styles.profile__item}>
                <label htmlFor="address" className={styles.profile__label}>
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  className={styles.profile__input}
                  ref={register({
                    validate: value => {
                      return !!value.trim()
                    },
                  })}
                />
              </div>

              <div className={styles.profile__item}>
                <label htmlFor="city" className={styles.profile__label}>
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  className={styles.profile__input}
                  ref={register({
                    validate: value => {
                      return !!value.trim()
                    },
                  })}
                />
              </div>

              <div className={styles.profile__item}>
                <label htmlFor="state" className={styles.profile__label}>
                  State
                </label>
                <select
                  type="text"
                  name="state"
                  className={styles.profile__input}
                  ref={register({
                    validate: value => {
                      return !!value.trim()
                    },
                  })}
                >
                  <option
                    value={profile && profile.state}
                    style={{ textTransform: "capitalize" }}
                  >
                    {profile ? profile.state : "Select..."}
                  </option>
                  {states.map(option => (
                    <option value={option.name.toLowerCase()} key={option.code}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.profile__item}>
              <label htmlFor="organisation" className={styles.profile__label}>
                Your Organisation
              </label>
              <input
                type="text"
                name="organisation"
                className={styles.profile__input}
                placeholder="Enter the name of your Organisation"
                ref={register}
              />
            </div>

            <div className={styles.profile__item}>
              <label htmlFor="email" className={styles.profile__label}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className={styles.profile__input}
                ref={register}
                disabled
              />
            </div>

            <div className={styles.profile__item}>
              <label htmlFor="about" className={styles.profile__label}>
                About Me
              </label>
              <textarea
                name="about"
                className={styles.profile__textarea}
                placeholder="I am an author with the passion for writing..."
                ref={register}
              />
            </div>
          </div>
        </div>

        <h3 className={styles.header}>Social</h3>
        <div className={styles.profile__segment}>
          <div className={styles.profile__item}>
            <label htmlFor="twitter">Twitter Profile </label>
            <input
              type="text"
              name="twitter"
              placeholder="https://twitter.com/johndoe"
              className={styles.profile__input}
              ref={register({
                pattern: {
                  /* eslint-disable */
                  value: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/gi,
                  message: "Twitter link must be a valid URL",
                },
              })}
              style={
                errors.twitter
                  ? {
                      outline: "none !important",
                      border: "1px solid red",
                      boxShadow: "0 0 2px red",
                    }
                  : null
              }
            />
            {errors.twitter && errors.twitter.type === "pattern" && (
              <span role="alert" className={styles.profile__error}>
                {errors.twitter.message}
              </span>
            )}
          </div>

          <div className={styles.profile__item}>
            <label htmlFor="facebook">Facebook Profile</label>
            <input
              type="text"
              name="facebook"
              value={profile && profile.facebook}
              placeholder="https://facebook.com/johndoe"
              className={styles.profile__input}
              ref={register({
                pattern: {
                  /* eslint-disable */
                  value: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/gi,
                  message: "Facebook link must be a valid URL",
                },
              })}
              style={
                errors.facebook
                  ? {
                      outline: "none !important",
                      border: "1px solid red",
                      boxShadow: "0 0 2px red",
                    }
                  : null
              }
            />
            {errors.facebook && errors.facebook.type === "pattern" && (
              <span role="alert" className={styles.profile__error}>
                {errors.facebook.message}
              </span>
            )}
          </div>

          <div className={styles.profile__item}>
            <label htmlFor="linkedin">Linkedin Profile</label>
            <input
              type="text"
              name="linkedin"
              value={profile && profile.linkedin}
              placeholder="https://linkedin.com/john"
              className={styles.profile__input}
              ref={register({
                pattern: {
                  /* eslint-disable */
                  value: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/gi,
                  message: "Linkedin link must be a valid URL",
                },
              })}
              style={
                errors.linkedin
                  ? {
                      outline: "none !important",
                      border: "1px solid red",
                      boxShadow: "0 0 2px red",
                    }
                  : null
              }
            />
            {errors.linkedin && errors.linkedin.type === "pattern" && (
              <span role="alert" className={styles.profile__error}>
                {errors.linkedin.message}
              </span>
            )}
          </div>

          <div className={styles.profile__item}>
            <label htmlFor="instagram">Instagram Profile</label>
            <input
              type="text"
              name="instagram"
              value={profile && profile.instagram}
              placeholder="https://instagram.com/john_doe"
              className={styles.profile__input}
              ref={register({
                pattern: {
                  /* eslint-disable */
                  value: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/gi,
                  message: "instagram link must be a valid URL",
                },
              })}
              style={
                errors.instagram
                  ? {
                      outline: "none !important",
                      border: "1px solid red",
                      boxShadow: "0 0 2px red",
                    }
                  : null
              }
            />
            {errors.instagram && errors.instagram.type === "pattern" && (
              <span role="alert" className={styles.profile__error}>
                {errors.instagram.message}
              </span>
            )}
          </div>

          <div className={styles.profile__item}>
            <label htmlFor="website">Website url</label>
            <input
              type="text"
              name="website"
              value={profile && profile.website}
              placeholder="https://www.johndoe.com"
              className={styles.profile__input}
              ref={register({
                pattern: {
                  /* eslint-disable */
                  value: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/gi,
                  message: "website link must be a valid URL",
                },
              })}
              style={
                errors.website
                  ? {
                      outline: "none !important",
                      border: "1px solid red",
                      boxShadow: "0 0 2px red",
                    }
                  : null
              }
            />
            {errors.website && errors.website.type === "pattern" && (
              <span role="alert" className={styles.form__error}>
                {errors.website.message}
              </span>
            )}
          </div>
        </div>

        <input
          type="submit"
          value="Update"
          className={styles.profile__submit}
        />
      </form>
      <div className={classes.root}>
        <Snackbar
          open={openSnackbar.open}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity={openSnackbar.severity}>
            {openSnackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </Layout>
  )
}
