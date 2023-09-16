import React, { useState } from 'react'
import logo from "../../../public/ltq-logo.png";
import { Link } from "react-router-dom";

const SideBarTu = ({ sidebarStatus }) => {
    const [pathName, setPathName] = useState(window.location.pathname);

    return (
        <nav
            className="fixed h-screen w-56 transition-all overflow-hidden duration-150 z-[999]"
            style={{
                transform: sidebarStatus ? "translateX(0px)" : "translateX(-200px)",
                opacity: sidebarStatus ? 1 : 0,
            }}
        >
            <Link to={"/"}>
                <div className="h-20 w-full flex justify-center mb-5">
                    <img src={logo} className="h-full " alt="" />
                </div>
            </Link>
            <div
                className="flex flex-col gap-2 items-start pr-5 overflow-auto mr-5"
                style={{ height: "calc(100vh - 100px)" }}
            >
                <DropdownDivider name="Home" />

                <Link to={'/show/dashboard-tu'} className="bg-[#169859] text-[#f3faf6] w-full py-2 px-4 font-semibold transition-all duration-150">
                    Dashboard
                </Link>

                <DropdownDivider name="Formulir Pendaftaran" />
                <Link to={'/form/pendaftaran-Tu'} className={`px-4 py-2 font-semibold w-full ${pathName == '/form/pendaftaran-Tu' ? 'bg-[#169859] text-white' : ''} `}>Pendaftaran</Link>
                <Link to={'/form/cuti-tu'} className={`px-4 py-2 font-semibold w-full ${pathName == '/form/cuti-tu' ? 'bg-[#169859] text-white' : ''}`}>Form Cuti</Link>
                <DropdownDivider name="Biodata" />
                <Link to={'/show/biodata-pegawai'} className={`px-4 py-2 font-semibold w-full ${pathName == '/show/biodata-pegawai' ? 'bg-[#169859] text-white' : ''}`}>Biodata</Link>
                <Link to={'/show/pengaturan-akun-tu'} className={`px-4 py-2 font-semibold w-full ${pathName == '/show/pengaturan-akun-tu' ? 'bg-[#169859] text-white' : ''}`}>Pengaturan akun</Link>
                {/* Administrasi */}
                <DropdownDivider name="SPP" />
                <Link to={'/show/spp-peserta-baru'} className={`px-4 py-2 font-semibold w-full ${pathName == '/form/spp-peserta-baru' ? 'bg-[#169859] text-white' : ''} `}>Peserta baru</Link>
                <Link to={'/show/spp-daftar-ulang'} className={`px-4 py-2 font-semibold w-full ${pathName == '/form/spp-daftar-ulang' ? 'bg-[#169859] text-white' : ''} `}>Daftar ulang</Link>
                <DropdownDivider name="Kasir" />
                <Link to={'/show/konsumen'} className={`px-4 py-2 font-semibold w-full ${pathName == '/show/konsumen' ? 'bg-[#169859] text-white' : ''} `}>Konsumen</Link>
                <DropdownDivider name="E-Faktur" />
                <Link to={'/show/jumlah-tagihan'} className={`px-4 py-2 font-semibold w-full ${pathName == '/show/jumlah-tagihan' ? 'bg-[#169859] text-white' : ''} `}>Jumlah Tagihan</Link>
                <DropdownDivider name="Stock barang" />
                <Link to={'/show/stock-barang'} className={`px-4 py-2 font-semibold w-full ${pathName == '/show/stock-barang' ? 'bg-[#169859] text-white' : ''} `}>Stock Barang</Link>
                <Link to={'/show/barang-masuk'} className={`px-4 py-2 font-semibold w-full ${pathName == '/show/barang-masuk' ? 'bg-[#169859] text-white' : ''} `}>Barang Masuk</Link>
                <Link to={'/show/barang-keluar'} className={`px-4 py-2 font-semibold w-full ${pathName == '/show/barang-keluar' ? 'bg-[#169859] text-white' : ''} `}>Barang Keluar</Link>

                {/* <div className="bg-[#169859] text-[#f3faf6] w-full py-2 px-4 rounded-full  font-semibold transition-all duration-150">
                    Tambah Program
                </div> */}
            </div>
        </nav>
    );
};

const DropdownMenu = ({ name }) => {
    const [dropdownShow, setDropdownShow] = useState(false);
    return (
        <div className=" w-full  rounded-full font-semibold ">
            <button
                className={`py-2 px-4  w-full text-left flex items-center justify-between`}
                onClick={() => setDropdownShow(!dropdownShow)}
            >
                <span>{name}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 transition duration-150"
                    style={{
                        transform: dropdownShow ? "rotate(0deg)" : "rotate(180deg)",
                    }}
                >
                    <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <div
                className=" flex flex-col transition-all duration-150 gap-2 items-start pl-5 overflow-hidden"
                style={{ maxHeight: dropdownShow ? "200px" : "0px" }}
            >
                <button className="py-2 px-4 hover:bg-[#effff7] w-full rounded-full hover:text-[#169859] transition text-left duration-150">
                    submensss
                </button>
                <button className="py-2 px-4 hover:bg-[#effff7] w-full rounded-full hover:text-[#169859] transition text-left duration-150">
                    submenu
                </button>
                <button className="py-2 px-4 hover:bg-[#effff7] w-full rounded-full hover:text-[#169859] transition text-left duration-150">
                    submenu
                </button>
                <button className="py-2 px-4 hover:bg-[#effff7] w-full rounded-full hover:text-[#169859] transition text-left duration-150">
                    submenu
                </button>
            </div>
        </div>
    );
};

const DropdownDivider = ({ name }) => {
    return (
        <div className=" w-full py-2  rounded-full font-semibold">
            <p className="text-gray-500 border-b pb-1 text-sm">{name}</p>
        </div>
    );
};

export default SideBarTu