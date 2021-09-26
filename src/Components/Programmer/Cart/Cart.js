import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart= props.cart;
    let total = 0;
    for(const programmer of cart){
        total = total + programmer.salary;
    }
    return (
        <div className="cart">
            <h5><i className="fas fa-users"></i>  Member Added: {cart.length} </h5>
            <h5>Total Cost: $ {total} </h5>
        </div>
    );
};

export default Cart;