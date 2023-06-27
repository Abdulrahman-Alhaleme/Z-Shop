import React, { useState } from "react";
import "./Header3.css";
import { Link } from "react-router-dom";
import { Button, Nav } from "reactstrap";

const Header3 = () => {
  const [newUser, setNewUser] = useState(
    JSON.parse(localStorage.getItem("newUser")) || []
  );

  return (
    <>
      <Nav className="Nav_">
        <div className="container container__link text-center ">
          <div className=" customer__link row align-items-center  justify-content-center">
            <Link className="nav_links col-lg-2" to="/products">
              <div className="nav-links ">
                <li className="li__style">المنتجات</li>
              </div>
            </Link>
            <Link className="nav_links col-lg-2" to="/contact">
              <div className="nav-links">
                <li className="li__style">تواصل معي</li>
              </div>
            </Link>
            <div className="nav_links col-lg-2" to="/cart">
              <div className="nav-links">
                <Button
                  style={{
                    width: "3rem",
                    height: "3rem",
                    position: "relative",
                  }}
                  variant="outline-primary"
                  className="rounded-circle"
                  // onClick={openCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                  >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                  </svg>
                  <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
                    style={{
                      color: "white",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      transform: "translate(25%, 25%)",
                    }}
                  >
                    {/* {cartQuantity} */}3
                  </div>
                </Button>
              </div>
            </div>
            <div className="nav-links"></div>
          </div>
          <div className="bottom_line"></div>
          <div className="text-center mt-3">
            <h1>{newUser.shopName}</h1>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Header3;
