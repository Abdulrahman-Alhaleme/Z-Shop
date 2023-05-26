import React from "react";
import "./Shopes.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Test_img from "../../assets/images/image-impty.png";

const Shopes = () => {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-5">
            <h1>المتاجر</h1>
          </div>
        </div>
        <div className="row gap-5 justify-content-center">
          <div className="col-4 card__shopes text-center">
            <img src={Test_img} alt="" />
            <h1 className="text-center">Shop Name</h1>
            <p className="text-center mt-5">catagory: lorem</p>
          </div>

          <div className=" col-4 card__shopes text-center">
            <img src={Test_img} alt="" />
            <h1 className="text-center">Shop Name</h1>
            <p className="text-center mt-5">catagory: lorem</p>
          </div>

          <div className=" col-4 card__shopes text-center">
            <img src={Test_img} alt="" />
            <h1 className="text-center">Shop Name</h1>
            <p className="text-center mt-5">catagory: lorem</p>
          </div>

          <div className=" col-4 card__shopes text-center">
            <img src={Test_img} alt="" />
            <h1 className="text-center">Shop Name</h1>
            <p className="text-center mt-5">catagory: lorem</p>
          </div>

          <div className=" col-4 card__shopes text-center">
            <img src={Test_img} alt="" />
            <h1 className="text-center">Shop Name</h1>
            <p className="text-center mt-5">catagory: lorem</p>
          </div>

          <div className=" col-4 card__shopes text-center">
            <img src={Test_img} alt="" />
            <h1 className="text-center">Shop Name</h1>
            <p className="text-center mt-5">catagory: lorem</p>
          </div>

          <div className=" col-4 card__shopes text-center">
            <img src={Test_img} alt="" />
            <h1 className="text-center">Shop Name</h1>
            <p className="text-center mt-5">catagory: lorem</p>
          </div>

          <div className=" col-4 card__shopes text-center">
            <img src={Test_img} alt="" />
            <h1 className="text-center">Shop Name</h1>
            <p className="text-center mt-5">catagory: lorem</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shopes;
