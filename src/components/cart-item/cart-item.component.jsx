import React from 'react'
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './cart-item.styles.scss';

const CartItem = ({item, dispatch}) => {
  const { imageUrl, price, name, quantity } = item
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x £{price}
        </span>
        <span className='remove-button' onClick={() => dispatch(clearItemFromCart(item))}>
          <FontAwesomeIcon icon={['fal', 'trash-alt']} />
        </span>
      </div>
    </div>
  )
}

export default connect()(CartItem)