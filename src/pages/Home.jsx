import React from "react";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import ChartComponent from "../components/ChartComponent";
import { Breadcrumbs, BreadcrumbsActive } from "../components/breadcrumbs";

const Home = () => {
  return (
    <Layout>
      <Breadcrumbs>
        <div className="breadcrumbs-item text-gray-800 font-semibold">
          Dashboard
        </div>
      </Breadcrumbs>
      <section className="min-h-screen ">
        {/* jumbotron */}
        <div className="h-36 rounded-md relative overflow-hidden shadow-md flex items-center mb-5">
          <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-[#169859] to-[#007dc4] absolute -right-32 shadow-[#1698597a] -top-32 shadow-lg"></div>
          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-[#169859] to-[#007dc4] absolute -left-32 shadow-[#1698597a] -bottom-32 shadow-lg"></div>
          <div className="w-20 h-20 rounded-full border-8 absolute left-32 shadow-[#1698597a] top-10 shadow-lg"></div>
          <div className="bg-[#1698592a] bg-opacity-40 backdrop-blur-sm w-full h-full relative flex items-center justify-around ">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-3xl font-bold ">
                Kamu belum terdaftar sebagai peserta
              </h1>
              <Link
                to={"/peserta-baru"}
                className="bg-[#169859] text-[#f3faf6] p-2  rounded-md font-semibold hover:bg-opacity-70 transition duration-150 animate-pulse active:scale-95"
              >
                Daftar Peserta disini
              </Link>
            </div>
            <div>
              <img
                src="/animate/filing-system-animate.svg"
                className="w-full h-32"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* content */}

        {/* Grafik */}
        <div className="flex rounded-md  gap-5 mb-5">
          <div className="w-8/12 bg-[#2f3a4e] rounded-md shadow-md flex justify-center p-2">
            <ChartComponent />
          </div>
          <div className="w-4/12 flex flex-col justify-between">
            {/*  */}
            <div className="bg-white border-r-4 border-[#169859] p-5 h-fit rounded-md rounded-r-none shadow-md">
              <h1 className="text-center text-2xl font-semibold mb-5 border-b-2">
                Nilai Semester
              </h1>

              <div className="text-sm text-gray-500">
                <div className="font-semibold flex">
                  <p className="w-40">Nilai Kumulatif</p>
                  <p>: 3.56</p>
                </div>
                <div className="font-semibold flex">
                  <p className="w-40">Nilai Semester Ini</p>
                  <p>: 3.56</p>
                </div>
                <div className="font-semibold flex">
                  <p className="w-40">Jumlah Program</p>
                  <p>: 4</p>
                </div>
                <div className="font-semibold flex">
                  <p className="w-40">Mengulang Program</p>
                  <p>: Tidak ada</p>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="h-44 bg-[#169859] rounded-md shadow-md">asd</div>
            {/*  */}
          </div>
        </div>
        {/* End Grafik */}

        <div className="grid grid-cols-4 gap-5 mb-5">
          <div className="h-32 bg-[#f3fffd] rounded-md shadow-lg flex justify-center items-center relative">
            <span className="text-2xl font-bold">4</span>
            <div className="absolute -top-2 left-0 bg-[#f45b5d] rounded-md text-white px-2 py-1">
              Jumlah Program
            </div>
          </div>

          <div className="h-32 bg-[#fcf6f3] rounded-md shadow-lg flex justify-center items-center relative">
            <span className="text-2xl font-bold">4</span>
            <div className="absolute -top-2 left-0 bg-[#f37a21] rounded-md text-white px-2 py-1">
              Jumlah Program
            </div>
          </div>

          <div className="h-32 bg-[#f0f6f5] rounded-md shadow-lg flex justify-center items-center relative">
            <span className="text-2xl font-bold">4</span>
            <div className="absolute -top-2 left-0 bg-[#4d42e0] rounded-md text-white px-2 py-1">
              Jumlah Program
            </div>
          </div>

          <div className="h-32 bg-[#fff8ee] rounded-md shadow-lg flex justify-center items-center relative">
            <span className="text-2xl font-bold">4</span>
            <div className="absolute -top-2 left-0 bg-[#169859] rounded-md text-white px-2 py-1">
              Jumlah Program
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
