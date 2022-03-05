import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton.component'
import CartItem from '../cart-item/CartItem.component'
import { useNavigate } from 'react-router-dom'

const CartDropdown = ({ cartItems }) => {

    const navigate = useNavigate()

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { cartItems.length ?
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    : <span className="empty-message">Your cart is empty.</span>
                }
            </div>
            <CustomButton onClick={() => navigate('/checkout')}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);