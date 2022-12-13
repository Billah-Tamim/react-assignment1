import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Product = ({product, getProduct}) => {
    return (
        <div className='product-box'>
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <h5>Price: ${product.price}</h5>
            <button onClick={()=> getProduct(product)} className='product-btn'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;