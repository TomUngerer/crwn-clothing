import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { toggleCheckoutHidden } from '../../redux/cart/cart.actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './checkout-section.styles.scss'

const CheckoutSection = ({cartItems, total, dispatch}) => (
  <div className='checkout-section-wrapper'>
    <div className='close' onClick={() => {dispatch(toggleCheckoutHidden())}}>
      <FontAwesomeIcon icon={['fal', 'times']} />
    </div>
    <div className='checkout-section'>
      <h3>Your basket</h3>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Products</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
      <div className='checkout-inner'>
      {
        cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      }
      </div>
      <div className='total'>
        <span>£{total}</span>
      </div>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutSection)