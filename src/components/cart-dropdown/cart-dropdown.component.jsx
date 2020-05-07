import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { toggleCheckoutHidden } from '../../redux/cart/cart.actions'


import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, clearItem, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? 
        (
        <TransitionGroup className="todo-list">
          {
            cartItems.map(cartItem => 
              <CSSTransition
                key={cartItem.id}
                timeout={200}
                classNames="item"
              >
                <CartItem key={cartItem.id} item={cartItem} />
              </CSSTransition>
            )
          }
        </TransitionGroup>
        )
        : (
          <span className='empty-message'>Your cart is empty</span>
        )
      }
          
    </div>
    <CustomButton onClick={() => {
      // history.push('/checkout')
      dispatch(toggleCartHidden())
      dispatch(toggleCheckoutHidden())
    }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))