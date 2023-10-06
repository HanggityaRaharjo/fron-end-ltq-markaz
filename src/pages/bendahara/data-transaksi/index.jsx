import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../components/breadcrumbs";
import axios from "axios";
import Cookies from "js-cookie";
import useFormatNumber from "../../../utils/useFormatNumber";
const DataTransaksi = () => {
  const [dataTransaction, setdataTransaction] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);

  const [isShowModalAddTransaction, setIsShowModalAddTransaction] =
    useState(false);
  const [isShowModalUpdateTransaction, setIsShowModalUpdateTransaction] =
    useState(false);
  const [currentDataUpdateTransaction, setCurrentDataUpdateTransaction] =
    useState({ nama_kategori: "" });

  const GetAllTransaction = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/bendahara/alur-kas`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setdataTransaction(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const GetAllCategory = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/bendahara/kategori`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        setDataCategory(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    GetAllCategory();
    GetAllTransaction();
  }, []);

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Keuangan</BreadcrumbsItem>
        <BreadcrumbsActive>Data Transaksi</BreadcrumbsActive>
      </Breadcrumbs>

      <ModalAddTransaction
        isShowModalAddTransaction={isShowModalAddTransaction}
        setIsShowModalAddTransaction={setIsShowModalAddTransaction}
      />
      <ModalUpdateTransaction
        isShowModalUpdateTransaction={isShowModalUpdateTransaction}
        setIsShowModalUpdateTransaction={setIsShowModalUpdateTransaction}
        currentDataUpdateTransaction={currentDataUpdateTransaction}
        dataCategory={dataCategory}
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
                onClick={() => setIsShowModalAddTransaction(true)}
                className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Buat Data Transaksi</span>
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr rowSpan={2} className="bg-[#2f3a4e] text-white text-sm">
                <th rowSpan={2} className="p-2 w-10">
                  No
                </th>
                <th rowSpan={2} className="p-2">
                  Tanggal
                </th>
                <th rowSpan={2} className="p-2">
                  Kategori
                </th>
                <th rowSpan={2} className="p-2">
                  Keterangan
                </th>
                <th colSpan={2} className="p-2">
                  Jenis
                </th>
                <th rowSpan={2} className="p-2">
                  Opsi
                </th>
              </tr>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className="text-center">Pemasukan</th>
                <th className="text-center">Pengeluaran</th>
              </tr>
            </thead>
            <tbody>
              {dataTransaction &&
                dataTransaction.map((item, index) => (
                  <tr className="border-b text-sm" key={index}>
                    <td className="w-10 p-2 border-l flex justify-center">
                      {index + 1}
                    </td>
                    <td className="p-2 border text-center">{item.tanggal}</td>
                    <td className="p-2 border">
                      {item.kategori_transaksi.nama_kategori}
                    </td>
                    <td className="p-2 border">{item.keterangan}</td>

                    {item.jenis_transaksi == "pemasukan" ? (
                      <>
                        <td className="p-2 border text-center">
                          Rp.{useFormatNumber(item.nominal)},-
                        </td>
                        <td className="p-2 border text-center">-</td>
                      </>
                    ) : (
                      <>
                        <td className="p-2 border text-center">-</td>
                        <td className="p-2 border text-center">
                          Rp.{useFormatNumber(item.nominal)},-
                        </td>
                      </>
                    )}

                    <td className="w-64">
                      <div className="flex gap-2 justify-center">
                        <button
                          className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                          onClick={() => {
                            setCurrentDataUpdateTransaction(item);
                            setIsShowModalUpdateTransaction(true);
                          }}
                        >
                          Update
                        </button>
                        <button className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* End Table */}
      </section>
    </Layout>
  );
};

const ModalAddTransaction = ({
  isShowModalAddTransaction,
  setIsShowModalAddTransaction,
}) => {
  return (
    <div
      className={`w-screen h-screen fixed flex justify-center items-center bg-black z-[999] left-0 top-0 bg-opacity-50 ${
        isShowModalAddTransaction ? null : "hidden"
      }`}
    >
      <div className="w-[500px] bg-white rounded-md p-5 shadow-md relative">
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-2xl font-semibold ">Tambah Data Transaksi</h4>
          <div className="flex justify-center items-center">
            <button onClick={() => setIsShowModalAddTransaction(false)}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">Tanggal</label>
          <input type="date" name="tanggal" className="border p-2 rounded-md" />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">Jenis</label>
          <select name="jenis" id="" className="border p-2 rounded-md">
            <option value="">Pemasukan</option>
            <option value="">Pengeluaran</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">Kategori</label>
          <select name="jenis" id="" className="border p-2 rounded-md">
            <option value="">Pemasukan</option>
            <option value="">Pengeluaran</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">Nominal</label>
          <input
            type="number"
            className="border p-2 rounded-md"
            placeholder="Masukan nominal"
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">Keterangan</label>
          <textarea
            name="keterangan"
            id=""
            cols="30"
            rows="2"
            className="border p-2 rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-end gap-5">
          <button
            onClick={() => setIsShowModalAddTransaction(false)}
            className="border border-[#169859] text-[#169859] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            <span>Tutup</span>
          </button>
          <button className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
            <span>Simpan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalUpdateTransaction = ({
  isShowModalUpdateTransaction,
  setIsShowModalUpdateTransaction,
  currentDataUpdateTransaction,
  dataCategory,
}) => {
  const HandleUpdateTransaction = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/bendahara/kategori`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div
      className={`w-screen h-screen fixed flex justify-center items-center bg-black z-[999] left-0 top-0 bg-opacity-50 ${
        isShowModalUpdateTransaction ? null : "hidden"
      }`}
    >
      <div className="w-[500px] bg-white rounded-md p-5 shadow-md relative">
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-2xl font-semibold ">Update Data Transaksi</h4>
          <div className="flex justify-center items-center">
            <button onClick={() => setIsShowModalUpdateTransaction(false)}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">Tanggal</label>
          <input
            type="date"
            name="tanggal"
            className="border p-2 rounded-md"
            defaultValue={currentDataUpdateTransaction.tanggal}
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">Jenis</label>
          <select
            value={currentDataUpdateTransaction.jenis_transaksi}
            name="jenis"
            id=""
            className="border p-2 rounded-md"
          >
            <option value="pemasukan">Pemasukan</option>
            <option value="pengeluaran">Pengeluaran</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">Kategori</label>
          <select name="jenis" id="" className="border p-2 rounded-md">
            {dataCategory &&
              dataCategory.map((item, index) => (
                <option value="" key={index}>
                  {item.nama_kategori}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">Nominal</label>
          <input
            type="number"
            className="border p-2 rounded-md"
            placeholder="Masukan nominal"
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">Keterangan</label>
          <textarea
            name="keterangan"
            id=""
            cols="30"
            value={currentDataUpdateTransaction.keterangan}
            rows="2"
            className="border p-2 rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-end gap-5">
          <button
            onClick={() => setIsShowModalUpdateTransaction(false)}
            className="border border-[#169859] text-[#169859] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            <span>Tutup</span>
          </button>
          <button className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
            <span>Simpan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTransaksi;
