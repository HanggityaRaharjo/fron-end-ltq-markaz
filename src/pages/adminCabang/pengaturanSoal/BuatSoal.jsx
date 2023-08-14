import React from "react";
import Layout from "../../../layouts/Layout";
import { useState } from "react";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../components/breadcrumbs";

function BuatSoal() {
  const [tipeSoal, setTipeSoal] = useState("pg");

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Pengaturan</BreadcrumbsItem>
        <BreadcrumbsItem>Soal</BreadcrumbsItem>
        <BreadcrumbsActive>Buat Soal</BreadcrumbsActive>
      </Breadcrumbs>
      <section>
        <div className="flex">
          <button
            className={
              tipeSoal === "pg"
                ? "p-2 rounded-t-lg bg-[#2f3a4e] text-[#f3faf6] active:scale-95 transition duration-300"
                : "bg-gray-100 p-2 rounded-t-lg"
            }
            onClick={() => setTipeSoal("pg")}
          >
            Soal Pilihan Ganda
          </button>
          <button
            className={
              tipeSoal === "essay"
                ? "p-2 rounded-t-lg bg-[#2f3a4e] text-[#f3faf6] active:scale-95 transition duration-300"
                : "bg-gray-100 p-2 rounded-t-lg"
            }
            onClick={() => setTipeSoal("essay")}
          >
            Soal Essay
          </button>
        </div>
        {tipeSoal === "pg" ? <SoalPilihanGanda /> : <SoalEssay />}
      </section>
    </Layout>
  );
}

const SoalPilihanGanda = () => {
  const [stateSoal, setStateSoal] = useState([]);
  const [totalSoal, setTotalSoal] = useState(1);
  const HandleAddSoal = () => {
    setTotalSoal(totalSoal + 1);
    setStateSoal([
      ...stateSoal,
      <BoxInputSoal number={totalSoal} stateSoal={stateSoal} />,
    ]);
  };
  return (
    <div className=" ">
      {/* Form */}
      <form action="" method="post">
        {/* Nama SOAL */}
        <div>
          <div className=" grid grid-cols-3 gap-5 mb-5 bg-white shadow-md rounded-md rounded-tl-none font-poppins p-5">
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Tipe Soal
              </label>
              <input
                name="tipe_soal"
                type="number"
                className=" w-full border border-[#169859]  px-5 h-10 rounded-md rounded-tl-none"
                placeholder="Type here.."
              />
            </div>
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Code Soal
              </label>
              <input
                name="code_soal"
                type="number"
                className=" w-full border border-[#169859]  px-5 h-10 rounded-md rounded-tl-none"
                placeholder="Type here.."
              />
            </div>
          </div>
        </div>
        {/* End Nama SOAL */}
        <div></div>
        {/* Buat Soal */}
        <div className="bg-white shadow-md rounded-md font-poppins p-5">
          {stateSoal.map((boxInput, index) => (
            <div key={index}>{boxInput}</div>
          ))}
          <button
            type="button"
            className="border mb-5 border-[#169859] bg-transparent text-[#169859] p-2 w-full rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            onClick={() => HandleAddSoal()}
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <span>Tambah Soal</span>
          </button>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            >
              <span>Simpan</span>
            </button>
          </div>
        </div>
        {/* End Buat Soal */}
      </form>
      {/* End Form */}
    </div>
  );
};
const SoalEssay = () => {
  const [stateSoal, setStateSoal] = useState([]);
  const [totalSoal, setTotalSoal] = useState(1);
  const HandleAddSoal = () => {
    setTotalSoal(totalSoal + 1);
    setStateSoal([
      ...stateSoal,
      <BoxInputSoal number={totalSoal} stateSoal={stateSoal} />,
    ]);
  };
  return (
    <div className=" ">
      {/* Form */}
      <form action="" method="post">
        {/* Nama SOAL */}
        <div>
          <div className=" grid grid-cols-3 gap-5 mb-5 bg-white shadow-md rounded-md font-poppins p-5 rounded-tl-none">
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Tipe Soal
              </label>
              <input
                name="tipe_soal"
                type="number"
                className=" w-full border border-[#169859]  px-5 h-10 rounded-md rounded-tl-none"
                placeholder="Type here.."
              />
            </div>
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Code Soal
              </label>
              <input
                name="code_soal"
                type="number"
                className=" w-full border border-[#169859]  px-5 h-10 rounded-md rounded-tl-none"
                placeholder="Type here.."
              />
            </div>
          </div>
        </div>
        {/* End Nama SOAL */}
        <div></div>
        {/* Buat Soal */}
        <div className="bg-white shadow-md rounded-md font-poppins p-5">
          {stateSoal.map((boxInput, index) => (
            <div key={index}>{boxInput}</div>
          ))}
          <button
            type="button"
            className="border mb-5 border-[#169859] bg-transparent text-[#169859] p-2 w-full rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            onClick={() => HandleAddSoal()}
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <span>Tambah Soal</span>
          </button>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            >
              <span>Simpan</span>
            </button>
          </div>
        </div>
        {/* End Buat Soal */}
      </form>
      {/* End Form */}
    </div>
  );
};

const BoxInputSoal = ({ number }) => {
  const HandleDeleteSoal = (number) => {
    document.getElementById(`soal-${number}`).remove();
  };

  return (
    <div className=" relative mb-5" id={`soal-${number}`}>
      <p className="font-semibold absolute">{number}.</p>
      <button
        type="button"
        className="absolute right-0 bg-[#169859] text-[#f3faf6] p-2 w-10 h-10 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
        onClick={() => HandleDeleteSoal(number)}
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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
      <div className="ml-5 pr-10">
        <div className="px-2">
          {/* Soal */}
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Soal"
            className="w-full border border-[#169859]  p-5 h-32 rounded-md"
          ></textarea>
          {/* End Soal */}
          {/* Option */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor="" className="font-semibold">
                A.
              </label>
              <input
                type="text"
                placeholder="Opsi A"
                className="w-full border border-[#169859]  px-5 h-10 rounded-md"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="" className="font-semibold">
                B.
              </label>
              <input
                type="text"
                placeholder="Opsi B"
                className="w-full border border-[#169859]  px-5 h-10 rounded-md"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="" className="font-semibold">
                C.
              </label>
              <input
                type="text"
                placeholder="Opsi C"
                className="w-full border border-[#169859]  px-5 h-10 rounded-md"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="" className="font-semibold">
                D.
              </label>
              <input
                type="text"
                placeholder="Opsi D"
                className="w-full border border-[#169859]  px-5 h-10 rounded-md"
              />
            </div>
          </div>
          {/* End Option */}
        </div>
      </div>
    </div>
  );
};

export default BuatSoal;
