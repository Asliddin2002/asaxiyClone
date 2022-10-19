import React from "react";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../redux/AddCartRedux";

type productType = {
  id: number;
  product_name: string;
  product_image: string;
  product_price: number;
  dicount_price: number;
  reviews: number;
  discount: boolean;
};
type propsType = {
  style: string;
  popular: boolean;
  data: productType;
};

const Product = ({ style, popular, data }: propsType) => {
  const dispatch = useDispatch();
  const {
    product_image,
    product_name,
    product_price,
    dicount_price,
    reviews,
    discount,
  } = data as productType;
  return (
    <div className={` product ${style}`}>
      <div className="img-wraper">
        <img src={require(`../../../assets/${product_image}.jpg`)} alt="" />
      </div>
      <div className="product-name">{product_name}</div>
      <div className="product-rating">
        <div className="rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <div className="comment">
          <i className="fa-regular fa-comment"></i>
          <span>{reviews} reviews</span>
        </div>
      </div>
      <div className="product-price">
        <span>{product_price} sum</span>
        <span>{dicount_price} sum</span>
        <span>{dicount_price / 12} sum / 12 months</span>
      </div>
      <div className="product-buttons">
        <button>Installment</button>
        <button>Buy in 1 click</button>
      </div>
      <div className="icons">
        <div
          className="icon-wraper"
          onClick={() =>
            dispatch({ type: actionTypes.DATA_ADDED, payload: data })
          }
        >
          <i className="fa-solid fa-cart-plus"></i>
        </div>
        <i className="fa-regular fa-heart"></i>
      </div>
      {discount && (
        <div className="discount">
          {popular ? "Product of the week" : "DISCOUNT"}
        </div>
      )}
    </div>
  );
};

export default Product;
