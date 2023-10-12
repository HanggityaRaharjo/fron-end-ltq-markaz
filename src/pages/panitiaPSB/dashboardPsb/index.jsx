import React from "react";
import Layout from "../../../layouts/Layout";
import PieChart from "../../../components/ChartPie";
import ChartComponent from "../../../components/ChartComponent";

function DashboardPsb() {
  return (
    <Layout>
      <div className="p-5">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-white flex justify-center p-5 border rounded-md shadow-md hover:shadow-green-200 transition-all duration-200">
              <div className="flex flex-col gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <h1 className="font-bold text-xl">423</h1>
                </div>
                <label>jumlah Siswa</label>
              </div>
            </div>
            <div className="bg-white p-5 flex justify-center border rounded-md shadow-md hover:shadow-green-200 transition-all duration-200">
              <div className="flex flex-col gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <h1 className="font-bold text-xl">423</h1>
                </div>
                <label>jumlah Pendaftar</label>
              </div>
            </div>
            <div className="bg-white p-5 flex justify-center border rounded-md shadow-md hover:shadow-green-200 transition-all duration-200">
              <div className="flex flex-col gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <h1 className="font-bold text-xl">423</h1>
                </div>
                <label>Peserta Aktif</label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 bg-white shadow-md p-5">
            <div className="flex justify-center items-center">
              <div>
                <h1 className="font-bold text-xl">Data</h1>
                <div className="w-[500px] h-[300px]">
                  <ChartComponent />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <h1 className="font-bold text-xl">Data</h1>
                <div className="h-[300px] w-[300px]">
                  <PieChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPsb;
