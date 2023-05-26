import React from "react";
import "./Order.css";
import product__img from "../../../assets/images/main.png";
import SecondHeader from "../../../components/Header/SecondHeader";

const Order = () => {
  return (
    <>
      <SecondHeader />
      <div className="product__container d-flex flex-column align-items-center justify-content-center">
        <img src={product__img} alt="" />
        <h2>ًلا يوجد طلبات حاليا</h2>
      </div>
    </>
  );
};

export default Order;
