import React from "react";
import "./NewProduct.css";
import SecondHeader from "../../../components/Header/SecondHeader";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    desc: "",
    price: null,
    img: "",
  });
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(product);

    try {
      await axios.post("http://localhost:4400/newProduct", product);
      navigate("/product");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center new_product_contain z-3">
        <dic className="row">
          <div className="col-12">
            <form className="ADD__FORM">
              <div className="row">
                <div className="col-8">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="أسم المنتج"
                  />
                  <br />
                  <br />

                  <input
                    type="text"
                    name="desc"
                    onChange={handleChange}
                    placeholder="قم بأضافة معلومات عن المنتج"
                  />
                  <br />
                  <br />

                  {/* <select id="status" name="status">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <br />
                  <br /> */}

                  <input
                    type="text"
                    name="img"
                    onChange={handleChange}
                    placeholder="صورة المنتج"
                  />
                  <br />
                  <br />
                  <input
                    type="number"
                    name="price"
                    onChange={handleChange}
                    placeholder="السعر"
                  />
                  <br />
                  <br />
                  <button type="submit" name="save" onClick={handleClick}>
                    Save
                  </button>
                  <button type="reset" name="cancel">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dic>
      </div>
    </>
  );
};

export default NewProduct;
