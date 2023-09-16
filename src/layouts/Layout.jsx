import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import useAuth from "../store/AuthStore";
import { useNavigate } from "react-router-dom";
import SideBarGuru from "../components/sideBarGuru";
import SideBarTu from "../components/sideBarTu";
import SideBarBendahara from "../components/sideBarBendahara";

const Layout = ({ children }) => {
  const user = useAuth((state) => state);
  // console.log(user, 'ini di store');
  const navigate = useNavigate();
  // useEffect(() => {
  //   user.authToken === "" ? navigate("/login") : null;
  // }, []);
  const [sidebarShow, setSidebarShow] = useState(true);
  // console.log(sidebarShow);
  return (
    <>
      <Navbar sidebarStatus={sidebarShow} HandleSidebar={setSidebarShow} />

      <div className=" flex justify-center bg-gradient-to-r from-white to-[#f1fff8] text-[#4a4a4a] font-poppins">
        <div className="w-full flex max-w-7xl">
          <SideBarGuru sidebarStatus={sidebarShow} />
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
