import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { 
  FETCH_DATA,
  FETCH_SIGNUP,
  FETCH_LOGIN,
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

// emailProps: state.dataSignup.email,
//     tokenProps: state.dataSignup.id,
//     isLoadingProps: state.dataSignup.isLoading

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

const rootReducer = combineReducers({
  data,
  dataSignup,
  dataLogin
})

export default rootReducer
