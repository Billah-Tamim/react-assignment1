import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Main.css';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    let newCart = [];
    const getProduct = (product) =>{
        newCart = [...cart, product];
        setCart(newCart);
    }
    const clearCart = () =>{
        newCart= [];
        setCart(newCart);
    }
    const selectOne = () =>{
        const cartLength = cart.length;
        const randomNumber = Math.floor(Math.random()*cartLength);
        newCart = [cart[randomNumber]];
        setCart(newCart);
    }
    return (
        <div className='main'>
            <div className="products-container">
                {
                    products.map(product=> <Product
                    key = {product.id}
                    product = {product}
                    getProduct = {getProduct}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                cart = {cart}
                clearCart = {clearCart}
                selectOne = {selectOne}
                ></Cart>
            </div>
        </div>
    );
};

export default Main;