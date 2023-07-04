import React, { useState, useEffect } from "react";
import "./Header3.css";
import { Link } from "react-router-dom";
import { Button, Nav } from "reactstrap";
import axios from "axios";

const Header3 = () => {
  const [shopname, setShopname] = useState([]);

  useEffect(() => {
    const fetchAllResort = async () => {
      try {
        const res = await axios.get("http://localhost:4400/signup");

        setShopname(res.data.map((user) => user.shopname));
        console.log(res.data.map((user) => user.shopname));
        console.log(shopname);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllResort();
  }, []);

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
          {/* {shopname.map((shopname) => ( */}
          <div className="text-center mt-3">
            <h1>Shop Name</h1>
          </div>
          {/* ))} */}
        </div>
      </Nav>
    </>
  );
};

export default Header3;
