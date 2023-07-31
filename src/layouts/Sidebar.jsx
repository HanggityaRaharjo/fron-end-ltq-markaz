import { useState } from "react";
import logo from "../../public/ltq-logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarStatus }) => {
  const sidebarMenu = {
    "peserta-baru": {
      title: "Peserta Baru",
      child: [
        { title: "Biodata Siswa", link: "/peserta-baru/biodata-siswa" },
        { title: "Pilihan Program", link: "" },
        { title: "Pilihan Biaya Pendidikan", link: "" },

        { title: "Upload Tes Level", link: "" },
      ],
    },
    "daftar-ulang": {
      title: "Daftar Ulang",
      child: [{ title: "Pilihan Biaya Pendidikan", link: "" }],
    },
    "pilihan-hari": {
      title: "Pilihan Hari",
      child: [
        { title: "Kuota Kosong", link: "" },
        { title: "Request Waktu", link: "" },
      ],
    },
    "form-cuti": {
      title: "Form Cuti",
      child: [
        { title: "Kuota Kosong", link: "" },
        { title: "Request Waktu", link: "" },
      ],
    },
  };

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

        <div className="bg-[#169859] text-[#f3faf6] w-full py-2 px-4 rounded-full  font-semibold transition-all duration-150">
          Dashboard
        </div>

        <DropdownDivider name="Formulir Pendaftaran" />
        <DropdownMenu
          name={sidebarMenu["peserta-baru"].title}
          child={sidebarMenu["peserta-baru"].child}
        />
        <DropdownMenu
          name={sidebarMenu["daftar-ulang"].title}
          child={sidebarMenu["daftar-ulang"].child}
        />
        <DropdownMenu
          name="Pilihan Hari"
          child={sidebarMenu["pilihan-hari"].child}
        />

        <DropdownDivider name="Informasi" />

        <button className="py-2 px-1  w-full text-left flex items-center justify-between font-semibold">
          Ujian
        </button>
        <button className="py-2 px-1  w-full text-left flex items-center justify-between font-semibold">
          Form Cuti
        </button>
        <div className="bg-[#169859] text-[#f3faf6] w-full py-2 px-4 rounded-full  font-semibold transition-all duration-150">
          Tambah Program
        </div>
      </div>
    </nav>
  );
};

const DropdownMenu = ({ name, child }) => {
  console.log(child);
  const [dropdownShow, setDropdownShow] = useState(false);
  return (
    <div className=" w-full  rounded-full font-semibold ">
      <button
        className="py-2 px-1  w-full text-left flex items-center justify-between"
        onClick={() => setDropdownShow(!dropdownShow)}
      >
        <span> {name}</span>
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
        className=" flex flex-col transition-all duration-150 gap-2 items-start pl-1 overflow-hidden"
        style={{ maxHeight: dropdownShow ? "350px" : "0px" }}
      >
        {child.map((item, index) => (
          <button
            key={index}
            className="py-2 px-4 hover:bg-[#effff7] w-full rounded-full hover:text-[#169859] transition text-left duration-150"
          >
            {item.title}
          </button>
        ))}
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

export default Sidebar;
