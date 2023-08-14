import React from "react";
import Layout from "../../layouts/Layout";
import profil from "../../assets/founder/founder.jpg";

function Profil() {
  return (
    <Layout>
      <section className="bg-white p-5 shadow-md">
        <div className="flex justify-center mt-10">
          <div className="h-[200px] w-[200px] bg-slate-100 rounded-full relative overflow-hidden">
            <img
              src={profil}
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5">
          <div className="">
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Nama
              </label>
              <p className=" w-full border border-[#169859] h-10 p-2  rounded-md rounded-tl-none">
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </div>

            <div className="flex flex-col mt-2">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Email
              </label>
              <p className=" w-full border border-[#169859] h-10 p-2  rounded-md rounded-tl-none">
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </div>

            <div className="flex flex-col mt-2">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Usia
              </label>
              <p className=" w-full border border-[#169859] h-10 p-2  rounded-md rounded-tl-none">
                32
              </p>
            </div>

            <div className="flex flex-col mt-2">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Jenis Kelamin
              </label>
              <p className=" w-full border border-[#169859] h-10 p-2  rounded-md rounded-tl-none">
                Lorem ipsum dolor, sit amet consectetur
              </p>
            </div>

            <div className="flex flex-col mt-2">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Alamat
              </label>
              <p className=" w-full border border-[#169859] h-Auto p-2  rounded-md rounded-tl-none">
                Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Atque, excepturi!
              </p>
            </div>

            <div className="flex justify-end gap-5 mt-10 pr-5">
              <button className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                Edit
              </button>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                Username
              </label>
              <p className=" w-full border border-[#169859] h-Auto p-2  rounded-md rounded-tl-none">
                Lorem ipsum dolor
              </p>
            </div>

            <div className="flex flex-col mt-2">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-auto">
                Ganti Password
              </label>
              <input
                type="text"
                className=" w-full border border-[#169859]  px-5 h-10 rounded-md rounded-tl-none"
                placeholder="Type here.."
              />
            </div>

            <div className="flex justify-end gap-5 mt-5 pr-5">
              <button className="bg-[#169859] text-[#f3faf6] p-2 w-32 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                save
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const ShowTable = ({ label, title }) => {
  return (
    <>
      <div className=" mt-2">
        <div className="flex justify-between items-center">
          <div className="w-32 flex">{label}</div>
          <div className="flex">:</div>
          <div className="w-10/12 flex items-center bg-gray-100 rounded-md p-2">
            {title}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
