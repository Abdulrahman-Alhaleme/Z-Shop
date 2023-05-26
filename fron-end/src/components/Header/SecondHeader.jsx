import React from "react";
import "./SecondHeader.css";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";

const SecondHeader = () => {
  return (
    <>
      <Nav className="Nav">
        <div className="container text-center ">
          <div className="row align-items-center  justify-content-center">
            <Link className="nav_links col-lg-2" to="/product">
              <div className="nav-links ">
                <i class="fa-solid fa-tag"></i>
                <li className="li__style">المنتجات</li>
              </div>
            </Link>
            <Link className="nav_links col-lg-2" to="/order">
              <div className="nav-links">
                <i class="fa-solid fa-box"></i>
                <li className="li__style">الطلبات</li>
              </div>
            </Link>
            <Link className="nav_links col-lg-2" to="/dashBoard">
              <div className="nav-links">
                <i class="fa-solid fa-gauge"></i>
                <li className="li__style">لوحة التحكم</li>
              </div>
            </Link>
            <Link className="nav_links col-lg-2 " to="/profile">
              <div className="nav-links">
                <i class="fa-solid fa-user"></i>
                <li className="li__style">الملف الشخصي</li>
              </div>
            </Link>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default SecondHeader;
