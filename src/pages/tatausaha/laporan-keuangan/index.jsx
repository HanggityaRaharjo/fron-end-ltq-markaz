import React, { useState } from "react";

import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../components/breadcrumbs";
import Layout from "../../../layouts/Layout";
import useFormatNumber from "../../../utils/useFormatNumber";

const LaporanKeuangan = () => {
  const [currentTab, setCurrentTab] = useState("jumlah-tagihan");

  const [isShowModalAddCategory, setIsShowModalAddCategory] = useState(false);
  const [isShowModalUpdateCategory, setIsShowModalUpdateCategory] =
    useState(false);
  const [currentDataUpdateCategory, setCurrentDataUpdateCategory] = useState({
    key: "test",
  });

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsActive>
          <p className="font-bold text-gray-800">Laporan Keuangan</p>
        </BreadcrumbsActive>
      </Breadcrumbs>
      <ModalAddCategory
        isShowModalAddCategory={isShowModalAddCategory}
        setIsShowModalAddCategory={setIsShowModalAddCategory}
      />
      <ModalUpdateCategory
        isShowModalUpdateCategory={isShowModalUpdateCategory}
        setIsShowModalUpdateCategory={setIsShowModalUpdateCategory}
        currentDataUpdateCategory={currentDataUpdateCategory}
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
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className="p-2 w-10">No</th>
                <th className="p-2">Program</th>
                <th className="p-2">Tanggal Aktif</th>
                <th className="p-2">Jatuh Tempo</th>
                <th className="p-2">Total Siswa</th>
                <th className="p-2">
                  <div className="flex gap-2 justify-center font-normal">
                    <div className="flex gap-2 items-center">
                      <div className="w-4 h-4 bg-green-600"></div>
                      <p>Sudah bayar</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="w-4 h-4 bg-blue-500"></div>
                      <p>Kadaluarsa</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="w-4 h-4 bg-red-500"></div>
                      <p>Belum Bayar</p>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="w-10 p-2  flex justify-center">1</td>
                <td className="p-2 font-semibold">
                  Tahfidz <span className="font-bold">Batch 30</span>
                </td>
                <td className="p-2 ">Rp.{useFormatNumber(500000)},-</td>
                <td className="p-2 ">20 Februari 2023</td>
                <td className="p-2 ">10</td>
                <td className="w-96 text-white">
                  <div className="flex  justify-center w-full  rounded-full overflow-hidden">
                    <div className="bg-green-600 h-8 overflow-hidden flex justify-center items-center w-[20%]">
                      20%
                    </div>
                    <div className="bg-blue-500 h-8 overflow-hidden flex justify-center items-center w-[80%]">
                      80%
                    </div>
                    <div className="bg-red-500 h-8 overflow-hidden flex justify-center items-center w-[20%]">
                      20%
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="w-10 p-2  flex justify-center">2</td>
                <td className="p-2 font-semibold">
                  Tahfidz <span className="font-bold">Batch 31</span>
                </td>
                <td className="p-2 ">Rp.{useFormatNumber(500000)},-</td>
                <td className="p-2 ">20 Februari 2023</td>
                <td className="p-2 ">10</td>
                <td className="w-96 text-white">
                  <div className="flex  justify-center w-full  rounded-full overflow-hidden">
                    <div className="bg-green-600 h-8 overflow-hidden flex justify-center items-center w-[60%]">
                      60%
                    </div>
                    <div className="bg-blue-500 h-8 overflow-hidden flex justify-center items-center w-[30%]">
                      30%
                    </div>
                    <div className="bg-red-500 h-8 overflow-hidden flex justify-center items-center w-[10%]">
                      10%
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="w-10 p-2  flex justify-center">3</td>
                <td className="p-2 font-semibold">
                  Tahfidz <span className="font-bold">Batch 32</span>
                </td>
                <td className="p-2 ">Rp.{useFormatNumber(500000)},-</td>
                <td className="p-2 ">20 Februari 2023</td>
                <td className="p-2 ">10</td>
                <td className="w-96 text-white">
                  <div className="flex  justify-center w-full  rounded-full overflow-hidden">
                    <div className="bg-green-600 h-8 overflow-hidden flex justify-center items-center w-[50%]">
                      50%
                    </div>
                    <div className="bg-blue-500 h-8 overflow-hidden flex justify-center items-center w-[35%]">
                      35%
                    </div>
                    <div className="bg-red-500 h-8 overflow-hidden flex justify-center items-center w-[15%]">
                      15%
                    </div>
                  </div>
                </td>
              </tr>
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

const ModalAddCategory = ({
  isShowModalAddCategory,
  setIsShowModalAddCategory,
}) => {
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

export default LaporanKeuangan;
