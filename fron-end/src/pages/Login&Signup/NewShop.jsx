import { useNavigate } from "react-router-dom";
import "./NewShop.css";

const NewShop = () => {
  const navigate = useNavigate();

  const handleSelection = () => {
    navigate("/seller-registration");
  };
  const handleSelectionn = () => {
    navigate("/Login");
  };

  return (
    <div className="NewShop">
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card ">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">
                : الرجاء أختيار التسجيل
              </h3>
            </div>
            <div className="d-flex justify-content-center align-items-center choise__btn">
              <button className="b__t__n" onClick={() => handleSelection()}>
                التسجيل ك مشتري
              </button>
              <button className="b__t__n" onClick={() => handleSelectionn()}>
                التسجيل ك بائع
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewShop;
