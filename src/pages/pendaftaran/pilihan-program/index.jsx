import React, { useState } from "react";
import Layout from "../../../layouts/Layout";
import { Link } from "react-router-dom";

const PilihanProgram = () => {
  return (
    <Layout>
      <section className="min-h-screen">
        <div className="h-20  bg-white rounded-full flex items-center justify-around shadow-lg mb-5">
          <StepNumber number={1} text="Biodata Siswa" status={false} />
          <StepArrow />
          <StepNumber number={2} text="Pilihan Program" status={true} />
          <StepArrow />
          <StepNumber number={3} text="Biaya Pendidikan" status={false} />
          <StepArrow />
          <StepNumber number={4} text="Placement Test" status={false} />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <CardProgram />
          <CardProgram />
          <CardProgram />
          <CardProgram />
        </div>

        <div className="flex justify-end gap-5 mt-5">
          <Link
            to={"/peserta-baru/biodata-siswa"}
            type="submit"
            className="border border-[#169859] text-[#169859] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            Sebelumnya
          </Link>
          <Link
            to={"/peserta-baru/biaya-pendidikan"}
            className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            Selanjutnya
          </Link>
        </div>
      </section>
    </Layout>
  );
};

const CardProgram = () => {
  const [userCheck, setUserCheck] = useState(false);
  return (
    <div
      onClick={() => setUserCheck(!userCheck)}
      className="bg-white rounded-lg border  p-5 cursor-pointer relative shadow-lg"
      style={{ border: userCheck ? "2px solid #169859" : "2px solid white" }}
    >
      {userCheck ? (
        <div className="absolute top-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-[#169859]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      ) : null}
      <div className="flex gap-5">
        <div>
          <p className="text-2xl font-semibold">Tahsin Reguler</p>
          <p className="w-[400px]">
            Talaqqi adalah program privat intesif secara online dan offline,
            dilaksanakan sepekan sekai dalam 12 kali pertemuan dengan metode
            talaqqi. Pembelajaran disesuaikan dengan target dan kemampuan
            masing-masing peserta.
          </p>
        </div>
        <div className=" bg-[#effff7] p-2 rounded-lg">
          <h1 className="text-[16px] font-semibold">Kuliah Perdana</h1>
          <ul>
            <li>Sabtu, 13 Mei 2023</li>
            <li>Pkl. 07.30-10.00 WIB</li>
            <li>Narasumber Kuliah Perdana:</li>
            <li>KH. Abdul Aziz Abdur Ra'uf, Lc., Alhafizh</li>
          </ul>
        </div>
        <div className=" bg-[#f6e7c5] p-2 rounded-lg">
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
  );
};

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

export default PilihanProgram;
