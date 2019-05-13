import axios from "axios"

const BASE_URL = 'http://codefazz.com:3000'

export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = () => {
  return {
    type: FETCH_DATA
  }
}

export const FETCH_LOGIN = 'FETCH_LOGIN'
export const fetchLogin = (email, password) => {
  return {
    type: FETCH_LOGIN,
    payload: apiLogin(email, password)
  }
}

const apiLogin = (email, password) => {
  const url = `${BASE_URL}/api/Users/login`
  const payload = { email, password }

  return axios.post(url, payload)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(error => {
      console.log(error)
    })
}

export const FETCH_SIGNUP = 'FETCH_SIGNUP'
export const fetchSignup = (email, password) => {
  return {
    type: FETCH_SIGNUP,
    payload: apiSignup(email, password)
  }
}

const apiSignup = (email, password) => {
  const url = `${BASE_URL}/api/Users`
  const payload = { email, password }

  return axios.post(url, payload)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(error => {
      console.log(error)
    })
}

export const FETCH_LOGOUT = 'FETCH_LOGOUT'
export const fetchLogout = (token) => {
  return {
    type: FETCH_LOGOUT,
    payload: apiLogout(token)
  }
}

const apiLogout = (token) => {
  const url = `${BASE_URL}/api/Users/logout?access_token=${token}`
  return axios.post(url)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(error => {
      console.log(error)
    })
}