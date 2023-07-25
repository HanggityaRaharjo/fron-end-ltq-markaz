import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/ltq-logo.png";

function dropdownMenu() {
  const dropMenu = document.getElementById("dropMenu");
  dropMenu.classList.toggle("hidden");
}

function NavLanding() {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [navbarStatus, setNavbarStatus] = useState(false);

  return (
    <>
      <nav className="fixed  w-full flex justify-center z-[999]">
        <div className="max-w-7xl  w-full h-20 py-2 transition-all duration-150">
          <div className="flex items-center h-full px-5 bg-white bg-opacity-70 backdrop-blur-sm shadow-lg rounded-full justify-between relative ">
            <div className="flex  justify-between items-center gap-2 w-full p-2">
              <div className="">
                <div>
                  <img src={logo} alt="" className="h-[30px] lg:hidden" />
                </div>
                <ul className="hidden lg:flex justify-between gap-5 ">
                  <li>
                    <Link to={"/"}>Beranda</Link>
                  </li>
                  <li
                    onClick={() => setNavbarStatus(!navbarStatus)}
                    className="relative "
                  >
                    <Link to={""} className="flex items-center gap-2">
                      Cabang
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Link>

                    <ul
                      className={`${
                        navbarStatus ? "block" : "hidden"
                      } mt-40 h-auto bg-gray-200 w-[40vh]`}
                    >
                      <li className="py-2 relative">
                        <a href="" className="flex items-center gap-2">
                          Program
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </a>
                        <ul className="absolute left-20 hidden">
                          <li>
                            <Link to={""}>program 1</Link>
                          </li>
                          <li>
                            <a href="">program 2</a>
                          </li>
                          <li>
                            <a href="">program 3</a>
                          </li>
                          <li>
                            <a href="">program 4</a>
                          </li>
                          <li>
                            <a href="">program 5</a>
                          </li>
                        </ul>
                      </li>
                      <li className=" py-2">
                        <a href="">Informasi</a>
                      </li>
                      <li className=" py-2">
                        <a href="">FAQ</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Tentang</a>
                  </li>
                  <li>
                    <a href="">Kontak</a>
                  </li>
                </ul>
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
