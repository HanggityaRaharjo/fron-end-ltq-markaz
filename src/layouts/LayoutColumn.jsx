import React from "react";
import NavLanding from "./NavLanding";
import Footer from "./Footer";

const LayoutColumn = ({ children }) => {
  return (
    <>
      <NavLanding />
      <div className="flex justify-center font-poppins">
        <main className="max-w-[1366px]">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default LayoutColumn;
