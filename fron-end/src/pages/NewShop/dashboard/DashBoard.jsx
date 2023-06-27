import React from "react";
import "./DashBoard.css";
import SecondHeader from "../../../components/Header/SecondHeader";
import { Link } from "react-router-dom";

const DashBoard = () => {
  // const userData = localStorage.getItem("userData");
  // const userInfo = userData && JSON.parse(userData);
  // if (!userInfo?.token && window.location.pathname != "/") {
  //   window.location.pathname = "/";
  // }
  return (
    <>
      <SecondHeader />
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">DPC</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/CompanyPage" className="active">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/CompanyOffer">
              <i className="bx bx-box"></i>
              <span className="links_name">Product</span>
            </Link>
          </li>
          <li>
            <Link to="/CompanyProfile">
              <i className="bx bx-book-alt"></i>
              <span className="links_name">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/CompanyRequests">
              <i className="bx bx-message"></i>
              <span className="links_name">Requests</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </a>
          </li>
          <li className="log_out">
            <Link to="/">
              <i className="bx bx-log-out"></i>
              <span className="links_name">Log out</span>
            </Link>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Order</div>
                <div className="number">40,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bx-cart-alt cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Sales</div>
                <div className="number">38,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bxs-cart-add cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Profit</div>
                <div className="number">$12,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bx-cart cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Return</div>
                <div className="number">11,086</div>
                <div className="indicator">
                  <i className="bx bx-down-arrow-alt down"></i>
                  <span className="text">Down From Today</span>
                </div>
              </div>
              <i className="bx bxs-cart-download cart four"></i>
            </div>
          </div>

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent Sales</div>
              <div className="sales-details">
                <ul className="details">
                  <li className="topic">Date</li>
                  <li>
                    <a href="#">02 Jan 2023</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2023</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2023</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2023</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2023</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2023</a>
                  </li>
                  <li>
                    <a href="#">02 Jan 2023</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Customer</li>
                  <li>
                    <a href="#">Alex Doe</a>
                  </li>
                  <li>
                    <a href="#">David Mart</a>
                  </li>
                  <li>
                    <a href="#">Roe Parter</a>
                  </li>
                  <li>
                    <a href="#">Diana Penty</a>
                  </li>
                  <li>
                    <a href="#">Martin Paw</a>
                  </li>
                  <li>
                    <a href="#">Doe Alex</a>
                  </li>
                  <li>
                    <a href="#">Aiana Lexa</a>
                  </li>
                  <li>
                    <a href="#">Rexel Mags</a>
                  </li>
                  <li>
                    <a href="#">Tiana Loths</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Sales</li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Returned</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Returned</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Total</li>
                  <li>
                    <a href="#">$204.98</a>
                  </li>
                  <li>
                    <a href="#">$24.55</a>
                  </li>
                  <li>
                    <a href="#">$25.88</a>
                  </li>
                  <li>
                    <a href="#">$170.66</a>
                  </li>
                  <li>
                    <a href="#">$56.56</a>
                  </li>
                  <li>
                    <a href="#">$44.95</a>
                  </li>
                  <li>
                    <a href="#">$67.33</a>
                  </li>
                  <li>
                    <a href="#">$23.53</a>
                  </li>
                  <li>
                    <a href="#">$46.52</a>
                  </li>
                </ul>
              </div>
              <div className="button">
                <a href="#">See All</a>
              </div>
            </div>
            <div className="top-sales box">
              <div className="title">Top Seling Product</div>
              <ul className="top-sales-details">
                <li>
                  <a href="#">
                    {/*<img src="images/sunglasses.jpg" alt="">*/}
                    <span className="product">Vuitton Sunglasses</span>
                  </a>
                  <span className="price">$1107</span>
                </li>
                <li>
                  <a href="#">
                    {/*<img src="images/jeans.jpg" alt="">*/}
                    <span className="product">Hourglass Jeans</span>
                  </a>
                  <span className="price">$1567</span>
                </li>
                <li>
                  <a href="#">
                    {/*<img src="images/nike.jpg" alt="">*/}
                    <span className="product">Nike Sport Shoe</span>
                  </a>
                  <span className="price">$1234</span>
                </li>
                <li>
                  <a href="#">
                    {/*<img src="images/scarves.jpg" alt="">*/}
                    <span className="product">Hermes Silk Scarves.</span>
                  </a>
                  <span className="price">$2312</span>
                </li>
                <li>
                  <a href="#">
                    {/*<img src="images/blueBag.jpg" alt="">*/}
                    <span className="product">Succi Ladies Bag</span>
                  </a>
                  <span className="price">$1456</span>
                </li>
                <li>
                  <a href="#">
                    {/*<img src="images/bag.jpg" alt="">*/}
                    <span className="product">Gucci Womens's Bags</span>
                  </a>
                  <span className="price">$2345</span>
                </li>
                <li>
                  <a href="#">
                    <span className="product">Addidas Running Shoe</span>
                  </a>
                  <span className="price">$2345</span>
                </li>
                <li>
                  <a href="#">
                    <span className="product">Bilack Wear's Shirt</span>
                  </a>
                  <span className="price">$1245</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default DashBoard;
