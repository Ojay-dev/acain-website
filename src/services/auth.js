import axios from "axios"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = async loginData => {
  try {
    const resp = await axios.post(
      "http://localhost:4000/api/v1/auth/signin",
      loginData
    )
    const { data } = resp.data
    return setUser(data)
  } catch (e) {
    throw e
  }
}

export const handleJoin = async userData => {
  try {
    const resp = await axios.post(
      "http://localhost:4000/api/v1/auth/signup",
      userData
    )
    const { data } = resp.data
    return setUser(data)
  } catch (e) {
    throw e
  }
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.access_token
}

export const logout = callback => {
  setUser({})
  callback()
}
