import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCES,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_INIT,
  FETCH_PRODUCT_SUCCES,
  FETCH_PRODUCT_FAILURE,
  SAVE_PRODUCT_INIT,
  SAVE_PRODUCT_SUCCES,
  SAVE_PRODUCT_FAILURE
} from './types'

import API from '../api'

export function fetchProductsSucces (products) {
  return {
    type: FETCH_PRODUCTS_SUCCES,
    payload: products
  }
}

export function fetchProductsFailure (error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export function fetchProductSucces (product) {
  return {
    type: FETCH_PRODUCT_SUCCES,
    payload: product
  }
}

export function fetchProductFailure (error) {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  }
}

export function saveProductSucces (product) {
  return {
    type: SAVE_PRODUCT_SUCCES,
    payload: product
  }
}

export function saveProductFailure (error) {
  return {
    type: SAVE_PRODUCT_FAILURE,
    payload: error
  }
}

export function fetchProducts () {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_PRODUCTS_INIT
      }
    })
    try {
      const data = await API.products.getAll()
      return dispatch(fetchProductsSucces(data.products))
    } catch (error) {
      return dispatch(fetchProductsFailure(error))
    }
  }
}

export function fetchProduct (productId) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_PRODUCT_INIT
      }
    })
    try {
      const data = await API.products.getSingle(productId)
      return dispatch(fetchProductSucces(data.product))
    } catch (error) {
      return dispatch(fetchProductFailure(error))
    }
  }
}

export function saveProduct (product) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: SAVE_PRODUCT_INIT
      }
    })
    try {
      await API.products.save(product)
      return dispatch(saveProductSucces())
    } catch (error) {
      return dispatch(saveProductFailure(error))
    }
  }
}
