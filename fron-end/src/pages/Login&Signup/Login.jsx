import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Login = () => {
  const [UserInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const [newUser, setNewUser] = useState(
    JSON.parse(localStorage.getItem("newUser")) || []
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (
      (newUser.email === UserInput.email ||
        newUser.userName === UserInput.email) &&
      newUser.password === UserInput.password
    ) {
      Navigate("/product");
    } else {
      alert("user name or password is wrong.");
    }
  }
  return (
    <>
      <Header />
      <div className="log-in">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3 className="d-flex justify-content-end">تسجيل دخول</h3>
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
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i
                        className="fa-solid fa-user"
                        style={{ color: "#000000" }}
                      />
                    </span>
                    <input
                      type="text"
                      name="email"
                      value={UserInput.email}
                      onChange={(e) => {
                        setUserInput({
                          ...UserInput,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      className="form-control"
                      placeholder="أسم المستخدم"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-key " />
                    </span>
                    <input
                      type="text"
                      name="password"
                      value={UserInput.password}
                      onChange={(e) => {
                        setUserInput({
                          ...UserInput,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      className="form-control"
                      placeholder="كلمة السر"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="row align-items-center remember pt-2">
                    <input type="checkbox" />
                    تذكرني
                  </div>
                  <div className="form-group d-flex justify-content-end ">
                    <input
                      type="submit"
                      defaultValue="دخول"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  <Link to="/signup">فتح حساب جديد</Link>ألا تمتلك حسابً؟
                </div>
                <div className="d-flex justify-content-center">
                  <Link to="#">هل نسيت كلمة السر؟</Link>
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

export default Login;
