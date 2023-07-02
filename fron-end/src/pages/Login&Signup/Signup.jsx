import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const Signup = () => {
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState();
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    shopname: "",
  });
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    // Perform validation checks
    if (!users.name) {
      errors.name = "Name is required";
    }

    if (!users.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(users.email)) {
      errors.email = "Must be example@test.com";
    }
    // if (!users.phoneNumber) {
    //   errors.phoneNumber = "phone number is required";
    // } else if (!/^07\d{8}$/.test(users.phoneNumber)) {
    //   errors.phoneNumber = "Must be like this 07xxxxxxxx";
    // }

    if (!users.password) {
      errors.password = "password is required";
    } else if (users.password.length < 6) {
      errors.password = "Password must contain at least 6 characters";
    } else if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(users.password)) {
      errors.password =
        "The password must contain English letters, numbers and special characters";
    } else if (!/\d/.test(users.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(users.password)) {
      errors.password =
        "Password must contain at least one special character (!@#$%^&*).";
    }
    if (!users.shopname) {
      errors.shopname = "Shop Name is required";
    }

    if (users.password !== users.rePassword) {
      errors.rePassword = "passwords are not match";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        axios.post("http://localhost:4400/signup", users);
        navigate("/profile");
      } catch (err) {
        console.log(err);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <Header />
      <div className="sign-up">
        <div className="container">
          <div className="d-flex justify-content-center ">
            <div className="card formCon">
              <div className="card-header">
                <h3>حساب جديد</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span>
                    <i className="fab fa-facebook-square" />
                  </span>
                  <span>
                    <i className="fab fa-google-plus-square" />
                  </span>
                  <span>
                    <i className="fab fa-twitter-square" />
                  </span>
                </div>
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-envelope" />
                    </span>
                    <input
                      type="text"
                      name="email"
                      value={users.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="البريد الألكتروني"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div>
                    {errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}
                  </div>

                  <div></div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-user" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={users.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="أسم المستخدم"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div>
                    {errors.name && (
                      <span className="text-danger">{errors.name}</span>
                    )}
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-key " />
                    </span>
                    <input
                      type="text"
                      name="password"
                      value={users.password}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="كلمة السر"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div>
                    {errors.password && (
                      <span className="text-danger">{errors.password}</span>
                    )}
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-key " />
                    </span>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={users.rePassword}
                      name="rePassword"
                      className="form-control"
                      placeholder="تأكيد كلمة السر"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div>
                    {errors.rePassword && (
                      <span className="text-danger">{errors.rePassword}</span>
                    )}
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-shop" />
                    </span>
                    <input
                      // required
                      type="text"
                      name="shopname"
                      value={users.shopname}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="أسم المتجر"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div>
                    {errors.shopname && (
                      <span className="text-danger">{errors.shopname}</span>
                    )}
                  </div>
                  <div className="form-group d-flex justify-content-end ">
                    <button
                      type="submit"
                      defaultValue="البدأ"
                      className="btn float-right login_btn"
                      // onClick={handleClick}
                    >
                      البدأ
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  <Link to="/login">تسجيل دخول</Link>!هل تملك حسابً بالفعل
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
