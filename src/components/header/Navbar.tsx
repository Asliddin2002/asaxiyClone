import React from "react";
import { useTypeSelectorHook } from "../redux/useSelectorHook";
import "./header.css";

type propsType = {
  onHover: () => void;
};

export default function Navbar({ onHover }: propsType) {
  const data = useTypeSelectorHook((state) => state.data.data);

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <img
              className="search"
              src={require("../../assets/logo.jpg")}
              alt="logo"
            />
          </div>
          <div className="search">
            <input type="text" placeholder="search..." />
            <button>
              <i className="fas fa-search"></i> Search
            </button>
          </div>
          <div className="icons">
            <div className="icon">
              <i className="fa-solid fa-wallet"></i>
              <span>Pay</span>
            </div>
            <div className="icon">
              <i className="fa-solid fa-truck"></i>
              <span>Delivery</span>
            </div>
            <div className="icon">
              <i className="fa-solid fa-globe"></i>
              <span>English</span>
            </div>
            <div onMouseUpCapture={() => onHover()} className="icon">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Basket</span>
              <div className="count-data">{data.length}</div>
            </div>
            <div className="icon">
              <i className="fa-solid fa-heart"></i>
              <span>Favorites</span>
            </div>
            <div className="icon">
              <i className="fa-solid fa-user"></i>
              <span>Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
