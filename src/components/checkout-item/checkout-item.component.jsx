import React from 'react'
import { connect } from 'react-redux'

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

import { ReactComponent as AngleLeftLight } from '../../assets/angle-left-light.svg';
import { ReactComponent as AngleRightLight } from '../../assets/angle-right-light.svg';
import { ReactComponent as TrashAltLight } from '../../assets/trash-alt-light.svg';

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)} >
          <AngleLeftLight className='icon' />
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)} >
          <AngleRightLight className='icon' />
        </div>
      </span>
      <span className='price'>£{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}><TrashAltLight className='icon' /></div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)