import React from "react";
import "./Home.css";
import About__img from "../../assets/images/Flower shop, JP NIK.jpeg";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <div class="landing d-flex justify-content-center align-items-center ">
        <div class="text-center">
          <h1 class=" mb-5 ">أصبحَ فتح متجرك الإلكتروني سهلًا الآن</h1>
          <h1 class=" mb-5 ">ما الذي تنتَظِرُه ؟ ابدأ الآن</h1>
          <Link
            class="btn main-btn rounded-pill btn-primary ms-lg-5"
            to="/login"
          >
            اِبْدأ مَتْجَرك
          </Link>
        </div>
      </div>

      <div className="features text-center pt-5 pb-5">
        <div className="container">
          <div className="main-titale mt-5 mb-5 position-relative ">
            <i
              className="fa-solid fa-bolt mb-4 "
              style={{ color: "#fff700" }}
            />
            <h2>we are good at</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="feat">
                <div className="icon-holder position-relative">
                  <i className="fa-solid fa-1 position-absolute bottom-0 number " />
                  <i className="fa-solid fa-truck-fast position-absolute bottom-0 fa-3x icon" />
                </div>
                <h4 className="mt-3 mb-3 ">شَحْن سريع</h4>
                <p className="text-black-50 lh-lg ">
                  قُم بِتنْفِيذ طلب وَاحِد أو عِدَّة طَلَبات بِنقْرة وَاحِدة
                  ومنْح عُمَلائِك أَسعَار شَحْن مُتَفاوِض عليْهَا{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat">
                <div className="icon-holder position-relative">
                  <i className="fa-solid fa-2 position-absolute bottom-0 number " />
                  <i className="fa-solid fa-credit-card position-absolute bottom-0 fa-3x icon" />
                </div>
                <h4 className="mt-3 mb-3 ">دَفْع مُبسَّط</h4>
                <p className="text-black-50 lh-lg ">
                  قُم بِتنْفِيذ طلب وَاحِد أو عِدَّة طَلَبات بِنقْرة وَاحِدة
                  ومنْح عُمَلائِك أَسعَار شَحْن مُتَفاوِض عليْهَا
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat">
                <div className="icon-holder position-relative">
                  <i className="fa-solid fa-3 position-absolute bottom-0 number " />
                  <i className="fa-solid fa-wallet position-absolute bottom-0 fa-3x icon" />
                </div>
                <h4 className="mt-3 mb-3 ">بَيْع فِي كُلِّ مَكَان</h4>
                <p className="text-black-50 lh-lg ">
                  قُم بِتنْفِيذ طلب وَاحِد أو عِدَّة طَلَبات بِنقْرة وَاحِدة
                  ومنْح عُمَلائِك أَسعَار شَحْن مُتَفاوِض عليْهَا
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subscription text-center pt-5 pb-5">
        <div className="container">
          <div className="main-titale mt-5 mb-5 position-relative ">
            <h2>إحتفَظ بِمالك</h2>
            <p className="mb-5">
              نَحْن لََا نَقتَطِع مِن مبيعاتك أو نَفرِض مَجمُوعة مِن الرُّسوم ,
              مَا عليْك سِوى اِختِيار وَاحِدة مِن خُطَطنَا الشَّهْريَّة مَيسُورة
              التَّكْلفة لِتناسب اِحْتياجاتك وميزانيَّتك
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="container">
                <div className="s-feat1 text-center">
                  <h4>5 مُنتجَات</h4>
                  <h4>free</h4>
                  <Link
                    className="btn main-btn rounded-pill btn-primary"
                    to="/login"
                  >
                    اِبْدأ مَتْجَرك
                  </Link>
                </div>
                <div className="s-feat2 mb-4">
                  <h2>الأشْتراك الفضِّيِّ</h2>
                  <p>صورة واحدة لكل منتج</p>
                  <p>بيع على الإنترنت وشخصيا</p>
                  <p>تقديم خصومات</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="container">
                <div className="s-feata text-center">
                  <h4>50 منتج</h4>
                  <h4>$9.99/month</h4>
                  <Link
                    className="btn main-btn rounded-pill btn-primary"
                    to="/login"
                  >
                    اِبْدأ مَتْجَرك
                  </Link>
                </div>
                <div className="s-feat2 mb-4">
                  <h2>الأشْتراك الذَّهَبيِّ</h2>
                  <p>خمس صور لكل منتج</p>
                  <p>مواضيع مجانية قابلة للتخصيص</p>
                  <p>تتبع المخزون</p>
                  <p>بيع على الإنترنت وشخصيا</p>
                  <p>تقديم خصومات</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="container s-feats">
                <div className="s-featb text-center">
                  <h4>500 منتج</h4>
                  <h4>$19.99/month</h4>
                  <Link
                    className="btn main-btn rounded-pill btn-primary"
                    to="/login"
                  >
                    اِبْدأ مَتْجَرك
                  </Link>
                </div>
                <div className="s-feat2">
                  <h2>الأشْتراك الألْماسي</h2>
                  <p>صور لامحدودة لكل منتج</p>
                  <p>مواضيع مجانية قابلة للتخصيص</p>
                  <p>تتبع المخزون</p>
                  <p>بيع على الإنترنت وشخصيا</p>
                  <p>تقديم خصومات</p>
                  <p>مساعدة من اخصاء في مجال التسويق</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutus-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="aboutus">
                <h2 className="aboutus-title">About Us</h2>
                <p className="aboutus-text">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in.
                </p>
                <p className="aboutus-text">
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                </p>
                <Link className="aboutus-more" to="#">
                  read more
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="aboutus-banner">
                <img
                  src={About__img}
                  className="mt-5 mb-5"
                  width="250PX"
                  height="250PX"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-5 col-sm-6 col-xs-12">
              <div className="feature">
                <div className="feature-box">
                  <div className="clearfix">
                    {/* <div class="iconset">
                              <span class="glyphicon glyphicon-cog icon"></span>
                          </div> */}
                    <div className="feature-content">
                      <h4>Work with heart</h4>
                      <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature-box">
                  <div className="clearfix">
                    {/* <div class="iconset">
                              <span class="glyphicon glyphicon-cog icon"></span>
                          </div> */}
                    <div className="feature-content">
                      <h4>Reliable services</h4>
                      <p>
                        Donec vitae sapien ut libero venenatis faucibu. Nullam
                        quis ante. Etiam sit amet orci eget eros faucibus
                        tincidunt
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature-box">
                  <div className="clearfix">
                    {/* <div class="iconset">
                              <span class="glyphicon glyphicon-cog icon"></span>
                          </div> */}
                    <div className="feature-content">
                      <h4>Great support</h4>
                      <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in.
                      </p>
                    </div>
                  </div>
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

export default Home;
