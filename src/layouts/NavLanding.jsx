import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/ltq-logo.png";

function dropdownMenu() {
  const dropMenu = document.getElementById("dropMenu");
  dropMenu.classList.toggle("hidden");
}

function NavLanding() {
  const [pathName, setPathName] = useState(window.location.pathname);
  // const [dropdownShow, setDropdownShow] = useState(false);
  // const [navbarStatus, setNavbarStatus] = useState(false);
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const [isDropList, setIsShowDropList] = useState(false)


  console.log(pathName);

  return (
    <>
      <nav className="fixed  w-full flex justify-center z-[999] ">
        <div className="max-w-7xl  w-full h-20 py-2 transition-all duration-150 relative">
          <div className=" hidden md:flex items-center h-full px-5 bg-white bg-opacity-70 backdrop-blur-sm shadow-lg rounded-full justify-between relative ">
            <div className="flex  justify-between items-center gap-2 w-full p-2">
              <div className="hidden md:block">
                <div className="flex items-center gap-5 font-semibold">
                  <Link
                    to={"/"}
                    className={`${pathName == "/" ? "text-[#169859] bg-[#effff7]" : ""
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
                    <div className="flex flex-col top-7 bg-white rounded-lg shadow-lg absolute w-56 max-h-0 overflow-hidden group-hover:max-h-[400px] transition-all duration-150">
                      <Link to="/ltqmqi" className="px-4 py-2 hover:bg-gray-100">
                        <span>LTQ MQI</span>
                      </Link>
                      <Link to="/mdmqi" className="px-4 py-2 hover:bg-gray-100">
                        <span>MDMQI</span>
                      </Link>
                      <Link to="/qsc" className="px-4 py-2 hover:bg-gray-100">
                        <span>QSC</span>
                      </Link>
                      <Link to="/kajiantafsir" className="px-4 py-2 hover:bg-gray-100">
                        <span>Kajian Tafsir</span>
                      </Link>
                      <Link to="/mulazamah" className="px-4 py-2 hover:bg-gray-100">
                        <span>Mulazamah Akhwat</span>
                      </Link>
                      <Link to="/santri" className="px-4 py-2 hover:bg-gray-100">
                        <span>Santri Nusantara</span>
                      </Link>
                      <Link to="/mukhoyyam" className="px-4 py-2 hover:bg-gray-100">
                        <span>Mukhoyyam</span>
                      </Link>
                      <Link to="/markazalquranakhwat" className="px-4 py-2 hover:bg-gray-100">
                        <span>Markaz Alquan Akhwat</span>
                      </Link>
                    </div>
                  </div>
                  <Link
                    to={"/tentang"}
                    className={`${pathName == "/tentang"
                      ? "text-[#169859] bg-[#effff7]"
                      : ""
                      } px-3 py-1 rounded-full`}
                  >
                    Tentang
                  </Link>
                  <Link
                    to={"/kontak"}
                    className={`${pathName == "/kontak" ? "text-[#169859] bg-[#effff7]" : ""
                      } px-3 py-1 rounded-full`}
                  >
                    Kontak
                  </Link>
                  <Link
                    to={"/faq"}
                    className={`${pathName == "/faq" ? "text-[#169859] bg-[#effff7]" : ""
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
            </div>
          </div>
          <div className="flex justify-end w-full absolute right-5 top-5 md:hidden">
            <button
              onClick={() => setIsShowNavbar(!isShowNavbar)}
              className="bg-white p-1 shadow-md rounded-md active:scale-95 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
        <ListMenu show={isShowNavbar} droplist={isDropList} setdroplist={setIsShowDropList} />
      </nav >
    </>
  );
}

const ListMenu = ({ show, droplist, setdroplist }) => {
  return (
    <div className={`h-[100vh] w-[300px] flex bg-white absolute left-[-400px] top-0 py-20 px-10 transition-all duration-300 md:hidden ${show ? 'left-[0px]' : 'left-[-400px]'}`}>
      <div className="flex flex-col w-full">
        <ul className="flex flex-col gap-5 w-full">
          <li className="py-2 font-medium text-lg border-b-2 border-gray-200 w-full cursor-pointer"><Link to={'/'}>Beranda</Link></li>
          <li onClick={() => setdroplist(!droplist)}
            className={`py-2 font-medium text-lg border-b-2 border-gray-200 w-full cursor-pointer `}>

            <div className="flex items-center justify-between">
              <Link>Cabang</Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition-all duration-200 ${droplist ? 'rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>

            </div>
            <ul className={`flex flex-col gap-2 px-2 transition-all duration-300 overflow-hidden ${droplist ? 'h-[250px]' : 'h-0'}`}>
              <li><Link to={'/ltqmqi'}>LTQ</Link></li>
              <li><Link to={'/mdmqi'}>MDMQI</Link></li>
              <li><Link to={'/qsc'}>QSC</Link></li>
              <li><Link to={'/kajiantafsir'}>Kajian Tafsir</Link></li>
              <li><Link to={'/mulazamah'}>Mulazamah Akhwat</Link></li>
              <li><Link to={'/santri'}>Santri Nusantara</Link></li>
              <li><Link to={'/mukhoyyam'}>Mukhoyyam</Link></li>
              <li><Link to={'/markazalquranakhwat'}>Markaz Alquran Akhwat</Link></li>
            </ul>
          </li>
          <li className="py-2 font-medium text-lg border-b-2 border-gray-200 w-full cursor-pointer"><Link>Tentang</Link></li>
          <li className="py-2 font-medium text-lg border-b-2 border-gray-200 w-full cursor-pointer"><Link>Kontak</Link></li>
          <li className="py-2 font-medium text-lg border-b-2 border-gray-200 w-full cursor-pointer"><Link>FAQ</Link></li>
        </ul>
        <div className="py-20 flex  justify-around">
          <button><Link className="bg-[#169859] px-5 py-1 rounded-md text-white">LOGIN</Link></button>
          <button><Link className="bg-[#169859] px-5 py-1 rounded-md text-white">Register</Link></button>
        </div>
      </div>
    </div>
  )
}

export default NavLanding;
