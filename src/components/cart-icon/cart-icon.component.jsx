import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './cart-icon.styles.scss'


const CartIcon = ({itemCount}) => (
  <div className='cart-icon' >
    <FontAwesomeIcon className='shopping-icon' icon={['fal', 'shopping-bag']} />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps)(CartIcon);
