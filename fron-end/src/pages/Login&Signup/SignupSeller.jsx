import React from "react";

import { Link } from "react-router-dom";
import "./SignupSeller.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SignupSeller = () => {
  return (
    <>
      <Header />
      <div className="sign__up">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
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
                <form>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-envelope" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="البريد الألكتروني"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-user" />
                    </span>
                    <input
                      type="text"
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
                      className="form-control"
                      placeholder="تأكيد كلمة السر"
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
                  <Link to="/loginSeller">تسجيل دخول</Link>!هل تملك حسابً بالفعل
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

export default SignupSeller;
