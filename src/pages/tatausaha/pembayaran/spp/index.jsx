import React, { useEffect, useState } from "react";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../../components/breadcrumbs";
import Layout from "../../../../layouts/Layout";
import Cookies from "js-cookie";
import axios from "axios";
import useFormatNumber from "../../../../utils/useFormatNumber";
import Badge from "../../../../components/badge/Badge";

const PembayaranSpp = () => {
  const [dataSpp, setDataSpp] = useState([]);
  const [currentImage, setCurrentImage] = useState("");

  const [isShowModalAddCategory, setIsShowModalAddCategory] = useState(false);
  const [isShowModalUpdateCategory, setIsShowModalUpdateCategory] =
    useState(false);
  const [currentDataUpdateCategory, setCurrentDataUpdateCategory] = useState({
    key: "test",
  });

  const GetAllDataSpp = () => {
    axios
      .get(`${import.meta.env.VITE_BACK_END_END_POINT_URL}/tata-usaha/spp`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setDataSpp(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    GetAllDataSpp();
  }, []);

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Tata Usaha</BreadcrumbsItem>
        <BreadcrumbsItem>Kasir</BreadcrumbsItem>
        <BreadcrumbsActive>Data Konsumen</BreadcrumbsActive>
      </Breadcrumbs>
      <ModalAddSpp
        isShowModalAddCategory={isShowModalAddCategory}
        setIsShowModalAddCategory={setIsShowModalAddCategory}
      />
      <ModalUpdateCategory
        isShowModalUpdateCategory={isShowModalUpdateCategory}
        setIsShowModalUpdateCategory={setIsShowModalUpdateCategory}
        currentDataUpdateCategory={currentDataUpdateCategory}
      />

      <ModalDetailImage
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
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
                <span>Buat tagihan</span>
              </button>
            </div>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#2f3a4e] text-white ">
                <th className="p-2 w-10">No</th>
                <th className="p-2">Peserta</th>
                <th className="p-2">Program</th>
                <th className="p-2">Nominal</th>
                <th className="p-2">Status Pembayaran</th>
                <th className="p-2 w-56"></th>
              </tr>
            </thead>
            <tbody>
              {dataSpp &&
                dataSpp.map((item, index) => (
                  <TableData
                    data={item}
                    key={index}
                    number={index + 1}
                    currentImage={currentImage}
                    setCurrentImage={setCurrentImage}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {/* End Table */}
      </section>
    </Layout>
  );
};

const TableData = ({ number, data, currentImage, setCurrentImage }) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <>
      <tr>
        <td className="w-10 p-2 flex justify-center">{number}</td>
        <td className="p-2 ">{data.users.name}</td>
        <td className="p-2  text-center">
          {data.users.user_program[0].program.program_name}
        </td>
        <td className="p-2  text-center">
          Rp.{useFormatNumber(data.nominal)},-
        </td>
        <td className="p-2  text-center">{data.status}</td>
        <td className="p-2  w-56">
          <div className="flex justify-center gap-5">
            <button onClick={() => setIsShowDetail(!isShowDetail)}>
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
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <button>
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
      <tr className="border-b">
        <td colSpan={6}>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: isShowDetail ? "600px" : "0px" }}
          >
            <div className="p-5">
              <h4 className="text-lg font-semibold mb-2">Tagihan</h4>
              <div className="grid grid-cols-2 gap-5">
                {data.tagihan.map((item, index) => (
                  <div
                    key={index}
                    className="mb-4 p-5 bg-white shadow-md rounded-md flex"
                  >
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-500">
                        Tagihan ke - {index + 1}
                      </h5>
                      <div className="flex gap-2">
                        <p>Status :</p>
                        <Badge variant={"success"} text={item.status} />{" "}
                      </div>
                      <p>
                        Nominal :
                        <span className="font-semibold">
                          Rp.{useFormatNumber(item.jumlah)},-
                        </span>
                      </p>
                      <p>Keterangan : {item.keterangan}</p>
                    </div>
                    <div className="w-56 border flex flex-wrap gap-2">
                      <button className="h-fit p-2">
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
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                      <button className="h-fit p-2">
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
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => setCurrentImage(item.gambar)}
                        className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150 h-fit"
                      >
                        Bukti pembayaran
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

const ModalDetailImage = ({ currentImage, setCurrentImage }) => {
  return (
    <div
      className="fixed top-0 left-0 z-[999] w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
      style={{ display: currentImage == "" ? "none" : null }}
    >
      <div className="w-96 h-96 flex bg-white rounded-md shadow-md relative">
        <button
          className="absolute -top-5 -right-5"
          onClick={() => setCurrentImage("")}
        >
          close
        </button>
        <p>{`${
          import.meta.env.VITE_BACK_END_END_POINT
        }/storage/${currentImage}`}</p>
        <div>
          <img
            src={`${
              import.meta.env.VITE_BACK_END_END_POINT
            }/storage/${currentImage}`}
            alt="currentImage"
            className="border"
          />
        </div>
      </div>
    </div>
  );
};

const ModalUpdateCategory = ({
  isShowModalUpdateCategory,
  setIsShowModalUpdateCategory,
  currentDataUpdateCategory,
}) => {
  return (
    <div
      className={`w-screen h-screen fixed flex justify-center items-center bg-black z-[999] left-0 top-0 bg-opacity-50 ${
        isShowModalUpdateCategory ? null : "hidden"
      }`}
    >
      <div className="w-[500px] bg-white rounded-md p-5 shadow-md relative">
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-2xl font-semibold ">
            Update {currentDataUpdateCategory.key}
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
            defaultValue={currentDataUpdateCategory.key}
          />
        </div>
        <div className="flex justify-end gap-5">
          <button
            onClick={() => setIsShowModalUpdateCategory(false)}
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

const ModalAddSpp = ({ isShowModalAddCategory, setIsShowModalAddCategory }) => {
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
          <input type="text" className="border p-2 rounded-md" />
        </div>
        <div className="flex justify-end gap-5">
          <button
            onClick={() => setIsShowModalAddCategory(false)}
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

export default PembayaranSpp;
