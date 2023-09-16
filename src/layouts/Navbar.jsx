import { useState, useEffect } from "react";
import useAuth from "../store/AuthStore";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ({ sidebarStatus, HandleSidebar }) => {
  const [dropdownShow, setDropdownShow] = useState(false);

  const user = useAuth((state) => state);

  const navigate = useNavigate();
  useEffect(() => {
    user.isAuth ? null : navigate("/login");
  }, [user.isAuth]);

  const HandleLogout = () => {
    user.logout(Cookies.get("access_token"));
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full flex justify-center z-[999]">
      <div
        className="   w-full h-20  transition-all duration-150"
        style={{ paddingLeft: sidebarStatus ? "224px" : "0px" }}
      >
        <div className="flex items-center h-full px-5  bg-white  shadow-lg  justify-between relative ">
          <button
            className="hover:text-[#169859]"
            onClick={() => HandleSidebar(!sidebarStatus)}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current stroke-2 fill-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div className="flex items-center gap-5">
            {/* Notification */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {/* End Notification */}
            {/* Akun */}
            <div className="flex items-center gap-2">
              {/* Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownShow(!dropdownShow)}
                  className=" p-2  rounded-full font-semibold flex justify-center items-center gap-2 hover:bg-slate-100  transition duration-150 "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 stroke-current stroke-2 fill-none transition duration-150"
                    style={{
                      transform: dropdownShow
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                  <span>{user.name}</span>

                  <img
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </button>
                <div
                  className="absolute top-[65px] right-0 rounded-md px-2 justify-around overflow-hidden bg-white shadow w-56 flex flex-col transition-all duration-150"
                  style={{ maxHeight: dropdownShow ? "200px" : "0px" }}
                >
                  <button className="text-gray-500 flex font-semibold my-1 py-2 px-4 hover:bg-[#effff7] w-full gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Profil Akun
                  </button>
                  <button
                    className="text-gray-500 flex font-semibold my-1 py-2 px-4 hover:bg-[#effff7] border-t-2 w-full gap-2 items-center"
                    onClick={() => HandleLogout()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-red-500 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                    Keluar
                  </button>
                </div>
              </div>
              {/* End Dropdown */}
            </div>
            {/* End Akun */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
