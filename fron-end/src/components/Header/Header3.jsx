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
            <Link className="nav_links col-lg-2 col-3" to="/products">
              <div className="nav-links ">
                <li className="li__style">المنتجات</li>
              </div>
            </Link>
            <Link className="nav_links col-lg-2 col-3" to="/contact">
              <div className="nav-links">
                <li className="li__style">تواصل معي</li>
              </div>
            </Link>
            <div className="nav_links col-lg-2 col-3" to="/cart">
              <div className="nav-links">
                <li className="li__style">السلة</li>
              </div>
            </div>
            <div className="nav-links"></div>
          </div>

          <div className="text-center mt-3">
            <h1>{newUser.shopName}</h1>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Header3;
