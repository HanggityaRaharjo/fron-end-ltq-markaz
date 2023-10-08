import React, { useState } from "react";
import Layout from "../../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../../components/breadcrumbs";

const BarangDiBeli = () => {
  const [isShowModalAddCategory, setIsShowModalAddCategory] = useState(false);
  const [isShowModalUpdateCategory, setIsShowModalUpdateCategory] =
    useState(false);
  const [currentDataUpdateCategory, setCurrentDataUpdateCategory] = useState({
    key: "test",
  });

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Tata Usaha</BreadcrumbsItem>
        <BreadcrumbsItem>Kasir</BreadcrumbsItem>
        <BreadcrumbsActive>Data Konsumen</BreadcrumbsActive>
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
              <tr className="border-b">
                <td className="w-10 p-2 border flex justify-center">1</td>
                <td className="p-2 border">ASD</td>
                <td className="p-2 border">ASD</td>
                <td className="p-2 border">ASD</td>
                <td className="p-2 border">ASD</td>
                <td className="p-2 border">ASD</td>
                <td className="w-64">
                  <div className="flex gap-2 justify-center">
                    <button
                      className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                      onClick={() => {
                        setIsShowModalUpdateCategory(true);
                        setCurrentDataUpdateCategory({ key: "test" });
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
              <tr className="border-b">
                <td className="w-10 p-2 border flex justify-center">1</td>
                <td className="p-2 border">ASD</td>
                <td className="p-2 border">ASD</td>
                <td className="p-2 border">ASD</td>
                <td className="p-2 border">ASD</td>
                <td className="p-2 border">ASD</td>
                <td className="w-64">
                  <div className="flex gap-2 justify-center">
                    <button
                      className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                      onClick={() => {
                        setIsShowModalUpdateCategory(true);
                        setCurrentDataUpdateCategory({ key: "test2" });
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

export default BarangDiBeli;
