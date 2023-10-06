import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../components/breadcrumbs";
import axios from "axios";
import Cookies from "js-cookie";
import useFormatNumber from "../../../utils/useFormatNumber";
import { Link } from "react-router-dom";
const RancanganAnggaranBiaya = () => {
  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Keuangan</BreadcrumbsItem>
        <BreadcrumbsActive>Rancangan Anggaran Biaya</BreadcrumbsActive>
      </Breadcrumbs>

      <section>
        {/* Table */}
        <div className="p-5 bg-white shadow rounded-md">
          <div className="flex justify-between items-center mb-5">
            <div className="flex gap-2">
              <span>Menampilkan</span>
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

              <Link
                to={"/rancangan-anggaran-biaya/buat-anggaran"}
                className="bg-[#169859] text-[#f3faf6] p-2 min-w-[7rem] rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                <span>Buat Rancangan</span>
              </Link>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-[#2f3a4e] text-white text-sm">
                <th className="p-2 w-10">No</th>
                <th className="p-2">Nama Kegiatan</th>
                <th className="p-2">Tahun</th>
                <th className="p-2">Opsi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* End Table */}
      </section>
    </Layout>
  );
};

export default RancanganAnggaranBiaya;
