import React from "react";
import Layout from "../../layouts/Layout";

function DaftarTahsinTahfidz() {
  return (
    <Layout>
      <section className="p-5 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
          <div>
            <h1 className="text-[20px] font-bold mb-5">
              Pendaftaran Tahsin-Tahfidz Regular
            </h1>
            <p>
              Tahsin-Tahfidz reguler adalah program belajar Alquran berjenjang.
              Setiap levelnyaditempuh 20 kali pertemuan dalam 1 semester,
              kenaikan level ditentukan dari hasil ujian teori dan praktik di
              akhir pembelajaran.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            <div className="mt-5 md:mt-0 bg-[#effff7] p-2 rounded-lg">
              <h1 className="text-[16px] font-semibold">Jenjang Pendidikan</h1>
              <ul>
                <li>BBQ</li>
                <li>Tahsin 1</li>
                <li>Tahsin 2</li>
                <li>Tahsin 3</li>
                <li>Takhossus</li>
                <li>Tahfidz</li>
              </ul>
            </div>
            <div className="mt-5 md:mt-0 bg-[#effff7] p-2 rounded-lg">
              <h1 className="text-[16px] font-semibold">
                Investasi Pendidikan/Semester
              </h1>
              <table>
                <tr>
                  <td>Pendaftaran</td>
                  <td>:</td>
                  <td>100.000</td>
                </tr>
                <tr>
                  <td>Pembangunan</td>
                  <td>:</td>
                  <td>200.000</td>
                </tr>
                <tr>
                  <td>Kegiatan</td>
                  <td>:</td>
                  <td>150.000</td>
                </tr>
                <tr>
                  <td>SPP</td>
                  <td>:</td>
                  <td>450.000</td>
                </tr>
                <tr>
                  <td>Buku</td>
                  <td>:</td>
                  <td>Gratis</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 mt-10 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-md">
        <div className="">
          <div className="mt-5">
            <div className="relative w-4/12">
              <h1>
                Lampirkan Bukti Transfer Pendaftaran
                <span className=" text-red-500 ml-2">*</span>
              </h1>
            </div>
            <div className="col-span-2  flex justify-center  items-center bg-[#169859] bg-opacity-60 rounded-lg cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="border h-full w-full relative -z-10 hidden"
              />
              <div className="flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-20 h-20 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <p className="text-xl font-semibold text-white">Upload File</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DaftarTahsinTahfidz;
