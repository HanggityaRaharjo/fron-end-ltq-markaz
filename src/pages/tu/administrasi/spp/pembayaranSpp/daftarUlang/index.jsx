import React, { useState } from "react";
import Layout from "../../../../../../layouts/Layout";
import { Link } from "react-router-dom";

function TabelDaftarUlang() {
  const [isActiveTab, setIsActiveTab] = useState("SPP");

  return (
    <Layout>
      <section className="p-5">
        <div>
          <h1 className="font-bold text-2xl">Pembayaran Daftar Ulang</h1>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex gap-2">
            <button
              onClick={() => setIsActiveTab("SPP")}
              className={`px-4 py-2 rounded-t-md transition-all duration-200 ${
                isActiveTab === "SPP"
                  ? " bg-black text-white"
                  : " bg-gray-200 text-black "
              }  `}
            >
              SPP
            </button>
            <button
              onClick={() => setIsActiveTab("Belanja")}
              className={`px-4 py-2 rounded-t-md transition-all duration-200 ${
                isActiveTab === "Belanja"
                  ? " bg-black text-white"
                  : " bg-gray-200 text-black "
              }  `}
            >
              Belanja
            </button>
            <button
              onClick={() => setIsActiveTab("Zizwaf")}
              className={`px-4 py-2 rounded-t-md transition-all duration-200 ${
                isActiveTab === "Zizwaf"
                  ? "bg-black text-white"
                  : " bg-gray-200 text-black "
              }  `}
            >
              Zizwaf
            </button>
            <button
              onClick={() => setIsActiveTab("Kegiatan")}
              className={`px-4 py-2 rounded-t-md transition-all duration-200 ${
                isActiveTab === "Kegiatan"
                  ? " bg-black text-white"
                  : " bg-gray-200 text-black "
              }  `}
            >
              Kegiatan
            </button>
          </div>
          <div className="flex justify-end">
            <Link
              to="/form/spp-daftar-ulang"
              className="bg-black text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            >
              <span>Tambah</span>
            </Link>
          </div>
        </div>
        {/* Tabel SPP */}
        <div className="bg-white p-5">
          {isActiveTab === "SPP" ? (
            <div className="pt-10">
              <h1 className="font-bold text-2xl flex justify-center">
                Tabel SPP
              </h1>
              <div className="mt-5 w-full bg-white shadow-lg overflow-auto">
                <div className="py-5 flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="font-semibold">Data</span>
                    <select className="border">
                      <option value="">5</option>
                      <option value="">10</option>
                      <option value="">20</option>
                      <option value="">25</option>
                    </select>
                  </div>
                  <div>
                    <div>
                      <input type="text" className="border border-black px-2" />
                    </div>
                  </div>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-black text-white">
                      <td className="py-2 px-5 text-center">No</td>
                      <td className="py-2 text-center px-20">Nama</td>
                      <td className="py-2 text-center px-5">Nama Tagihan</td>
                      <td className="py-2 text-center px-5"> SPP</td>
                      <td className="py-2 text-center px-5">Jatuh Tempo</td>
                      <td className="py-2 text-center px-5"></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 text-center border">1</td>
                      <td className="py-2  border">Bagus subagja</td>
                      <td className="py-2 text-center border">Talaqqi</td>
                      <td className="py-2 text-center border">Rp. 150.000</td>
                      <td className="py-2 text-center border">12/11/2023</td>
                      <td className="py-2 px-4 text-center border">
                        <div className="flex justify-between">
                          <button className="text-blue-500">
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
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </button>
                          <button className="text-red-500">
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
                  </tbody>
                </table>
              </div>
            </div>
          ) : isActiveTab === "Belanja" ? (
            <div className="pt-10">
              <h1 className="font-bold text-2xl  flex justify-center">
                Tabel Belanja
              </h1>
              <div className="mt-5 w-full bg-white shadow-lg overflow-auto">
                <div className="py-5 flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="font-semibold">Data</span>
                    <select className="border">
                      <option value="">5</option>
                      <option value="">10</option>
                      <option value="">20</option>
                      <option value="">25</option>
                    </select>
                  </div>
                  <div>
                    <div>
                      <input type="text" className="border border-black px-2" />
                    </div>
                  </div>
                </div>
                <div className="w-full shadow-lg overflow-auto">
                  <table className="w-full ">
                    <thead>
                      <tr className="bg-black text-white">
                        <td className="py-2 px-5 text-center">No</td>
                        <td className="py-2 text-center px-10">Nama</td>
                        <td className="py-2 text-center px-5">Tagihan</td>
                        <td className="py-2 text-center px-5">Harga</td>
                        <td className="py-2 text-center px-5">Jatuh Tempo</td>
                        <td className="py-2 text-center px-5">Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 text-center border">1</td>
                        <td className="py-2  border">Kajian Keluarga Besar</td>
                        <td className="py-2 text-center border">buku</td>
                        <td className="py-2 text-center border">Rp.20.000</td>
                        <td className="py-2 text-center border">12/11/2023</td>
                        <td className="py-2 px-5 text-center border">
                          <div className="flex justify-between">
                            <button
                              onClick={() => HandleBelanja()}
                              className="text-blue-500"
                            >
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
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </button>
                            <button className="text-red-500">
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : isActiveTab === "Zizwaf" ? (
            <div className="pt-10">
              <h1 className="font-bold text-2xl  flex justify-center">
                Tabel ZISWAF
              </h1>
              <div className="mt-5 w-full bg-white shadow-lg overflow-auto">
                <div className="py-5 flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="font-semibold">Data</span>
                    <select className="border">
                      <option value="">5</option>
                      <option value="">10</option>
                      <option value="">20</option>
                      <option value="">25</option>
                    </select>
                  </div>
                  <div>
                    <div>
                      <input type="text" className="border border-black px-2" />
                    </div>
                  </div>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-black text-white">
                      <td className="py-2 px-5 text-center">No</td>
                      <td className="py-2 text-center px-20">Nama</td>
                      <td className="py-2 text-center px-5">Nama Tagihan</td>
                      <td className="py-2 text-center px-5"> SPP</td>
                      <td className="py-2 text-center px-5">Jatuh Tempo</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 text-center border">1</td>
                      <td className="py-2  border">Bagus subagja</td>
                      <td className="py-2 text-center border">Talaqqi</td>
                      <td className="py-2 text-center border">Rp. 150.000</td>
                      <td className="py-2 text-center border">12/11/2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="pt-10">
              <h1 className="font-bold text-2xl  flex justify-center">
                Tabel Kegiatan
              </h1>
              <div className="mt-5 w-full bg-white shadow-lg overflow-auto">
                <div className="py-5 flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="font-semibold">Data</span>
                    <select className="border">
                      <option value="">5</option>
                      <option value="">10</option>
                      <option value="">20</option>
                      <option value="">25</option>
                    </select>
                  </div>
                  <div>
                    <div>
                      <input type="text" className="border border-black px-2" />
                    </div>
                  </div>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-black text-white">
                      <td className="py-2 px-5 text-center">No</td>
                      <td className="py-2 text-center px-10">Nama Kegiatan</td>
                      <td className="py-2 text-center px-5">Tagihan</td>
                      <td className="py-2 text-center px-5">Jatuh Tempo</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 text-center border">1</td>
                      <td className="py-2  border">Kajian Keluarga Besar</td>
                      <td className="py-2 text-center border">Talaqqi</td>
                      <td className="py-2 text-center border">12/11/2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default TabelDaftarUlang;
