import React, { useState, useRef } from "react";
import Layout from "../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../components/breadcrumbs";
import { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx";

const LaporanTransaksi = () => {
  const [data, setData] = useState([]);

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Keuangan</BreadcrumbsItem>
        <BreadcrumbsActive>Laporan</BreadcrumbsActive>
      </Breadcrumbs>

      <section className="mb-5">
        {/* Table */}
        <div className="p-5 bg-white shadow rounded-md">
          <div className="mb-5">
            <h4 className="text-2xl">Filter Laporan</h4>
          </div>
          <div className="grid grid-cols-4 gap-5 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Dari Tanggal :</label>
              <input type="date" className="border p-2 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Sampai Tanggal :</label>
              <input type="date" className="border p-2 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Kategori :</label>
              <select name="" id="" className="border p-2 rounded-md">
                <option value="">asd</option>
                <option value="">asd</option>
              </select>
            </div>
            <div className="w-full flex items-end justify-center">
              <button className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] w-full h-12 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                <span> Tampilkan</span>
              </button>
            </div>
          </div>
        </div>
        {/* End Table */}
      </section>

      <section>
        {!data.length != 0 ? <ReportComponent data={data} /> : null}
      </section>
    </Layout>
  );
};

const ReportComponent = ({ data }) => {
  const componentRef = useRef();
  const HandleToExel = () => {
    const tableElement = document.getElementById("table-laporan");
    const ws = XLSX.utils.table_to_sheet(tableElement);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.xlsx";
    a.click();
    URL.revokeObjectURL(url);
  };
  const HandlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

  return (
    <div className="p-5 bg-white shadow rounded-md">
      <div className="mb-5">
        <h4 className="text-2xl">Filter Laporan</h4>
      </div>
      <div className="mb-5">
        <table>
          <tr>
            <td>Dari tanggal </td>
            <td>:</td>
          </tr>
          <tr>
            <td>Sampai tanggal </td>
            <td>:</td>
          </tr>
          <tr>
            <td>Kategori </td>
            <td>:</td>
          </tr>
        </table>
      </div>

      <div className="flex gap-2 mb-5">
        <button
          onClick={HandleToExel}
          className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
        >
          <span>Cetak Excel</span>
        </button>
        <button
          onClick={HandlePrint}
          className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
        >
          <span>Cetak Print</span>
        </button>
      </div>

      <div
        className="mb-5"
        ref={componentRef}
        id="table-laporan"
        style={{ padding: "20px" }}
      >
        <table className="w-full" style={{ padding: "20px" }}>
          <thead className="">
            <tr rowSpan={2} className="text-sm bg-gray-200">
              <th rowSpan={2} className="p-2 w-10">
                No
              </th>
              <th rowSpan={2} className="p-2">
                Tanggal
              </th>
              <th rowSpan={2} className="p-2">
                Kategori
              </th>
              <th rowSpan={2} className="p-2">
                Keterangan
              </th>
              <th colSpan={2} className="p-2">
                Jenis
              </th>
            </tr>
            <tr className="text-sm bg-gray-200">
              <th className="text-center">Pemasukan</th>
              <th className="text-center">Pengeluaran</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="">
              <td className="w-10 p-2 border-l flex justify-center">1</td>
              <td className="p-2 border">ASD</td>
              <td className="p-2 border">ASD</td>
              <td className="p-2 border">ASD</td>
              <td className="p-2 border text-center">Rp.2.500.000,-</td>
              <td className="p-2 border text-center">-</td>
            </tr>
            <tr className="">
              <td className="w-10 p-2 border-l flex justify-center">1</td>
              <td className="p-2 border">ASD</td>
              <td className="p-2 border">ASD</td>
              <td className="p-2 border">ASD</td>
              <td className="p-2 border text-center">Rp.2.500.000,-</td>
              <td className="p-2 border text-center">-</td>
            </tr>
          </tbody>
          <tfoot className="text-sm">
            <tr className="bg-[#169859] text-[#f3faf6]">
              <th className="border p-2" colSpan={4}>
                <p className="text-right">TOTAL</p>
              </th>
              <th className="border p-2">Rp.5.000.000,-</th>
              <th className="border p-2">Rp.0,-</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default LaporanTransaksi;
