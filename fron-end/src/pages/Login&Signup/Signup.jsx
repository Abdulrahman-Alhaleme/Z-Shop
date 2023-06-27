import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [shopName, setShopName] = useState("");

  async function RegisterUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4400/api/register", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        matchPassword,
        shopName,
      }),
    });
    const data = await response.json();
    console.log(data);
  }
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
                <form onSubmit={RegisterUser}>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-envelope" />
                    </span>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="البريد الألكتروني"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div></div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-user" />
                    </span>
                    <input
                      type="text"
                      name="userName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="كلمة السر"
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
                      name="confirmPassword"
                      value={matchPassword}
                      onChange={(e) => setMatchPassword(e.target.value)}
                      className="form-control"
                      placeholder="تأكيد كلمة السر"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-shop" />
                    </span>
                    <input
                      type="text"
                      name="shopName"
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
                      className="form-control"
                      placeholder="أسم المتجر"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="form-group d-flex justify-content-end ">
                    <input
                      type="submit"
                      defaultValue="البدأ"
                      className="btn float-right login_btn"
                    />
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
