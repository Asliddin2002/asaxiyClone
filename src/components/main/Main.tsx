import React from "react";
import LeftSide from "./leftSection/Books";
import ProductsList from "./products/ProductsList";
import "./main.css";
import { sideBarData } from "../../data";
import Product from "./products/Product";


const Main = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="left-side-wraper">
          <LeftSide data={sideBarData[0]} />
          {sideBarData[1].map((item: any) => (
            <Product style="width2" key={item.id} popular={true} data={item} />
          ))}
        </div>
        <div className="main-products-wraper">
          <ProductsList text="Back to school" />
          <ProductsList text="Popular products" />
        </div>
      </div>
    </div>
  );
};

export default Main;
