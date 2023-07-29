import { React, useState } from "react";
import Layout from "../../../layouts/Layout";

function LayoutDaftarTahsin({ children }) {
  return (
    <>
      <Layout>
        <div className="h-20  bg-white rounded-full flex items-center justify-around shadow-lg mb-5">
          <StepNumber number={1} text="Lampiran" status={true} />
          <StepArrow />
          <StepNumber number={2} text="Biodata" status={false} />
          <StepArrow />
          <StepNumber number={3} text="Pilih Hari" status={false} />
        </div>
        <section className="p-5 bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div>
              <h1 className="text-[20px] font-bold mb-5">
                Pendaftaran Tahsin-Tahfidz Regular
              </h1>
              <p>
                Tahsin-Tahfidz reguler adalah program belajar Alquran
                berjenjang. Setiap levelnyaditempuh 20 kali pertemuan dalam 1
                semester, kenaikan level ditentukan dari hasil ujian teori dan
                praktik di akhir pembelajaran.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="mt-5 md:mt-0 bg-[#effff7] p-2 rounded-lg">
                <h1 className="text-[16px] font-semibold">
                  Jenjang Pendidikan
                </h1>
                <ul>
                  <li>BBQ</li>
                  <li>Tahsin 1</li>
                  <li>Tahsin 2</li>
                  <li>Tahsin 3</li>
                  <li>Takhossus</li>
                  <li>Tahfidz</li>
                </ul>
              </div>
              <div className="mt-5 md:mt-0 bg-[#f6e7c5] p-2 rounded-lg">
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
        {children}
      </Layout>
    </>
  );
}
const StepNumber = ({ number, text, status }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className="w-14 h-14 bg-[] rounded-full flex justify-center items-center"
        style={{ backgroundColor: status ? "#169859" : "#16985940" }}
      >
        <span className="text-2xl font-bold text-[#f3faf6]">{number}</span>
      </div>
      <div>
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  );
};
const StepArrow = () => {
  return (
    <div className="w-16 h-16  rounded-full flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  );
};

export default LayoutDaftarTahsin;
