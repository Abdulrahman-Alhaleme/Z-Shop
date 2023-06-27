import React, { useContext } from "react";
import "./Products.css";
import Header3 from "../../../components/Header/Header3";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button } from "reactstrap";
import FormatCurrency from "../../../components/FormatCurrency";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [productId, setProductId] = useState();
  const {
    cartItems,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContext(ShoppingCartContext);
  const quantity = getItemQuantity(productId);
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

  return (
    <>
      <Header3 />

      <section className="card_contain">
        <Row md={2} xs={1} lg={3} className="g-3">
          {products.map((product) => (
            <div className="product__cards">
              <div className="product-card">
                <div className="product-tumb">
                  {product.photo && <img src={product.img} alt="" />}
                </div>
                <div className="product-details">
                  <h4>{product.name}</h4>
                  <p>{product.desc}</p>
                  <div className="product-price">
                    {FormatCurrency(product.price)}
                  </div>
                  <div className="product-bottom-details">
                    <div className="mt-auto">
                      {quantity === 0 ? (
                        <Button
                          className="w-100"
                          onClick={() => {
                            increaseCartQuantity(product.id);
                            setProductId(product.id);
                          }}
                        >
                          Add To Cart
                        </Button>
                      ) : (
                        <div
                          className="d-flex align-items-center flex-column"
                          style={{ gap: "0.5rem" }}
                        >
                          <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ gap: "0.5rem" }}
                          >
                            <Button
                              onClick={() => decreaseCartQuantity(product.id)}
                            >
                              -
                            </Button>
                            <span className="fs-3">{quantity} in Cart</span>
                            <Button
                              onClick={() => increaseCartQuantity(product.id)}
                            >
                              +
                            </Button>
                          </div>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => removeFromCart(product.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Products;
