import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../../layouts/Layout";

import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsActive,
} from "../../../components/breadcrumbs";

import axios from "axios";
import Cookies from "js-cookie";
import useAuth from "../../../store/AuthStore";

function PengatuanProgram() {
  const [dataProgram, setDataProgram] = useState([]);
  const [isShowModalAddProgram, setIsShowModalAddProgram] = useState(false);
  const [jadwal, setJadwal] = useState([]);
  const user = useAuth((state) => state);

  const GetAllProgramDataByCabangId = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/program/get-program-by-id-cabang/${user.user_cabang_id}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        setDataProgram(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const GetJadwal = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/admincabang/programday`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        setJadwal(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    GetAllProgramDataByCabangId();
    GetJadwal();
  }, [user.user_cabang_id]);

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Pengaturan</BreadcrumbsItem>
        <BreadcrumbsActive>Program</BreadcrumbsActive>
      </Breadcrumbs>
      <ModalAddProgram
        isShowModalAddProgram={isShowModalAddProgram}
        setIsShowModalAddProgram={setIsShowModalAddProgram}
        jadwal={jadwal}
      />
      <section>
        {/* Table */}
        <div className="p-5 bg-white shadow rounded-md">
          <div className="flex justify-between items-center mb-5">
            <div className="flex gap-2">
              <span>Menampilkan</span>
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
              <button
                onClick={() => setIsShowModalAddProgram(true)}
                className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Buat Program</span>
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className=" p-2 w-10">No</th>
                <th className=" p-2 w-10">Nama Program</th>
                <th className=" p-2">Hari</th>
                <th className=" p-2">Jam</th>
                <th className=" p-2">Harga</th>
                <th className=" p-2 w-56"></th>
              </tr>
            </thead>
            <tbody>
              {dataProgram.length !== 0
                ? dataProgram.map((item, index) => (
                    <TableData
                      no={""}
                      key={index}
                      namaProgram={item.program_name}
                      hari={item.program_day}
                      jam={item.program_day.jam}
                      nomor={index + 1}
                    />
                  ))
                : null}
            </tbody>
          </table>
        </div>
        {/* End Table */}
      </section>
    </Layout>
  );
}

const TableData = ({ nomor, namaProgram, hari, jam }) => {
  return (
    <tr className="text-sm text-gray-500 hover:bg-[#1698591e]">
      <td className="border-x border-b w-10 text-center">{nomor}</td>
      <td className="border-x border-b font-semibold px-5 w-40 ">
        {namaProgram}
      </td>
      <td className="border-x border-b font-semibold px-5">
        <div className="flex justify-center gap-2">
          <span>{hari.date_start}</span>
          <span>-</span>
          <span>{hari.date_end}</span>
        </div>
      </td>
      <td className="border-x border-b text-center">{jam}</td>
      <td className="border-x border-b text-center">Harga</td>
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

const ModalAddProgram = ({
  isShowModalAddProgram,
  setIsShowModalAddProgram,
  jadwal,
}) => {
  const HandleSubmitProgram = (e) => {
    e.preventDefault();
    setIsShowModalAddProgram(false);
    console.log(e.target["nama_program"].value);
    console.log("asd");
  };

  return (
    <div
      className="fixed w-screen h-screen left-0 top-0 z-[1000] bg-black bg-opacity-10 justify-center items-center text-[#333333]"
      style={{ display: isShowModalAddProgram ? "flex" : "none" }}
    >
      <div className="bg-white p-5 rounded-md shadow-md w-[500px]">
        <h4 className="text-2xl font-semibold mb-5">Tambah Program</h4>
        <form onSubmit={(e) => HandleSubmitProgram(e)}>
          <FormInput
            label="Nama Program"
            name="nama_program"
            type="text"
            placeholder="Masukan Nama Program"
          />
          <FormInput
            label="Deskripsi"
            name="deskripsi"
            type="text"
            placeholder="Masukan Deskripsi"
          />

          {jadwal.length !== 0 ? (
            <FormSelect
              label="Pilih Waktu"
              name="waktu"
              defaultValue={""}
              option={jadwal}
            />
          ) : null}

          <FormInput
            label="Harga"
            name="harga"
            type="number"
            placeholder="Masukan Harga"
          />
          <button
            type="submit"
            className="bg-[#169859] text-[#f3faf6] p-2 w-full  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
          >
            Tambah
          </button>
        </form>
      </div>
    </div>
  );
};

const FormInput = ({ label, name, type, placeholder }) => {
  return (
    <div className="flex flex-col mb-5">
      <label className="font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none transition duration-300"
        placeholder={placeholder}
      />
    </div>
  );
};

const FormSelect = ({ label, name, defaultValue, option }) => {
  function ubahBulanKeString(tanggal) {
    // Pisahkan tanggal menjadi bagian-bagian (tahun, bulan, hari)
    const bagianTanggal = tanggal.split("-");

    // Daftar nama bulan dalam bahasa Inggris
    const namaBulan = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    // Ambil indeks bulan dari tanggal (indeks 1 karena bulan ada di posisi kedua)
    const indeksBulan = parseInt(bagianTanggal[1], 10) - 1;

    // Ubah indeks bulan menjadi nama bulan
    const namaBulanString = namaBulan[indeksBulan];

    // Gabungkan nama bulan dengan tahun dan hari
    const tanggalHasil = `${bagianTanggal[2]} ${namaBulanString} ${bagianTanggal[0]}`;

    return tanggalHasil;
  }
  console.log(option, "Ini option");
  return (
    <div className="flex flex-col mb-5">
      <label className="font-semibold">{label}</label>
      <select
        name=""
        id=""
        className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none transition duration-300"
      >
        {option &&
          option.map((item, index) => (
            <option key={index} value="asd" className="text-sm">
              {ubahBulanKeString(item.date_start)} -{" "}
              {ubahBulanKeString(item.date_end)} ({item.jam})
            </option>
          ))}
      </select>
    </div>
  );
};

export default PengatuanProgram;
