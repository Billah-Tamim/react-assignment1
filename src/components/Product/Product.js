import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product);
    return (
        <div className='product-box'>
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
        </div>
    );
};

export default Product;