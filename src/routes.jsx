import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import ProductListContainer from './products/ProductListContainer'
import ProductDetailContainer from './products/ProductDetailContainer'
import ProductAddContainer from './products/ProductAddContainer'
import CartContainer from './cart/CartContainer'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ProductListContainer} />
    <Route path='/cart' component={CartContainer} />
    <Route path='/detail/:productId' component={ProductDetailContainer} />
    <Route path='/add' component={ProductAddContainer} />
  </Route>
)
