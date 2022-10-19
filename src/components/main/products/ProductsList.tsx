import React from "react";
import Product from "./Product";
import "./product.css";
import { productsData } from "../../../data";

type propsType = {
  text: string;
};

const ProductsList = ({ text }: propsType) => {
  return (
    <div className="productList-wraper">
      <h5>{text}</h5>
      <div className="productList">
        {productsData.map((product) => (
          <Product
            style="width"
            popular={false}
            key={product.id}
            data={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
