import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, ratings, } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price : ${price}</p>
                <div className='small-info'>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings}</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;