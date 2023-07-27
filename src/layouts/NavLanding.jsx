import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/ltq-logo.png";

function dropdownMenu() {
  const dropMenu = document.getElementById("dropMenu");
  dropMenu.classList.toggle("hidden");
}

function NavLanding() {
  const [pathName, setPathName] = useState(window.location.pathname);
  const [dropdownShow, setDropdownShow] = useState(false);
  const [navbarStatus, setNavbarStatus] = useState(false);
  console.log(pathName);

  return (
    <>
      <nav className="fixed  w-full flex justify-center z-[999] ">
        <div className="max-w-7xl  w-full h-20 py-2 transition-all duration-150 ">
          <div className="flex items-center h-full px-5 bg-white bg-opacity-70 backdrop-blur-sm shadow-lg rounded-full justify-between relative ">
            <div className="flex  justify-between items-center gap-2 w-full p-2">
              <div className="">
                <div className="flex items-center gap-5 font-semibold">
                  <Link
                    to={"/"}
                    className={`${
                      pathName == "/" ? "text-[#169859] bg-[#effff7]" : ""
                    } px-3 py-1 rounded-full`}
                  >
                    Beranda
                  </Link>
                  <div className="group relative cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span>cabang</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 group-hover:rotate-180 transition duration-150"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col top-7 bg-white rounded-lg shadow-lg absolute w-56 max-h-0 overflow-hidden group-hover:max-h-60 transition-all duration-150">
                      <span className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/ltqmqi">LTQ MQI</Link>
                      </span>
                      <span className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/mdmqi">MDMQI</Link>
                      </span>
                      <span className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/qsc">QSC</Link>
                      </span>
                      <span className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/mulazamah">Mulazamah Akhwat</Link>
                      </span>
                      <span className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/santri">Santri Nusantara</Link>
                      </span>
                    </div>
                  </div>
                  <Link
                    to={"/tentang"}
                    className={`${
                      pathName == "/tentang"
                        ? "text-[#169859] bg-[#effff7]"
                        : ""
                    } px-3 py-1 rounded-full`}
                  >
                    Tentang
                  </Link>
                  <Link
                    to={"/kontak"}
                    className={`${
                      pathName == "/kontak" ? "text-[#169859] bg-[#effff7]" : ""
                    } px-3 py-1 rounded-full`}
                  >
                    Kontak
                  </Link>
                  <Link
                    to={"/faq"}
                    className={`${
                      pathName == "/faq" ? "text-[#169859] bg-[#effff7]" : ""
                    } px-3 py-1 rounded-full`}
                  >
                    FAQ
                  </Link>
                  <Link
                    to={"/faq"}
                    className={`${
                      pathName == "/faq" ? "text-[#169859] bg-[#effff7]" : ""
                    } px-3 py-1 rounded-full`}
                  >
                    Informasi
                  </Link>
                  <Link
                    to={"/faq"}
                    className={`${
                      pathName == "/faq" ? "text-[#169859] bg-[#effff7]" : ""
                    } px-3 py-1 rounded-full`}
                  >
                    Program
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:flex justify-between gap-2">
                <button className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                  <span>Login</span>
                </button>
                <button className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                  <span>Register</span>
                </button>
              </div>
              <button className="lg:hidden">
                <a href="">
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
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavLanding;
