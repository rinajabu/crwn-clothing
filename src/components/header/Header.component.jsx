import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import './header.styles.scss';
import CartIcon from '../cart-icon/CartIcon.component';
import CartDropdown from '../cart-dropdown/CartDropdown.component';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                { currentUser ?
                    <>
                        <div className='option'>Hi, {currentUser.displayName}</div>
                        <div className='option pointer' onClick={() => auth.signOut()}>SIGN OUT</div>
                    </>
                    : <Link className='option' to ='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            { !hidden && <CartDropdown /> }
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// })

// destructuring objects
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//     currentUser,
//     hidden
// })

// using selectors created by passing state into selectors
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

// createStructuredSelector automatically passes top level state into selectors
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);