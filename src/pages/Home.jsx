import React from "react";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import logo from "../../public/ltq-logo.png";

const Home = () => {
  return (
    <Layout>
      <section className="min-h-screen ">
        {/* jumbotron */}
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
        {/* content */}
        {/* information */}
        <div className="mt-10 grid grid-cols-2">
          <div className="">
            <h2 className="text-xl font-bold mb-5">Yayasan Markaz Alquran</h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              temporibus commodi possimus velit? Vero ipsam eveniet ipsa alias
              nulla quia, aliquam neque, modi eligendi doloribus aliquid?
              Provident reiciendis iure labore amet facilis, eveniet officia
              magnam quaerat porro quasi ipsa id doloremque molestiae
              voluptatibus unde. Quidem aut error accusantium cumque ullam?
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <h2 className="text-xl font-bold mb-5">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquid ut temporibus tempora velit libero harum, ipsum
                  corporis ullam officia! A nulla accusamus qui vero?
                  Consequuntur iure omnis, cumque nihil porro maiores tempore
                  debitis, incidunt nam, tenetur facilis mollitia sequi quaerat?
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-5">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquid ut temporibus tempora velit libero harum, ipsum
                  corporis ullam officia! A nulla accusamus qui vero?
                  Consequuntur iure omnis, cumque nihil porro maiores tempore
                  debitis, incidunt nam, tenetur facilis mollitia sequi quaerat?
                </p>
              </div>
            </div>
          </div>
          <div className="flex  justify-center items-center">
            <img src={logo} alt="" className="w-[400px]" />
          </div>
        </div>
        {/* berrita */}
        <div className="mt-20 flex justify-center">
          <div>
            <h1 className="text-[32px] text-center">Berita Terkini</h1>
            <div className="flex items-center gap-2">
              <div className="w-20 bg-gray-300 h-[2px]" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <div className="w-20 bg-gray-300 h-[2px]" />
            </div>
          </div>
        </div>

        {/* card berita */}
        <div className="mt-10">
          <div className="grid grid-cols-3 gap-5">
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className=" h-40 bg-gray-200 relative flex items-end">
              <h2 className="bottom-0">Lorem ipsum dolor sit amet.</h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
