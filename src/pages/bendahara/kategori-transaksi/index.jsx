import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../components/breadcrumbs";
import axios from "axios";
import Cookies from "js-cookie";
const KategoriTransaksi = () => {
  const [isShowModalAddCategory, setIsShowModalAddCategory] = useState(false);
  const [isShowModalUpdateCategory, setIsShowModalUpdateCategory] =
    useState(false);
  const [currentDataUpdateCategory, setCurrentDataUpdateCategory] = useState({
    nama_kategori: "",
    id: "",
  });

  const [dataCategory, setDataCategory] = useState([]);

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

  const HandleCreateCategory = () => {
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
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const HandleUpdateCategory = () => {
    // api/bendahara
  };

  const HandleDeleteCategory = (id) => {
    axios
      .post(
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
        GetAllCategory();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    GetAllCategory();
  }, []);

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Keuangan</BreadcrumbsItem>
        <BreadcrumbsActive>Kategori Transaksi</BreadcrumbsActive>
      </Breadcrumbs>

      <ModalAddCategory
        isShowModalAddCategory={isShowModalAddCategory}
        setIsShowModalAddCategory={setIsShowModalAddCategory}
        HandleCreateCategory={HandleCreateCategory}
        GetAllCategory={GetAllCategory}
      />
      <ModalUpdateCategory
        isShowModalUpdateCategory={isShowModalUpdateCategory}
        setIsShowModalUpdateCategory={setIsShowModalUpdateCategory}
        currentDataUpdateCategory={currentDataUpdateCategory}
        GetAllCategory={GetAllCategory}
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
                onClick={() => setIsShowModalAddCategory(true)}
                className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Tambah Kategori</span>
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className="p-2 w-10">No</th>
                <th className="p-2">Nama Kategori</th>

                <th className="p-2">Opsi</th>
              </tr>
            </thead>
            <tbody>
              {dataCategory &&
                dataCategory.map((item, index) => (
                  <tr className="border-b">
                    <td className="w-10 p-2 border-l flex justify-center">
                      {index + 1}
                    </td>
                    <td className="p-2 border">{item.nama_kategori}</td>

                    <td className="w-64">
                      <div className="flex gap-2 justify-center">
                        <button
                          className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                          onClick={() => {
                            setIsShowModalUpdateCategory(true);
                            setCurrentDataUpdateCategory({
                              id: item.id,
                              nama_kategori: item.nama_kategori,
                            });
                          }}
                        >
                          Update
                        </button>
                        <button
                          onClick={() => HandleDeleteCategory(item.id)}
                          className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                        >
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

const ModalUpdateCategory = ({
  isShowModalUpdateCategory,
  setIsShowModalUpdateCategory,
  currentDataUpdateCategory,
  GetAllCategory,
}) => {
  const [value, setValue] = useState("");

  const HandleSubmitCategory = () => {
    axios
      .post(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/bendahara/kategori/update/${currentDataUpdateCategory.id}`,
        {
          nama_kategori: value,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        GetAllCategory();
        setValue("");
        setIsShowModalUpdateCategory(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div
      className={`w-screen h-screen fixed flex justify-center items-center bg-black z-[999] left-0 top-0 bg-opacity-50 ${
        isShowModalUpdateCategory ? null : "hidden"
      }`}
    >
      <div className="w-[500px] bg-white rounded-md p-5 shadow-md relative">
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-2xl font-semibold ">
            Update {currentDataUpdateCategory.nama_kategori}
          </h4>
          <div className="flex justify-center items-center">
            <button onClick={() => setIsShowModalUpdateCategory(false)}>
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
          <label htmlFor="">Nama Kategori</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            placeholder={currentDataUpdateCategory.nama_kategori}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-5">
          <button
            onClick={() => setIsShowModalUpdateCategory(false)}
            className="border border-[#169859] text-[#169859] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            <span>Tutup</span>
          </button>
          <button
            onClick={() => HandleSubmitCategory()}
            className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            <span>Simpan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalAddCategory = ({
  isShowModalAddCategory,
  setIsShowModalAddCategory,
  HandleCreateCategory,
  GetAllCategory,
}) => {
  const [value, setValue] = useState("");
  const HandleSubmitCategory = () => {
    axios
      .post(
        `${
          import.meta.env.VITE_BACK_END_END_POINT_URL
        }/bendahara/kategori/create`,
        {
          nama_kategori: value,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then(({ data }) => {
        GetAllCategory();
        setValue("");
        setIsShowModalAddCategory(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div
      className={`w-screen h-screen fixed flex justify-center items-center bg-black z-[999] left-0 top-0 bg-opacity-50 ${
        isShowModalAddCategory ? null : "hidden"
      }`}
    >
      <div className="w-[500px] bg-white rounded-md p-5 shadow-md relative">
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-2xl font-semibold ">Tambah Kategori</h4>
          <div className="flex justify-center items-center">
            <button onClick={() => setIsShowModalAddCategory(false)}>
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
          <label htmlFor="">Nama Kategori</label>
          <input
            type="text"
            className="border p-2 rounded-md"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-5">
          <button
            onClick={() => setIsShowModalAddCategory(false)}
            className="border border-[#169859] text-[#169859] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            <span>Tutup</span>
          </button>
          <button
            onClick={() => HandleSubmitCategory()}
            className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            <span>Simpan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KategoriTransaksi;
