import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Logo from "../../assets/images/logo.png";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const nav__links = [
  {
    path: "/home",
    display: "الرئيسية",
  },
  {
    path: "/subscription",
    display: "الأشتراكات",
  },
  {
    path: "/shopes",
    display: "المتاجر",
  },
  {
    path: "/about-us",
    display: "من نحن",
  },
];

function handleToogle(event) {
  event.target.classList.toggle("active");
}
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top  ">
        <div className="container">
          <img src={Logo} width="300px" height="30px" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars" style={{ color: "#ffffff" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {nav__links.map((item, index) => (
                <li className="nav__item " key={index} onClick={handleToogle}>
                  <NavLink
                    className="nav-link inline-block ms-2"
                    to={item.path}
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="line ps-3 pe-3 d-none d-lg-block" />

            <Link className="btn b__t__n rounded-pill  ms-lg-3" to="/signup">
              افتح متجرك الخاص
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
