import React from 'react';

import './home.style.css';

const Home = (props) => {
    console.warn("home", props.cartData);
    return (
        <div>
            <h1>Home</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-m045flggins/gallery/in-galaxy-m04-4gb-64gb-sm-m045flggins-534598046?$730_584_PNG$" alt="product" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price : 9000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => props.addToCartHandler({ price: 1000, name: "i phone 11" })}>Add to Cart</button>
                    <button className="remove-to-cart" onClick={() => props.removeToCartHandler()}>Remove to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;