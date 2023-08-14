import { useState, useEffect } from "react";
import Layout from "../../../layouts/Layout";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../components/breadcrumbs";

function UserRole() {
  const [tableData, setTableData] = useState([]);
  const dummyData = [
    {
      id: 1231341,
      name: "sindi",
    },
    {
      id: 1242442,
      name: "muhamad ahmad rinaldi",
    },
    {
      id: 1533414,
      name: "sofyan",
    },
    {
      id: 1535444,
      name: "aji kusuma",
    },
    {
      id: 1638973,
      name: "dadang",
    },
  ];
  useEffect(() => {
    setTableData(dummyData);
  }, []);

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Otorisasi</BreadcrumbsItem>
        <BreadcrumbsActive>Pengguna</BreadcrumbsActive>
      </Breadcrumbs>
      <section>
        {/* Table */}
        <div className="p-5 bg-white rounded-md shadow-md">
          <div className="flex justify-between items-center mb-5">
            <div className="flex gap-2">
              <span>Menampilan</span>
              <select name="" id="" className="border">
                <option value="10">10</option>
                <option value="10">25</option>
                <option value="10">50</option>
                <option value="10">100</option>
              </select>
              <span>data</span>
            </div>
            <div className="flex gap-5">
              <input
                type="text"
                className=" border border-gray-300 p-1 rounded-md"
                placeholder="search..."
              />
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className=" p-2 w-10">
                  <p className="translate-y-8">No</p>
                </th>
                <th className=" p-2 w-72">
                  <p className="translate-y-8">Nama Pengguna</p>
                </th>
                <th className="border p-2" colSpan={5}>
                  Peran
                </th>
              </tr>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className=" p-2 w-10" colSpan={2}></th>

                <th className="border p-2 bg-[#169859]">Admin Cabang</th>
                <th className="border p-2 bg-[#169859]">Peserta</th>
                <th className="border p-2 bg-[#169859]">Guru</th>
                <th className="border p-2 bg-[#169859]">Tata Usaha</th>
                <th className="border p-2 bg-[#169859]">Bendahara</th>
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData.map((item, index) => (
                  <TableData key={index} nama={item.name} nomor={index + 1} />
                ))}
            </tbody>
          </table>
        </div>
        {/* End Table */}
      </section>
    </Layout>
  );
}

const TableData = ({ nama, nomor }) => {
  return (
    <tr className="text-sm text-gray-500 hover:bg-[#1698591e]">
      <td className="border-b border-x p-2  text-center">{nomor}</td>
      <td className="border-b border-x p-2 font-semibold">{nama}</td>
      <td className="border-b border-x p-2 w-16">
        <div className="flex justify-center items-center">
          <input
            type="checkbox"
            name=""
            className="accent-[#169859] cursor-pointer"
          />
        </div>
      </td>
      <td className="border-b border-x p-2 w-16">
        <div className="flex justify-center items-center">
          <input
            type="checkbox"
            name=""
            className="accent-[#169859] cursor-pointer"
          />
        </div>
      </td>
      <td className="border-b border-x p-2 w-16">
        <div className="flex justify-center items-center">
          <input
            type="checkbox"
            name=""
            className="accent-[#169859] cursor-pointer"
          />
        </div>
      </td>
      <td className="border-b border-x p-2 w-16">
        <div className="flex justify-center items-center">
          <input
            type="checkbox"
            name=""
            className="accent-[#169859] cursor-pointer"
          />
        </div>
      </td>
      <td className="border-b border-x p-2 w-16">
        <div className="flex justify-center items-center">
          <input
            type="checkbox"
            name=""
            className="accent-[#169859] cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default UserRole;
