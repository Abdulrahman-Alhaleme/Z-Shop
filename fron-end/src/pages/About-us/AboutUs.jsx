import React from "react";
import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="main__about">
        <div className="container">
          <div className="row ">
            <div className="col-12 d-flex justify-content-center about__title">
              ما هو ركن الحرفيين؟
            </div>
          </div>
          <div className="row abour__row">
            <div className="col-lg-4 col-sm-12 about__card">
              <h1>من نحن؟</h1>
              <p>
                ركن الحرفيين عبارة عن سوق عالمي عبر الإنترنت ، حيث يجتمع الأشخاص
                معًا لصنع عناصر فريدة وبيعها وشرائها وجمعها.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12 about__card">
              <h1>دعم المبدعين المستقلين:</h1>
              <p>
                فقط ملايين الأشخاص يبيعون الأشياء التي يحبونها. نجعل العملية
                برمتها سهلة ، ونساعدك على الاتصال مباشرة بالصناع للعثور على شيء
                غير عادي.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12 about__card">
              <h1>راحة البال:</h1>
              <p>
                خصوصيتك هي الأولوية القصوى لفريقنا المتفاني. وإذا احتجت للمساعدة
                ، فنحن دائمًا على استعداد للتدخل للحصول على الدعم.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
