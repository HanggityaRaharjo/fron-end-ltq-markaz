import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsActive,
} from "../../../components/breadcrumbs";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import useAuth from "../../../store/AuthStore";

function PengaturanUser() {
  const [tableData, setTableData] = useState([]);

  const user = useAuth((state) => state);
  console.log(user.user_cabang_id);

  const GetAllUserByCabang = async () => {
    console.log("sampe sini");
    if (!user.user_cabang_id) {
      console.error("user_cabang_id is not available yet");
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/user/${
          user.user_cabang_id
        }`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      );

      console.log(response.data);
      setTableData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    GetAllUserByCabang();
  }, [user.user_cabang_id]);

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Pengaturan</BreadcrumbsItem>
        <BreadcrumbsActive>Pengguna</BreadcrumbsActive>
      </Breadcrumbs>
      <section>
        {/* Table */}
        <div className="p-5 bg-white shadow rounded-md">
          <div className="flex justify-start lg:justify-end">
            <Link
              to={"/tambah-user"}
              className="bg-[#169859] text-[#f3faf6] text-sm p-2  min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150 mb-2"
            >
              <span>Buat Pengguna</span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-between gap-2 items-center mb-5">
            <div className="flex gap-2 flex-wrap">
              <span>Menampilan</span>
              <select name="" id="" className="border">
                <option value="10">10</option>
                <option value="10">25</option>
                <option value="10">50</option>
                <option value="10">100</option>
              </select>
              <span>data</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Filter :</span>

              <select name="" id="" className="border w-56 p-2 rounded-md">
                <option value="all">Semua Pengguna</option>
                <option value="guru">Guru</option>
                <option value="siswa">Siswa</option>
                <option value="tata-usaha">Tata Usaha</option>
                <option value="bendahara">Bendahara</option>
                <option value="admin-cabang">Admin Cabang</option>
              </select>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                className=" border border-gray-300 p-1 rounded-md"
                placeholder="search..."
              />
            </div>
          </div>
          <div className="overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#2f3a4e] text-white text-sm">
                  <th className=" p-2 w-10">No</th>
                  <th className=" p-2">Nama</th>
                  <th className=" p-2 w-32">Peran</th>

                  <th className=" p-2 w-56"></th>
                </tr>
              </thead>
              <tbody>
                {tableData &&
                  tableData.map((item, index) => (
                    <TableData
                      key={item.id}
                      number={index + 1}
                      name={item.user.name}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* End Table */}
      </section>
    </Layout>
  );
}

const TableData = ({ name, number }) => {
  return (
    <tr className="text-sm text-gray-500 hover:bg-[#1698591e]">
      <td className="border-x border-b w-10 text-center">{number}</td>
      <td className="border-x border-b font-semibold px-5">{name}</td>
      <td className="border-x border-b font-semibold px-5">Peserta</td>
      <td className="border-x border-b w-56">
        <div className="flex justify-center gap-5">
          <button className="text-blue-500 p-2 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </button>
          <button className="text-red-500 p-2 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PengaturanUser;
