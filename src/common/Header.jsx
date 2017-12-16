import React from 'react'
import { Link } from 'react-router'

const Header = () => (
  <div className='navbar navbar-inverse bg-inverse'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>Redux Ecommerce</Link> |
      <Link className='navbar-text' to='/cart'>
        <span className='fa fa-lg fa-shopping-cart' />
      </Link> |
      <Link className='navbar-text' to='/add'>
        <span className='fa fa-lg fa-plus-square' />
      </Link>

    </div>
  </div>
)

export default Header
