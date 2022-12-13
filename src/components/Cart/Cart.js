import React from 'react';
import Item from '../Item/Item';
import './Cart.css';

const Cart = ({cart, clearCart, selectOne}) => {
    
    return (
        <div className='cart'>
            <h2>Selected Clothes</h2>
            <div className="item-details">
            {
                cart.map(item => <Item
                item = {item}
                ></Item>)
            }
            </div>
            <button onClick={selectOne} className='first-btn'>CHOOSE 1 FOR ME</button><br />
            <button onClick={clearCart}  className='second-btn'>CHOOSE AGAIN</button>
            
        </div>
    );
};

export default Cart;