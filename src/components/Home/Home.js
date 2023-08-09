import React from "react";

import './home.style.css';

const Home = () => {
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-m045flggins/gallery/in-galaxy-m04-4gb-64gb-sm-m045flggins-534598046?$730_584_PNG$"/>
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
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;