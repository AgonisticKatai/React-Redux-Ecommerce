import { FETCH_PRODUCT_INIT, FETCH_PRODUCT_SUCCES, FETCH_PRODUCT_FAILURE } from '../actions/types'

import initialState from './initialState'

export default function activeProductReducer (state = initialState.activeProduct, action) {
  switch (action.type) {
    case FETCH_PRODUCT_INIT:
      return {
        ...state,
        error: null,
        loading: true
      }
    case FETCH_PRODUCT_SUCCES:
      return {
        ...state,
        product: action.payload,
        error: null,
        loading: false
      }
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        product: null,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}
