import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import useAuth from "../store/AuthStore";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Cookies from "js-cookie";

const Layout = ({ children }) => {
  const user = useAuth((state) => state);
  const [sidebarShow, setSidebarShow] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("access_token")) {
      user.HandleMe(Cookies.get("access_token"));
    } else {
      navigate("/login");
    }
  }, [user.isAuth]);

  if (user.isLoading) {
    return <LoadingScreen />;
  }

  if (!user.isLoading) {
    if (user.isAuth) {
      return (
        <>
          <Navbar sidebarStatus={sidebarShow} HandleSidebar={setSidebarShow} />
          <div className=" flex justify-center bg-[#e5eaf0] font-poppins">
            <div className="w-full flex px-5">
              <Sidebar sidebarStatus={sidebarShow} />
              <div className="w-full">
                <main className="pt-20 min-h-screen text-[#1f2937]">
                  <div
                    className={`transition-all ${
                      sidebarShow ? "pl-[0px]" : "pl-[224px]"
                    } pl-0  ${sidebarShow ? "lg:pl-[224px]" : ""}`}
                  >
                    <div className="py-5">{children}</div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
};

export default Layout;
