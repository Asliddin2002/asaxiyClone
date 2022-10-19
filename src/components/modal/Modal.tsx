import React, { useState } from "react";
import "./modal.css";
import { useTypeSelectorHook } from "../redux/useSelectorHook";
import { useDispatch } from "react-redux";
import { actionTypes } from "../redux/AddCartRedux";

type propsType = {
  closeModal: () => void;
};

const Modal = ({ closeModal }: propsType) => {
  const data = useTypeSelectorHook((state) => state.data.data);
  const dispatch = useDispatch();

  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].product_price;
  }

  return (
    <div className="modal">
      <div className="modal-haeder">
        <span>Jami</span>
        <i onClick={() => closeModal()} className="fas fa-times"></i>
        <span>{sum} sum</span>
      </div>
      {data.map((item) => (
        <div key={item.id} className="added-product">
          <div className="item-img">
            <img
              src={require(`../../assets/${item.product_image}.jpg`)}
              alt=""
            />
          </div>
          <div className="item-name">{item.product_name}(2x)</div>
          <div className="item-price">{item.product_price} sum</div>
          <i
            className="fas fa-times"
            onClick={() =>
              dispatch({ type: actionTypes.DELETE_DATA, payload: item.id })
            }
          ></i>
        </div>
      ))}

      <div className="modal-buttons">
        <button>Make a purchase</button>
        <button>Go to cart</button>
      </div>
    </div>
  );
};

export default Modal;
