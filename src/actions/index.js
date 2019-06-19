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

export const FETCH_DATA_INCOME_LIST = 'FETCH_DATA_INCOME_LIST'
export const fetchDataIncomeList = token => {
  return {
    type: FETCH_DATA_INCOME_LIST,
    payload: getIncomeList(token)
  }
}

const getIncomeList = token => {
  const ApiUrl = `http://codefazz.com:3000/api/incomes?access_token=${token}`
  return axios.get(ApiUrl)
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(error => {
      console.log(error)
    })
}

export const FETCH_DATA_INCOME_ADD = 'FETCH_DATA_INCOME_ADD'
export const fetchDataIncomeAdd = (token, label, amount, organization) => {
  return {
    type: FETCH_DATA_INCOME_ADD,
    payload: postIncomeAdd(token, label, amount, organization)
  }
}

const postIncomeAdd = (token, label, amount, organization) => {
  const ApiUrl = `http://codefazz.com:3000/api/incomes?access_token=${token}`
  const payload = { label, amount, organization}
  return axios.post(ApiUrl, payload)
    .then(res => {
      console.log(res)
      return {
        status: res.status,
        dataPayload: { label, amount, organization }
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export const FETCH_DATA_SPENDING = 'FETCH_DATA_SPENDING'
export const fetchDataSpending = token => {
  return {
    type: FETCH_DATA_SPENDING,
    payload: getSpendingList(token)
  }
}

const getSpendingList = token => {
  const ApiUrl = `http://codefazz.com:3000/api/spendings?access_token=${token}`
  return axios.get(ApiUrl)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const FETCH_DATA_SPENDING_ADD = 'FETCH_DATA_SPENDING_ADD'
export const fetchDataSpendingAdd = (token, label, amount) => {
  return {
    type: FETCH_DATA_SPENDING_ADD,
    payload: postSpendingAdd(token, label, amount)
  }
}

const postSpendingAdd = (token, label, amount) => {
  const ApiUrl = `http://codefazz.com:3000/api/spendings?access_token=${token}`
  const payload = { label, amount }
  return axios.post(ApiUrl, payload)
    .then(res => {
      console.log(res)
      return {
        status: res.status,
        dataPayload: { label, amount }
      }
    })
    .catch(err => {
      console.log(err)
    })
}

