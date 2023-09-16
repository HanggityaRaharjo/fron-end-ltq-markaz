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
      <nav className="fixed  w-full flex justify-center z-[999] text-[#333333] font-poppins ">
        <div className="max-w-7xl  w-full h-20 py-2 transition-all duration-150 ">
          <div className="flex  h-full px-5 bg-white bg-opacity-70 backdrop-blur-sm shadow-lg rounded-full justify-between relative ">
            <div className="flex  justify-between items-center gap-2 w-full ">
              <div className="hidden md:block h-full">
                <div className="flex items-center gap-5 font-semibold  h-full ">
                  <Link
                    to={"/"}
                    className={`${
                      pathName == "/" ? "text-[#169859] bg-[#effff7]" : ""
                    } px-3 py-1 rounded-full`}
                  >
                    Beranda
                  </Link>
                  <div className="group relative cursor-pointer h-full flex items-center">
                    <div className="flex items-center gap-2 h-full ">
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
                    <div className="top-16 bg-white rounded-md shadow-lg absolute w-[500px] max-h-0 overflow-hidden group-hover:max-h-[400px] transition-all duration-300 font-normal">
                      <div className="grid grid-cols-4 w-full">
                        <Link
                          to="/ltq-mqi"
                          className="px-4 py-2 hover:bg-[#effff7] hover:text-[#169859]"
                        >
                          <span>LTQ MQI</span>
                        </Link>
                        <Link
                          to="/mdmqi"
                          className="px-4 py-2 hover:bg-[#effff7] hover:text-[#169859]"
                        >
                          <span>MDMQI</span>
                        </Link>
                        <Link
                          to="/qsc"
                          className="px-4 py-2 hover:bg-[#effff7] hover:text-[#169859]"
                        >
                          <span>QSC</span>
                        </Link>
                        <Link
                          to="/kajian-tafsir"
                          className="px-4 py-2 hover:bg-[#effff7] hover:text-[#169859]"
                        >
                          <span>Kajian Tafsir</span>
                        </Link>
                        <Link
                          to="/mulazamah-akhwat"
                          className="px-4 py-2 hover:bg-[#effff7] hover:text-[#169859]"
                        >
                          <span>Mulazamah Akhwat</span>
                        </Link>
                        <Link
                          to="/santri-nusantara"
                          className="px-4 py-2 hover:bg-[#effff7] hover:text-[#169859]"
                        >
                          <span>Santri Nusantara</span>
                        </Link>
                        <Link
                          to="/mukhoyyam"
                          className="px-4 py-2 hover:bg-[#effff7] hover:text-[#169859]"
                        >
                          <span>Mukhoyyam</span>
                        </Link>
                        <Link
                          to="/markaz-alquran-akhwat"
                          className="px-4 py-2 hover:bg-[#effff7] hover:text-[#169859]"
                        >
                          <span>Markaz Alquan Akhwat</span>
                        </Link>
                      </div>
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
                </div>
              </div>
              <div className="relative hidden lg:flex justify-between gap-2">
                <Link
                  to="/login"
                  className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                >
                  <span>
                    <span>Masuk</span>
                  </span>
                </Link>
                <Link
                  to="/register"
                  className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                >
                  <span>
                    <span>Daftar</span>
                  </span>
                </Link>
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
