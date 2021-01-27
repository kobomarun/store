import React, { Component } from 'react'
import { ProductConsumer } from '../store';

const Cart = () => {
    return (
        <ProductConsumer>
            {value => {
                console.log(value.cart)
            }}
        </ProductConsumer>
    )
}

export default Cart;

