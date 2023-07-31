import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [sidebarShow, setSidebarShow] = useState(true);

  console.log(sidebarShow);
  return (
    <>
      <Navbar sidebarStatus={sidebarShow} HandleSidebar={setSidebarShow} />
      <div className=" flex justify-center bg-gradient-to-r from-white to-[#f1fff8] text-[#4a4a4a] font-poppins">
        <div className="w-full flex max-w-7xl">
          <Sidebar sidebarStatus={sidebarShow} />
          <div className="w-full">
            <main className="pt-20 text-[#1f2937]">
              <div
                className="transition-all"
                style={{ paddingLeft: sidebarShow ? "224px" : "0px" }}
              >
                <div className="py-5">{children}</div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
