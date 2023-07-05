import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "../product-card/product-card.scss";
const ProductCard = (props) => {
  const productImage = require(`../../assets/img/${props.image}`);

  const getStars = () => (
    <div className="stars">
      {[...new Array(5)].map((item, index) => (
        <span key={index}>
          {index < props.rate ? <AiFillStar /> : <AiOutlineStar />}{" "}
        </span>
      ))}
    </div>
  );

  return (
    <div className="product-card">
      {props.discount > 0 && (
        <span className="discount">{props.discount}%</span>
      )}
      <img src={productImage} />
      {getStars()}
      <h3>{props.title}</h3>
      <div className="prices">
        {props.discount > 0 && (
          <span className="discounted-price">
            ${props.price - (props.price * props.discount) / 100}
          </span>
        )}
        <span className="standart-price">${props.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
