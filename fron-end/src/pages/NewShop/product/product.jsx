import React from "react";
import "./product.css";
import product__img from "../../../assets/images/main.png";
import SecondHeader from "../../../components/Header/SecondHeader";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NewProduct from "../New product/NewProduct";

const Product = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchAllResort = async () => {
      try {
        const res = await axios.get("http://localhost:4400/product");
        setProduct(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllResort();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:4400/product/" + id);
      setProduct((prevData) => prevData.filter((users) => users.id !== id));
    } catch {}
  };
  return (
    <>
      <SecondHeader />
      <div className="product__container">
        {products.length === 0 && (
          <>
            <div className="no__product">
              <img src={product__img} alt="" />
              <h2>ًلا يوجد منتجات حاليا</h2>
            </div>
          </>
        )}
        <div className="BTN__BTN">
          <Link to={"/newProduct"}>
            <button type="button" class="button__Add">
              <span class="button__text">Add Item</span>
              <span class="button__iconnn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke="currentColor"
                  height="24"
                  fill="none"
                  class="svg"
                >
                  <line y2="19" y1="5" x2="12" x1="12"></line>
                  <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* product card */}
        {products.map((product) => (
          <div className="product__cards">
            <div className="product-card">
              <div className="product-tumb">
                {product.photo && <img src={product.img} alt="" />}
              </div>
              <div className="product-details">
                <h4>{product.name}</h4>
                <p>{product.desc}</p>
                <div className="product-price">{product.price}/JD</div>
                <div className="product-bottom-details">
                  <div className="product-links">
                    <Link to="">
                      <i
                        onClick={() => handleDelete(product.id)}
                        className="fa-solid fa-trash"
                        style={{ color: "#ff0000" }}
                      />
                    </Link>
                    <Link to="">
                      <i
                        className="fa-solid fa-pen-to-square"
                        style={{ color: "#005eff" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* product card */}
      </div>
    </>
  );
};

export default Product;
