import React from "react";
import { Link } from "react-router-dom";

export const Subscription = () => {
  return (
    <>
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
    </>
  );
};

export default Subscription;
