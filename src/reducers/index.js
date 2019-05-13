import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { 
  FETCH_DATA,
  FETCH_SIGNUP,
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
  data: {}
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
        data: action.payload
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

// Second challenge
// Login dan Logout


const rootReducer = combineReducers({
  data,
  dataSignup
})

export default rootReducer
