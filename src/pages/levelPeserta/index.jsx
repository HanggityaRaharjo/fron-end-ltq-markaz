import React from "react";
import Layout from "../../layouts/Layout";
import gambar from "../../assets/founder/founder.jpg";

function LevelPeserta() {
  return (
    <Layout>
      <section className="min-h-screen bg-white p-5 font-poppins">
        <div className="grid grid-cols-2 gap-2 mt-10">
          <div className=" shadow">
            <div className="flex justify-center">
              <div className="w-[200px] h-[200px] bg-slate-300 rounded-full overflow-hidden">
                <img
                  src={gambar}
                  alt=""
                  className="h-full w-full  object-cover "
                />
              </div>
            </div>
            <div className="mt-20">
              <div className="p-1 mb-5">
                <h1 className="text-[20px]">Informasi Level</h1>
              </div>
              <BarChart />
            </div>
          </div>
          <div className="shadow">
            <div>
              <table>
                <tr>
                  <td className="p-2">Nama</td>
                  <td className="p-2">:</td>
                  <td className="p-2">Lorem ipsum dolor sit</td>
                </tr>
                <tr>
                  <td className="p-2">userName</td>
                  <td className="p-2">:</td>
                  <td className="p-2">Lorem ipsum dolor sit</td>
                </tr>
                <tr>
                  <td className="p-2">Email</td>
                  <td className="p-2">:</td>
                  <td className="p-2">Lorem@gmil.com</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const BarChart = () => {
  const data = [
    { label: "Level", value: 50 },
    { label: "Nilai Ujian", value: 70 },
    { label: "Nilai Praktik", value: 90 },
  ];

  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="bg-white p-4 rounded shadow">
      {data.map((item, index) => (
        <div key={index} className="mb-2">
          <div className="flex items-center">
            <div className="w-1/4">{item.label}</div>
            <div className="w-3/4">
              <div
                className="h-4 bg-blue-500 rounded-full"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LevelPeserta;
