import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ProductList from './ProductList'
import * as productActions from '../actions/productActions'
import * as cartActions from '../actions/cartActions'

class productListContainer extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleOnAddItem = this.handleOnAddItem.bind(this)
  }

  async componentWillMount () {
    await this.props.productActions.fetchProducts()
  }

  handleOnAddItem (item) {
    this.props.cartActions.addCartItem(item)
  }

  render () {
    return (
      <ProductList
        products={this.props.products}
        loading={this.props.loading}
        onAddItem={this.handleOnAddItem}
      />
    )
  }
}

productListContainer.defaultProps = {
  products: []
}

productListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  productActions: PropTypes.objectOf(PropTypes.func).isRequired,
  cartActions: PropTypes.objectOf(PropTypes.func).isRequired
}

function mapStateToProps (state) {
  return {
    products: state.productList.products,
    loading: state.productList.loading
  }
}

function dispatchToProps (dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, dispatchToProps)(productListContainer)
