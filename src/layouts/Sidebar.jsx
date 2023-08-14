import { useState } from "react";
import logo from "../../public/ltq-logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarStatus }) => {
  const dummyRole = "admin";
  if (dummyRole == "admin") {
    return (
      <nav
        className="fixed h-screen w-56 transition-all overflow-hidden duration-150 z-[999] left-0 bg-white "
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
          className="flex flex-col gap-2 items-start px-5 overflow-auto "
          style={{ height: "calc(100vh - 100px)" }}
        >
          <DropdownDivider name="Home" />

          <Link
            to={"/dashboard-cabang"}
            className=" text-[#169859] w-full py-2 px-4 text-sm rounded-md  font-semibold transition-all duration-150 flex items-center gap-2"
          >
            <svg
              fill="#6b7280"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M833.935 1063.327c28.913 170.315 64.038 348.198 83.464 384.79 27.557 51.84 92.047 71.944 144 44.387 51.84-27.558 71.717-92.273 44.16-144.113-19.426-36.593-146.937-165.46-271.624-285.064Zm-43.821-196.405c61.553 56.923 370.899 344.81 415.285 428.612 56.696 106.842 15.811 239.887-91.144 296.697-32.64 17.28-67.765 25.411-102.325 25.411-78.72 0-154.955-42.353-194.371-116.555-44.386-83.802-109.102-501.346-121.638-584.245-3.501-23.717 8.245-47.21 29.365-58.277 21.346-11.294 47.096-8.02 64.828 8.357ZM960.045 281.99c529.355 0 960 430.757 960 960 0 77.139-8.922 153.148-26.654 225.882l-10.39 43.144h-524.386v-112.942h434.258c9.487-50.71 14.231-103.115 14.231-156.084 0-467.125-380.047-847.06-847.059-847.06-467.125 0-847.059 379.935-847.059 847.06 0 52.97 4.744 105.374 14.118 156.084h487.454v112.942H36.977l-10.39-43.144C8.966 1395.137.044 1319.128.044 1241.99c0-529.243 430.645-960 960-960Zm542.547 390.686 79.85 79.85-112.716 112.715-79.85-79.85 112.716-112.715Zm-1085.184 0L530.123 785.39l-79.85 79.85L337.56 752.524l79.849-79.85Zm599.063-201.363v159.473H903.529V471.312h112.942Z"
                  fillRule="evenodd"
                />{" "}
              </g>
            </svg>
            Dashboard
          </Link>

          <DropdownDivider name="Otorisasi" />
          <Link
            to={"/otorisasi-pengguna"}
            className=" text-gray-500 w-full py-2 px-4 text-sm rounded-md  font-semibold transition-all duration-150 flex items-center gap-2"
          >
            Pengguna
          </Link>

          <DropdownDivider name="Pengaturan" />
          <Link
            to={"/pengaturan-user"}
            className=" text-gray-500 w-full py-2 px-4 text-sm rounded-md  font-semibold transition-all duration-150 flex items-center gap-2"
          >
            Pengguna
          </Link>

          <Link
            to={"/pengaturan-soal"}
            className=" text-gray-500 w-full py-2 px-4 text-sm rounded-md  font-semibold transition-all duration-150 flex items-center gap-2"
          >
            Soal
          </Link>
          <Link
            to={"/pengaturan-kelas"}
            className=" text-gray-500 w-full py-2 px-4 text-sm rounded-md  font-semibold transition-all duration-150 flex items-center gap-2"
          >
            Kelas
          </Link>

          <DropdownDivider name="Informasi" />

          <div className="bg-[#169859] text-[#f3faf6] w-full py-2 px-4 rounded-md  font-semibold transition-all duration-150">
            Tambah Program
          </div>
        </div>
      </nav>
    );
  }
  if (dummyRole == "peserta") {
    return (
      <nav
        className="fixed h-screen w-56 transition-all overflow-hidden duration-150 z-[999] left-0 bg-white "
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
          className="flex flex-col gap-2 items-start px-5 overflow-auto "
          style={{ height: "calc(100vh - 100px)" }}
        >
          <DropdownDivider name="Home" />

          <div className=" text-[#169859] w-full py-2 px-4 rounded-md  font-semibold transition-all duration-150 flex items-center gap-2">
            <svg
              fill="#6b7280"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M833.935 1063.327c28.913 170.315 64.038 348.198 83.464 384.79 27.557 51.84 92.047 71.944 144 44.387 51.84-27.558 71.717-92.273 44.16-144.113-19.426-36.593-146.937-165.46-271.624-285.064Zm-43.821-196.405c61.553 56.923 370.899 344.81 415.285 428.612 56.696 106.842 15.811 239.887-91.144 296.697-32.64 17.28-67.765 25.411-102.325 25.411-78.72 0-154.955-42.353-194.371-116.555-44.386-83.802-109.102-501.346-121.638-584.245-3.501-23.717 8.245-47.21 29.365-58.277 21.346-11.294 47.096-8.02 64.828 8.357ZM960.045 281.99c529.355 0 960 430.757 960 960 0 77.139-8.922 153.148-26.654 225.882l-10.39 43.144h-524.386v-112.942h434.258c9.487-50.71 14.231-103.115 14.231-156.084 0-467.125-380.047-847.06-847.059-847.06-467.125 0-847.059 379.935-847.059 847.06 0 52.97 4.744 105.374 14.118 156.084h487.454v112.942H36.977l-10.39-43.144C8.966 1395.137.044 1319.128.044 1241.99c0-529.243 430.645-960 960-960Zm542.547 390.686 79.85 79.85-112.716 112.715-79.85-79.85 112.716-112.715Zm-1085.184 0L530.123 785.39l-79.85 79.85L337.56 752.524l79.849-79.85Zm599.063-201.363v159.473H903.529V471.312h112.942Z"
                  fillRule="evenodd"
                />{" "}
              </g>
            </svg>
            Dashboard
          </div>

          <DropdownDivider name="Formulir Pendaftaran" />
          <DropdownMenu name="Peserta Baru" />
          <DropdownMenu name="Daftar Ulang" />
          <DropdownMenu name="Pilihan Hari" />
          <DropdownMenu name="Form Cuti" />
          <DropdownDivider name="Informasi" />
          <DropdownMenu name="Ujian" />
          <div className="bg-[#169859] text-[#f3faf6] w-full py-2 px-4 rounded-md  font-semibold transition-all duration-150">
            Tambah Program
          </div>
        </div>
      </nav>
    );
  }
};

const DropdownMenu = ({ name }) => {
  const [dropdownShow, setDropdownShow] = useState(false);
  return (
    <div className=" w-full  rounded-md font-semibold ">
      <button
        className="py-2 px-4  w-full text-left text-sm flex items-center justify-between"
        onClick={() => setDropdownShow(!dropdownShow)}
      >
        <span className="text-gray-600"> {name}</span>
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
        <button className="py-2 px-4 text-sm text-gray-600 hover:bg-[#effff7] w-full rounded-md hover:text-[#169859] transition text-left duration-150">
          submenu
        </button>
        <button className="py-2 px-4 text-sm text-gray-600 hover:bg-[#effff7] w-full rounded-md hover:text-[#169859] transition text-left duration-150">
          submenu
        </button>
        <button className="py-2 px-4 text-sm text-gray-600 hover:bg-[#effff7] w-full rounded-md hover:text-[#169859] transition text-left duration-150">
          submenu
        </button>
        <button className="py-2 px-4 text-sm text-gray-600 hover:bg-[#effff7] w-full rounded-md hover:text-[#169859] transition text-left duration-150">
          submenu
        </button>
      </div>
    </div>
  );
};

const DropdownDivider = ({ name }) => {
  return (
    <div className=" w-full py-2  rounded-md font-semibold">
      <p className="text-gray-600 border-b pb-1 text-sm">{name}</p>
    </div>
  );
};

export default Sidebar;
