import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { 
  FETCH_DATA,
  FETCH_SIGNUP,
  FETCH_LOGIN,
  FETCH_DATA_INCOME_LIST,
} from '../actions/index'

const data = (state = {
  items: '',
}, action) => {
  switch (action.type){
    case `${FETCH_DATA}`: 
      return {
        ...state,
        items: 'This is data from redux'
      }

    default: 
      return state
  }
}

const dataSignup = (state = {
  isLoading: false,
  id: '',
  email: ''
}, action) => {
  switch (action.type){
    case `${FETCH_SIGNUP}_${PENDING}`:
      return {
        ...state,
        isLoading: true
      }

    case `${FETCH_SIGNUP}_${FULFILLED}`:
      return {
        ...state,
        isLoading: false,
        email: action.payload.email,
        id: action.payload.id,
      }

    case `${FETCH_SIGNUP}_${REJECTED}`:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

const dataLogin = (state={
  isLoading: false,
  data: {}
}, action) => {
  switch (action.type){
    case `${FETCH_LOGIN}_${PENDING}`:
      return {
        ...state,
        isLoading: true,
      }

    case `${FETCH_LOGIN}_${FULFILLED}`:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }

    case `${FETCH_LOGIN}_${REJECTED}`:
      return {
        ...state,
        isLoading: false
      }

   
    default:
      return state
  }
}

const dataIncome = (state = {
  isFetching: false,
  data: []
}, action) => {
  switch (action.type){
    case `${FETCH_DATA_INCOME_LIST}_${PENDING}`:
      return {
        ...state,
        isFetching: true
      }

    case `${FETCH_DATA_INCOME_LIST}_${FULFILLED}`:
      console.log(action.payload)
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }

    case `${FETCH_DATA_INCOME_LIST}_${REJECTED}`:
      return {
        isFetching: false,
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  data,
  dataSignup,
  dataLogin,
  dataIncome
})

export default rootReducer
