import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CartItemList from './CartItemList'
import * as cartActions from '../actions/cartActions'

class CartContainer extends Component {
  constructor (props) {
    super(props)

    this.handleOnRemoveItem = this.handleOnRemoveItem.bind(this)
  }

  componentWillMount () {
    this.props.actions.loadCartItems()
  }

  handleOnRemoveItem (itemId) {
    this.props.actions.removeCartItem(itemId)
  }

  render () {
    return (
      <section className='container'>
        <CartItemList
          items={this.props.items}
          onRemoveItem={this.handleOnRemoveItem}
        />
        <hr />
        <div className='row'>
          <p>Total: <strong>{this.props.total} &euro;</strong></p>
        </div>
      </section>
    )
  }
}

CartContainer.defaultProps = {
  items: [],
  total: 0
}

CartContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number
}

function mapStateToProps (state) {
  return {
    items: state.cart.items,
    total: state.cart.total
  }
}

function dispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, dispatchToProps)(CartContainer)
