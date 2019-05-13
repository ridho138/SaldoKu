import axios from "axios"

export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = () => {
  return {
    type: FETCH_DATA
  }
}

export const FETCH_LOGIN = 'FETCH_LOGIN'
export const fetchLogin = () => {
  return {
    type: FETCH_LOGIN,
    payload: apiLogin()
  }
}

const apiLogin = () => {
  const url = "http://codefazz.com:3000/api/Users/login"
  return axios.post(url)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(error => {
      console.log(error)
    })
}

export const FETCH_SIGNUP = 'FETCH_SIGNUP'
export const fetchSignup = () => {
  return {
    type: FETCH_SIGNUP,
    payload: apiSignup()
  }
}

const apiSignup = () => {
  const url = "http://codefazz.com:3000/api/Users"
  return axios.post(url)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(error => {
      console.log(error)
    })
}

export const FETCH_LOGOUT = 'FETCH_LOGOUT'
export const fetchLogout = () => {
  return {
    type: FETCH_LOGOUT,
    payload: apiLogout()
  }
}

const apiLogout = () => {
  const url = "http://codefazz.com:3000/api/Users/logout?access_token=xxxxx"
  return axios.post(url)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(error => {
      console.log(error)
    })
}