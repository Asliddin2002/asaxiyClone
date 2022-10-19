import React from "react";
import "./leftSection.css";

interface dataBooksTypes {
  id: number;
  name: string;
  img: string;
  desc: string;
}
interface dataProductTypes {
  id: number;
  product_name: string;
  product_image: string;
  product_price: number;
  dicount_price: number;
  reviews: number;
  discount: boolean;
}

type propsType = {
  data: Array<dataBooksTypes>[][] | any;
};

const LeftSide = ({ data }: propsType) => {
  return (
    <div className="books">
      <div className="books-header">
        <span>Books</span>
        <span>Asaxiy books</span>
      </div>
      {data.map((item: dataBooksTypes) => (
        <div className="books-main" key={item.id}>
          <div className="books-main-img">
            <img src={require(`../../../assets/${item.img}.jpg`)} alt="" />
          </div>
          <div className="books-main-text">
            <h5>{item.name}</h5>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
