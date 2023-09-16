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

function AlurKas() {
  const [tableData, setTableData] = useState([]);
  const [isShowModalCategory, setIsShowModalCategory] = useState(false);
  const [isShowModalTransaction, setIsShowModalTransaction] = useState(false);
  const [selectedKasEdit, setSelectedKasEdit] = useState({});

  console.log(tableData);
  const GetAllAlurKas = () => {
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
        setTableData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    GetAllAlurKas();
  }, []);

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsActive>Alur Kas</BreadcrumbsActive>
      </Breadcrumbs>
      <ModalKategori
        isShowModalCategory={isShowModalCategory}
        setIsShowModalCategory={setIsShowModalCategory}
      />
      <ModalTransaction
        isShowModalTransaction={isShowModalTransaction}
        setIsShowModalTransaction={setIsShowModalTransaction}
      />
      <ModalTransactionEdit
        selectedKasEdit={selectedKasEdit}
        setSelectedKasEdit={setSelectedKasEdit}
      />
      <section>
        {/* Table */}
        <div className="p-5 bg-white shadow rounded-md text-sm">
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
                onClick={() =>
                  setIsShowModalTransaction(!isShowModalTransaction)
                }
                className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Buat Data Kas</span>
              </button>
              <button
                className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                onClick={() => setIsShowModalCategory(!isShowModalCategory)}
              >
                <span>Buat Kategori Kas</span>
              </button>
            </div>
          </div>
          <div className="flex justify-end ">
            <button className=" text-sm  p-2  rounded-t-lg bg-[#169859] border text-[#f3faf6] font-semibold flex justify-center items-center gap-2  active:scale-95 transition duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              PDF
            </button>
            <button className=" text-sm  p-2  rounded-t-lg bg-[#169859] border text-[#f3faf6] font-semibold flex justify-center items-center gap-2  active:scale-95 transition duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              PDF
            </button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className=" p-2 w-10">No</th>
                <th className=" p-2">Tanggal</th>
                <th className=" p-2">Nama Kas</th>
                <th className=" p-2">Keterangan</th>
                <th className=" p-2 w-32">Pemasukan</th>
                <th className=" p-2 w-32">Pengeluaran</th>
                <th className=" p-2 w-56">Saldo</th>
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData.map((item, index) => (
                  <TableData
                    key={index}
                    tanggal={item.tanggal}
                    namaKas={item.nama_transaksi}
                    keterangan={item.keterangan}
                    pemasukan={item.pemasukan}
                    pengeluaran={item.pengeluaran}
                    objectData={item}
                    nomor={index + 1}
                    setSelectedKasEdit={setSelectedKasEdit}
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

const TableData = ({
  namaKas,
  keterangan,
  pemasukan,
  nomor,
  pengeluaran,
  tanggal,
  setSelectedKasEdit,
  objectData,
}) => {
  return (
    <tr className="text-sm text-gray-500 hover:bg-[#1698591e]">
      <td className="border-x border-b w-10 text-center">{nomor}</td>
      <td className="border-x border-b w-32 text-center">{tanggal}</td>
      <td className="border-x border-b font-semibold px-5 ">{namaKas}</td>
      <td className="border-x border-b font-semibold px-5 ">{keterangan}</td>
      <td className="border-x border-b text-center w-20">{pemasukan}</td>
      <td className="border-x border-b text-center">{pengeluaran}</td>

      <td className="border-x border-b w-56">
        <div className="flex justify-center gap-5">
          <button
            className="text-blue-500 p-2 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            onClick={() => setSelectedKasEdit(objectData)}
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

const ModalTransactionEdit = ({ selectedKasEdit, setSelectedKasEdit }) => {
  const [dataCategoryTransaction, setDataCategoryTransaction] = useState([]);
  const GetAllCategoryTransaction = () => {
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
        setDataCategoryTransaction(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    setDataCategoryTransaction([]);
    GetAllCategoryTransaction();
  }, [selectedKasEdit]);

  if (Object.keys(selectedKasEdit).length !== 0) {
    return (
      <div className="min-h-screen bg-black bg-opacity-10 fixed w-screen left-0 top-0 z-[999] flex justify-center items-center transition-all duration-300">
        <div className="bg-white rounded-md rounded-tr-none shadow p-5 w-96  relative text-sm">
          <form onSubmit={(e) => HandleSubmitTransaction(e)} method="POST">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex flex-col">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Nama Kas
                </label>
                <input
                  name="nama_transaksi"
                  type="text"
                  className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
                  placeholder="Nama transaksi"
                  defaultValue={selectedKasEdit.nama_transaksi}
                />
              </div>
              <div className="flex flex-col">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Keterangan
                </label>
                <textarea
                  name="keterangan"
                  id=""
                  cols="30"
                  rows="10"
                  className=" w-full border border-[#2f3a4e]  px-5 h-20 rounded-md rounded-tl-none"
                  placeholder="Keterangan"
                  defaultValue={selectedKasEdit.keterangan}
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Kategori Kas
                </label>
                <select
                  name="kategori_transaksi"
                  id=""
                  className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
                >
                  <option value="" disabled>
                    --Pilih Kategori Kas--
                  </option>
                  {dataCategoryTransaction &&
                    dataCategoryTransaction.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.nama_kategori}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Tanggal
                </label>
                <input
                  name="tanggal"
                  type="date"
                  className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
                  placeholder="Type here.."
                  defaultValue={"2023-10-12"}
                />
              </div>
              <div className="flex flex-col">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Pemasukan
                </label>
                <input
                  name="pemasukan"
                  type="number"
                  className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Pengeluaran
                </label>
                <input
                  name="pengeluaran"
                  type="number"
                  className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
                  placeholder="0"
                />
              </div>
              <div className="flex justify-center gap-5">
                <button className=" text-sm right-0 p-2 px-4 rounded-t-md bg-[#169859] border border-[#169859] text-[#f3faf6]  min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                  Submit
                </button>
                <button
                  type="button"
                  className=" text-sm right-0 p-2 px-4 rounded-t-md bg-transparent border border-[#169859] text-[#169859]  min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                  onClick={() => setSelectedKasEdit({})}
                >
                  Batal
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

const ModalTransaction = ({
  isShowModalTransaction,
  setIsShowModalTransaction,
}) => {
  const [dataCategoryTransaction, setDataCategoryTransaction] = useState([]);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const dateNow = `${year}-${month}-${day}`;

  const GetAllCategoryTransaction = () => {
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
        setDataCategoryTransaction(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const HandleSubmitTransaction = (e) => {
    e.preventDefault();

    if (
      e.target["nama_transaksi"].value == "" ||
      e.target["kategori_transaksi"].value == ""
    ) {
      return false;
    }

    let dataStructure = {
      nama_transaksi: e.target["nama_transaksi"].value,
      kategori_transaksi: e.target["kategori_transaksi"].value,
      tanggal: e.target["tanggal"].value,
      pemasukan: e.target["pemasukan"].value,
      pengeluaran: e.target["pengeluaran"].value,
      keterangan: e.target["keterangan"].value,
    };

    axios
      .post(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/bendahara/alur-kas/create`,
        dataStructure,
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

  useEffect(() => {
    setDataCategoryTransaction([]);
    if (isShowModalTransaction) {
      GetAllCategoryTransaction();
    }
  }, [isShowModalTransaction]);

  return (
    <div
      className="min-h-screen bg-black bg-opacity-10 fixed w-screen left-0 top-0 z-[999] flex justify-center items-center transition-all duration-300"
      style={{
        top: isShowModalTransaction ? null : "-700px",
      }}
    >
      <div className="bg-white rounded-md rounded-tr-none shadow p-5 w-96  relative text-sm">
        <button
          className="absolute -top-[38px] text-sm right-0 p-2 px-4 rounded-t-md bg-[#169859] border border-[#169859] text-[#f3faf6]  min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 rounded-b-none transition duration-150"
          onClick={() => setIsShowModalTransaction(false)}
        >
          Tutup
        </button>

        {dataCategoryTransaction.length !== 0 ? (
          <form onSubmit={(e) => HandleSubmitTransaction(e)} method="POST">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex flex-col">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Nama Transaksi
                </label>
                <input
                  name="nama_transaksi"
                  type="text"
                  className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
                  placeholder="Nama transaksi"
                />
              </div>
              <div className="flex flex-col">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Keterangan
                </label>
                <textarea
                  name="keterangan"
                  id=""
                  cols="30"
                  rows="10"
                  className=" w-full border border-[#2f3a4e]  px-5 h-20 rounded-md rounded-tl-none"
                  placeholder="Keterangan"
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Kategori Kas
                </label>
                <select
                  name="kategori_transaksi"
                  id=""
                  className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
                >
                  <option value="" disabled>
                    --Pilih Kategori Kas--
                  </option>
                  {dataCategoryTransaction &&
                    dataCategoryTransaction.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.nama_kategori}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Tanggal
                </label>
                <input
                  name="tanggal"
                  type="date"
                  className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
                  placeholder="Type here.."
                  defaultValue={dateNow}
                />
              </div>
              <div className="flex flex-col">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Pemasukan
                </label>
                <input
                  name="pemasukan"
                  type="number"
                  className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                  Pengeluaran
                </label>
                <input
                  name="pengeluaran"
                  type="number"
                  className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
                  placeholder="0"
                />
              </div>
              <div className="flex justify-center gap-5">
                <button className=" text-sm right-0 p-2 px-4 rounded-t-md bg-[#169859] border border-[#169859] text-[#f3faf6]  min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                  Submit
                </button>
                <button
                  className=" text-sm right-0 p-2 px-4 rounded-t-md bg-transparent border border-[#169859] text-[#169859]  min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                  onClick={() => setIsShowModalTransaction(false)}
                >
                  Batal
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 gap-16">
            <div>
              <div className="bg-gray-500 h-4 animate-pulse w-32 mb-2"></div>
              <div className="bg-gray-500 h-6 animate-pulse w-full"></div>
            </div>
            <div>
              <div className="bg-gray-500 h-4 animate-pulse w-32 mb-2"></div>
              <div className="bg-gray-500 h-6 animate-pulse w-full"></div>
            </div>
            <div>
              <div className="bg-gray-500 h-4 animate-pulse w-32 mb-2"></div>
              <div className="bg-gray-500 h-6 animate-pulse w-full"></div>
            </div>
            <div>
              <div className="bg-gray-500 h-4 animate-pulse w-32 mb-2"></div>
              <div className="bg-gray-500 h-6 animate-pulse w-full"></div>
            </div>
            <div>
              <div className="bg-gray-500 h-4 animate-pulse w-32 mb-2"></div>
              <div className="bg-gray-500 h-6 animate-pulse w-full"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ModalKategori = ({ isShowModalCategory, setIsShowModalCategory }) => {
  const [dataCategoryTransaction, setDataCategoryTransaction] = useState([]);
  const [inputCategoryName, setInputCategoryName] = useState("");
  const [statusCreate, setStatusCreate] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState({});
  const [selectedEditCategoryName, setSelectedEditCategoryName] = useState({});

  const GetAllCategoryTransaction = () => {
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
        setDataCategoryTransaction(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const HandleCreateCategoryTransaction = () => {
    setStatusCreate("loading");
    let objectData = {
      nama_kategori: inputCategoryName,
    };
    axios
      .post(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/bendahara/kategori/create`,
        objectData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        GetAllCategoryTransaction();
        setInputCategoryName("");
        setStatusCreate("success");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setStatusCreate("warning");
      });
  };
  const HandleEditCategoryTransaction = (item, value) => {
    let objectData = {
      nama_kategori: value,
    };
    axios
      .post(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/bendahara/kategori/update/${item.id}`,
        objectData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        GetAllCategoryTransaction();
        setSelectedEditCategoryName({});
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const HandleDeleteCategoryTransaction = (id) => {
    console.log("sampe sini", id);
    axios
      .delete(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/bendahara/kategori/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        GetAllCategoryTransaction();
        setSelectedCategoryName({});
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    GetAllCategoryTransaction();
  }, []);

  return (
    <div
      className="min-h-screen bg-black bg-opacity-10 fixed w-screen left-0 top-0 z-[999] flex justify-center items-center transition-all duration-300"
      style={{
        top: isShowModalCategory ? null : "-700px",
      }}
    >
      <div className="bg-white rounded-md rounded-tr-none shadow p-5 w-8/12 h-[500px] relative text-sm">
        {/* Modal Confirmation Delete */}
        <ModalConfirmationDelete
          itemObject={selectedCategoryName}
          setSelectedCategoryName={setSelectedCategoryName}
          HandleDeleteCategoryTransaction={HandleDeleteCategoryTransaction}
        />
        {/* End Modal Confirmation Delete */}
        <ModalConfirmationEdit
          setSelectedEditCategoryName={setSelectedEditCategoryName}
          itemObject={selectedEditCategoryName}
          HandleEditCategoryTransaction={HandleEditCategoryTransaction}
        />
        <button
          className="absolute -top-[38px] text-sm right-0 p-2 px-4 rounded-t-md bg-[#169859] border border-[#169859] text-[#f3faf6]  min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 rounded-b-none transition duration-150"
          onClick={() => setIsShowModalCategory(!isShowModalCategory)}
        >
          Tutup
        </button>
        <div className="flex justify-between items-end mb-5">
          <h4 className="text-2xl text-gray-500 font-semibold">Kategori Kas</h4>
          <input
            type="text"
            className=" border border-gray-300 p-1 rounded-md"
            placeholder="search..."
          />
        </div>
        {/* Table */}
        <div className="h-96 max-h-[350px] overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#2f3a4e] sticky top-0 text-white text-sm">
                <th className="p-2 w-10 border">No</th>
                <th className=" p-2 ">Nama Kategori Kas</th>
                <th className=" p-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataCategoryTransaction &&
                dataCategoryTransaction.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 border w-10 text-center">{index + 1}</td>
                    <td className="p-2 border">{item.nama_kategori}</td>
                    <td className="p-2 border w-56">
                      <div className="flex justify-center gap-5">
                        <button
                          className="text-blue-500 p-2 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                          onClick={() => setSelectedEditCategoryName(item)}
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
                        </button>
                        <button
                          className="text-red-500 p-2 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                          onClick={() => setSelectedCategoryName(item)}
                        >
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
                ))}
            </tbody>
          </table>
        </div>
        {/* End Table */}
        {/* Create */}
        <div className="absolute bottom-5  left-0 px-5 w-full flex justify-end items-end">
          <div className="flex items-end">
            <div className="mb-2 mr-2">
              {statusCreate === "loading" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 animate-spin"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              ) : null}
              {statusCreate === "success" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6 bg-[#169859] rounded-full text-white p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : null}
              {statusCreate === "warning" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              ) : null}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                className=" border border-gray-300 p-2 rounded-md rounded-r-none w-64 text-sm"
                placeholder="Nama kategori Kas"
                value={inputCategoryName}
                onChange={(e) => setInputCategoryName(e.target.value)}
              />
            </div>
            <button
              className="bg-[#169859] border border-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 rounded-l-none transition duration-150"
              onClick={() => HandleCreateCategoryTransaction()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 scale-150"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
              Buat Kategori
            </button>
          </div>
        </div>
        {/* End Create */}
      </div>
    </div>
  );
};

const ModalConfirmationDelete = ({
  itemObject,
  setSelectedCategoryName,
  HandleDeleteCategoryTransaction,
}) => {
  if (Object.keys(itemObject).length !== 0) {
    return (
      <div className="bg-white p-5 rounded-md shadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-2xl text-gray-500 font-semibold mb-5">
          Yakin menghapus data ini?
        </h3>
        <p className="mb-5 font-semibold text-center text-gray-500">
          {itemObject.nama_kategori}
        </p>
        <div className="flex justify-center gap-5">
          <button
            className="text-sm right-0 p-2 px-4 rounded-t-md bg-[#169859] border border-[#169859] text-[#f3faf6]  min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            onClick={() => HandleDeleteCategoryTransaction(itemObject.id)}
          >
            Hapus
          </button>
          <button
            className="text-sm right-0 p-2 px-4 rounded-t-md bg-transparent border border-[#169859] text-[#169859]  min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            onClick={() => setSelectedCategoryName({})}
          >
            Batal
          </button>
        </div>
      </div>
    );
  }
};

const ModalConfirmationEdit = ({
  setSelectedEditCategoryName,
  itemObject,
  HandleEditCategoryTransaction,
}) => {
  if (Object.keys(itemObject).length !== 0) {
    const [inputNamaKategori, setInputNamaKategori] = useState(
      itemObject.nama_kategori
    );
    return (
      <div className="bg-white w-80 p-5 rounded-md shadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-2xl text-gray-500 font-semibold mb-5 text-center">
          {itemObject.nama_kategori}
        </h3>
        <div className="flex flex-col mb-5 gap-2">
          <label htmlFor="">Nama Kategori</label>
          <input
            type="text"
            className=" border border-gray-300 p-2 rounded-md w-full text-sm"
            placeholder="Nama kategori Transaksi"
            defaultValue={itemObject.nama_kategori}
            onChange={(e) => setInputNamaKategori(e.target.value)}
          />
        </div>
        <div className="flex justify-center gap-5">
          <button
            className="text-sm right-0 p-2 px-4 rounded-t-md bg-[#169859] border border-[#169859] text-[#f3faf6]  min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            onClick={() =>
              HandleEditCategoryTransaction(itemObject, inputNamaKategori)
            }
          >
            Submit
          </button>
          <button
            className="text-sm right-0 p-2 px-4 rounded-t-md bg-transparent border border-[#169859] text-[#169859]  min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            onClick={() => setSelectedEditCategoryName({})}
          >
            Batal
          </button>
        </div>
      </div>
    );
  }
};

export default AlurKas;
