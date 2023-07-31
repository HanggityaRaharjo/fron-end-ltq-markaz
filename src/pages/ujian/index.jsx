import React from "react";
import Layout from "../../../layouts/Layout";
import { Link } from "react-router-dom";

const Ujian = () => {
  return (
    <Layout>
      <section className="min-h-screen">
        <div className="grid grid-cols-2 gap-5">
          <div className="h-56 bg-white rounded-lg shadow-lg p-5 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold">Upload Rekaman Suara</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nesciunt, cum? Ea provident, aliquid quis nisi iste assumenda
              laboriosam voluptatem error?
            </p>
          </div>
          <div className="h-56 bg-white rounded-lg shadow-lg p-5 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold">Soal Ujian</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nesciunt, cum? Ea provident, aliquid quis nisi iste assumenda
              laboriosam voluptatem error?
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ujian;
