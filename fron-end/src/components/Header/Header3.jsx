import React from "react";
import "./Header3.css";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";

const Header3 = () => {
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
            <Link className="nav_links col-lg-2" to="/cart">
              <div className="nav-links">
                <li className="li__style">السلة</li>
              </div>
            </Link>
          </div>
          <div className="bottom_line"></div>
          <div className="text-center mt-3">
            <h1>Store Name</h1>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Header3;
