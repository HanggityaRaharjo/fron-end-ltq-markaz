import React from "react";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <section className="min-h-screen ">
        <div className="h-56 rounded-2xl relative overflow-hidden shadow-lg flex items-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-[#169859] to-[#007dc4] absolute -right-32 shadow-[#1698597a] -top-32 shadow-lg"></div>
          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-[#169859] to-[#007dc4] absolute -left-32 shadow-[#1698597a] -bottom-32 shadow-lg"></div>

          <div className="w-20 h-20 rounded-full border-8 absolute left-32 shadow-[#1698597a] top-10 shadow-lg"></div>

          <div className="bg-[#1698592a] bg-opacity-40 backdrop-blur-sm w-full h-full relative flex items-center justify-around ">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-3xl font-bold ">
                Kamu belum terdaftar sebagai peserta
              </h1>
              <Link
                to={"/peserta-baru/biodata-siswa"}
                className="bg-[#169859] text-[#f3faf6] p-2  rounded-full font-semibold hover:bg-opacity-70 transition duration-150 animate-pulse active:scale-95"
              >
                Daftar Peserta disini
              </Link>
            </div>
            <div>
              <img
                src="/animate/filing-system-animate.svg"
                className="w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
