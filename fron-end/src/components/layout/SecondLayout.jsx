import React from "react";
import SecondHeader from "../Header/SecondHeader";
import SecondFooter from "../Footer/SecondFooter";
import SecondRouters from "../../routers/SecondRouters";

const SecondLayout = () => {
  return (
    <>
      <SecondHeader />
      <div>
        <SecondRouters />
      </div>
      <SecondFooter />
    </>
  );
};

export default SecondLayout;
