import React from "react";
import './Card.css';
const Card = props =>{
    return (
        <div className="Holder">
            <div className="main">
                <h2 className="Domain-Type">{props.text}</h2>
                </div>
                <div className="Pricing-Info">
                    <h4 className="prc-inf">{props.price}</h4>
                    <p className="prev-prc">{props.pricee}</p>
                </div>
                <div className="buy-btn">
                    <button className="Buy-Now"> Buy Now</button>
                </div>
        </div>
    );
};
export default Card;