import React, { useEffect } from "react";
import Layout from "../../../layouts/Layout";
import { useState } from "react";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../components/breadcrumbs";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function PengaturanSoal() {
  const [examData, setExamData] = useState([]);

  const GetDataExamType = () => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_END_POINT_URL}/exam-type`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      })
      .then(({ data }) => {
        setExamData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    GetDataExamType();
  }, []);

  console.log(examData, "sampe sini");

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Pengaturan</BreadcrumbsItem>
        <BreadcrumbsActive>Soal</BreadcrumbsActive>
      </Breadcrumbs>
      <section className="p-5 bg-white shadow-lg rounded-md font-poppins">
        {/* Table */}
        <div>
          <div className="flex justify-between items-center mb-5">
            <div className="flex gap-2">
              <span>Menampilan </span>
              <select name="" id="" className="border">
                <option value="10">10</option>
                <option value="10">25</option>
                <option value="10">50</option>
                <option value="10">100</option>
              </select>
              <span>data</span>
            </div>
            <div className="flex gap-5">
              <input
                type="text"
                className=" border border-gray-300 p-1 rounded-md"
                placeholder="search..."
              />
              <Link
                to={"/pengaturan-soal/buat-soal"}
                className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Buat Soal</span>
              </Link>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className="border-b p-2 w-10">No</th>
                <th className="border-b p-2 w-56">Code</th>
                <th className="border-b p-2">Tipe Soal</th>
                <th className="border-b p-2 w-32">Jumlah Soal</th>

                <th className="border-b p-2 w-56">Action</th>
              </tr>
            </thead>
            <tbody>
              {examData &&
                examData.map((item, index) => (
                  <DataPilihanGanda
                    key={item.id}
                    number={index + 1}
                    tipe_soal={item.type_exam}
                    total={item.exampg.length}
                    code={item.code}
                    id={item.id}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {/* End Table */}
      </section>
    </Layout>
  );
}

const DataPilihanGanda = ({ number, tipe_soal, total, code, id }) => {
  return (
    <tr className="text-sm text-gray-500 hover:bg-[#1698591e]">
      <td className="border-b border-x w-10 text-center">{number}</td>
      <td className="border-b border-x w-10 text-center">{code}</td>
      <td className="border-b border-x font-semibold px-5">{tipe_soal}</td>
      <td className="border-b border-x text-center">{total}</td>

      <td className="border-b border-x w-56">
        <div className="flex justify-center gap-5">
          <Link
            to={`/pengaturan-soal/${id}`}
            className="text-blue-500 p-2 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </Link>
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

const DataEssay = () => {
  return (
    <tr className="text-sm text-gray-500 hover:bg-[#1698591e]">
      <td className="border-b border-x w-10 text-center">2</td>
      <td className="border-b border-x w-10 text-center">ES-01</td>
      <td className="border-b border-x font-semibold px-5">Essay</td>
      <td className="border-b border-x text-center">20</td>
      <td className="border-b">Tanggal</td>
      <td className="border-b border-x w-56">
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

export default PengaturanSoal;
