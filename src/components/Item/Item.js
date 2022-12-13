import React from 'react';
import './Item.css';

const Item = ({item}) => {
    return (
        <div className='item'>
            <img src={item.img} alt="" />
            <h5>{item.name}</h5>
        </div>
    );
};

export default Item;