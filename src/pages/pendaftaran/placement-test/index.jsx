import React from "react";
import Layout from "../../../layouts/Layout";
import { Link } from "react-router-dom";

const PlacementTest = () => {
  return (
    <Layout>
      <section className="min-h-screen">
        <div className="h-20  bg-white rounded-full flex items-center justify-around shadow-lg mb-5">
          <StepNumber number={1} text="Biodata Siswa" status={false} />
          <StepArrow />
          <StepNumber number={2} text="Pilihan Program" status={false} />
          <StepArrow />
          <StepNumber number={3} text="Biaya Pendidikan" status={false} />
          <StepArrow />
          <StepNumber number={4} text="Placement Test" status={true} />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="h-56 bg-white rounded-lg shadow-lg p-5 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold">Upload Rekaman Suara</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nesciunt, cum? Ea provident, aliquid quis nisi iste assumenda
              laboriosam voluptatem error?
            </p>
          </div>
          <Link
            to={"/placement-test/pilihan-ganda"}
            className="h-56 bg-white rounded-lg shadow-lg p-5 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold">Soal Ujian</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nesciunt, cum? Ea provident, aliquid quis nisi iste assumenda
              laboriosam voluptatem error?
            </p>
          </Link>
        </div>
      </section>
    </Layout>
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

export default PlacementTest;
