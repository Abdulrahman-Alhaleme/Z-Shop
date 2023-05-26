import React from "react";
import "./Products.css";
import Header3 from "../../../components/Header/Header3";
import { Link } from "react-router-dom";
import IMG1 from "../../../assets/images/CpdEYAj0LkBQKiZYNtu1DUdSL340XtWOIZNDEbtK.webp";
import IMG2 from "../../../assets/images/2021071910430016266625805340.jpg";
import IMG3 from "../../../assets/images/SONY-PlayStation-5-Console_6.jpg";
import IMG4 from "../../../assets/images/pexels-math-90946.jpg";
import IMG5 from "../../../assets/images/pexels-mike-bird-380954.jpg";
import IMG6 from "../../../assets/images/pexels-suzy-hazelwood-2536965.jpg";

const Products = () => {
  return (
    <>
      <Header3 />
      <section className="card_contain">
        <div class="product-grid">
          <div class="product-image">
            <Link href="#" class="image">
              <img src={IMG1} />
            </Link>
            <span class="product-discount-label">-23%</span>
            <ul class="product-links">
              <li>
                <Link href="#">
                  <i class="fa fa-heart"></i>
                </Link>
              </li>
            </ul>
            <Link href="" class="add-to-cart">
              Add to Cart
            </Link>
          </div>
          <div class="product-content">
            <h3 class="title">
              <Link href="#">Women's Blouse Top</Link>
            </h3>
            <div class="price">
              $53.55 <span>$68.88</span>
            </div>
          </div>
        </div>

        {/*  */}
        <div class="product-grid">
          <div class="product-image">
            <Link href="#" class="image">
              <img src={IMG2} />
            </Link>
            <span class="product-discount-label">-23%</span>
            <ul class="product-links">
              <li>
                <Link href="#">
                  <i class="fa fa-search"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa fa-heart"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa fa-random"></i>
                </Link>
              </li>
            </ul>
            <Link href="" class="add-to-cart">
              Add to Cart
            </Link>
          </div>
          <div class="product-content">
            <h3 class="title">
              <Link href="#">Women's Blouse Top</Link>
            </h3>
            <div class="price">
              $53.55 <span>$68.88</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div class="product-grid">
          <div class="product-image">
            <Link href="#" class="image">
              <img src={IMG3} />
            </Link>
            <span class="product-discount-label">-23%</span>
            <ul class="product-links">
              <li>
                <Link href="#">
                  <i class="fa fa-search"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa fa-heart"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa fa-random"></i>
                </Link>
              </li>
            </ul>
            <Link href="" class="add-to-cart">
              Add to Cart
            </Link>
          </div>
          <div class="product-content">
            <h3 class="title">
              <Link href="#">Women's Blouse Top</Link>
            </h3>
            <div class="price">
              $53.55 <span>$68.88</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div class="product-grid">
          <div class="product-image">
            <Link href="#" class="image">
              <img src={IMG4} />
            </Link>
            <span class="product-discount-label">-23%</span>
            <ul class="product-links">
              <li>
                <Link href="#">
                  <i class="fa fa-search"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa fa-heart"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa fa-random"></i>
                </Link>
              </li>
            </ul>
            <Link href="" class="add-to-cart">
              Add to Cart
            </Link>
          </div>
          <div class="product-content">
            <h3 class="title">
              <Link href="#">Women's Blouse Top</Link>
            </h3>
            <div class="price">
              $53.55 <span>$68.88</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div class="product-grid">
          <div class="product-image">
            <Link href="#" class="image">
              <img src={IMG5} />
            </Link>
            <span class="product-discount-label">-23%</span>
            <ul class="product-links">
              <li>
                <Link href="#">
                  <i class="fa fa-search"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa fa-heart"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa fa-random"></i>
                </Link>
              </li>
            </ul>
            <Link href="" class="add-to-cart">
              Add to Cart
            </Link>
          </div>
          <div class="product-content">
            <h3 class="title">
              <Link href="#">Women's Blouse Top</Link>
            </h3>
            <div class="price">
              $53.55 <span>$68.88</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div class="product-grid">
          <div class="product-image">
            <Link href="#" class="image">
              <img src={IMG6} />
            </Link>
            <span class="product-discount-label">-23%</span>
            <ul class="product-links">
              <li>
                <Link href="#">
                  <i class="fa fa-search"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa fa-heart"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i class="fa fa-random"></i>
                </Link>
              </li>
            </ul>
            <Link href="" class="add-to-cart">
              Add to Cart
            </Link>
          </div>
          <div class="product-content">
            <h3 class="title">
              <Link href="#">Women's Blouse Top</Link>
            </h3>
            <div class="price">
              $53.55 <span>$68.88</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
