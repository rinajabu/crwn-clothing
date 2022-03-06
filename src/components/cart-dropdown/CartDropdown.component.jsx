import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton.component'
import CartItem from '../cart-item/CartItem.component'
import { useNavigate } from 'react-router-dom'

const CartDropdown = ({ cartItems, dispatch }) => {

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
            <CustomButton onClick={() => {
                navigate('/checkout');
                dispatch(toggleCartHidden());
            }}>
                GO TO CHECKOUT
                </CustomButton>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

// if no second argument (mapDispatchToProps) is passed into connect, redux automatically makes dispatch accessible to the component, see above
export default connect(mapStateToProps)(CartDropdown);