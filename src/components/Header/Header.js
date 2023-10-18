import React from 'react';

import './header.style.css';

const Header = (props) => {
    console.warn("header",props.cartData);
    return(
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.cartData.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="add-to-cart"/>
            </div>
        </div>
    )
}

export default Header;