import React, { useState } from "react";
import Layout from "../../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../../components/breadcrumbs";

const KasirPembayaran = () => {
  const [currentTab, setCurrentTab] = useState("kasir");

  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Tata Usaha</BreadcrumbsItem>
        <BreadcrumbsItem>Kasir</BreadcrumbsItem>
        <BreadcrumbsActive>Pembayaran</BreadcrumbsActive>
      </Breadcrumbs>
      <div className="flex gap-5 mb-5">
        <button
          onClick={() => setCurrentTab("kasir")}
          className={`${
            currentTab === "kasir" ? "bg-black" : "bg-gray-500"
          } text-white px-5 py-2 rounded-md`}
        >
          Kasir
        </button>
        <button
          onClick={() => setCurrentTab("list-pembayaran")}
          className={`${
            currentTab === "list-pembayaran" ? "bg-black" : "bg-gray-500"
          } text-white px-5 py-2 rounded-md`}
        >
          List Pembayaran
        </button>
      </div>

      {currentTab === "kasir" ? <KasirSection /> : null}
      {currentTab === "list-pembayaran" ? <ListPembayaran /> : null}
    </Layout>
  );
};

const KasirSection = () => {
  return (
    <section className="bg-white min-h-[300px] text-sm rounded-md shadow-md p-5">
      <div className="flex gap-5 mb-5">
        <div className="w-4/12">
          <table className="w-full">
            <tr>
              <td className=" text-right w-32">No Transaksi :</td>
              <td className="">
                <input
                  type="text"
                  className="p-2 w-full border rounded-md border-black"
                />
              </td>
            </tr>
            <tr>
              <td className=" text-right w-32">Tanggal :</td>
              <td className="">
                <input
                  type="date"
                  className="p-2 w-full border rounded-md border-black"
                />
              </td>
            </tr>
            <tr>
              <td className=" text-right w-32">Pelanggan :</td>
              <td className="">
                <input
                  type="text"
                  className="p-2 w-full border rounded-md border-black"
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="w-8/12">
          <div className="border w-full h-full bg-white shadow-md rounded-md flex justify-end items-end p-2 relative">
            <p className="absolute text-lg top-2 left-2 font-semibold">Total</p>
            <p className="text-5xl font-bold">115.000,00</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-20">
        <table className="w-full">
          <tr>
            <td className="w-20 p-2">Jumlah :</td>
            <td className="w-20 p-2">
              <input
                type="text"
                className="border border-black p-2 rounded-md"
              />
            </td>
            <td className="w-24 p-2">Kode Item :</td>
            <td className=" p-2">
              <input
                type="text"
                className="border border-black p-2 rounded-md w-full"
              />
            </td>
          </tr>
        </table>
      </div>

      <div className="w-full h-56 overflow-scroll mb-5">
        <table className="w-full">
          <thead className="sticky top-0">
            <tr>
              <th className="w-10 p-2 bg-black text-white">No</th>
              <th className="p-2 bg-black text-white">Kode Item</th>
              <th className="p-2 bg-black text-white">Keterangan</th>
              <th className="p-2 bg-black text-white">Jumlah</th>
              <th className="p-2 bg-black text-white">Satuan</th>
              <th className="p-2 bg-black text-white">Harga</th>
              <th className="p-2 bg-black text-white">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-black">
              <td className="w-10 border-l border-black text-center">1</td>
              <td className="w-32 border-x border-black text-center ">CA202</td>
              <td className="w-96 border-r border-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                nobis.
              </td>
              <td className="text-center border-r border-black w-20">2,00</td>
              <td className="w-16 border-r border-black text-center">PCS</td>
              <td className="text-center border-r border-black">20.000</td>
              <td className="text-center border-r border-black">40.000</td>
            </tr>
            <tr className="border-b border-black">
              <td className="w-10 border-l border-black text-center">1</td>
              <td className="w-32 border-x border-black text-center ">CA202</td>
              <td className="w-96 border-r border-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                nobis.
              </td>
              <td className="text-center border-r border-black w-20">2,00</td>
              <td className="w-16 border-r border-black text-center">PCS</td>
              <td className="text-center border-r border-black">20.000</td>
              <td className="text-center border-r border-black">40.000</td>
            </tr>
            <tr className="border-b border-black">
              <td className="w-10 border-l border-black text-center">1</td>
              <td className="w-32 border-x border-black text-center ">CA202</td>
              <td className="w-96 border-r border-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                nobis.
              </td>
              <td className="text-center border-r border-black w-20">2,00</td>
              <td className="w-16 border-r border-black text-center">PCS</td>
              <td className="text-center border-r border-black">20.000</td>
              <td className="text-center border-r border-black">40.000</td>
            </tr>
            <tr className="border-b border-black">
              <td className="w-10 border-l border-black text-center">1</td>
              <td className="w-32 border-x border-black text-center ">CA202</td>
              <td className="w-96 border-r border-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                nobis.
              </td>
              <td className="text-center border-r border-black w-20">2,00</td>
              <td className="w-16 border-r border-black text-center">PCS</td>
              <td className="text-center border-r border-black">20.000</td>
              <td className="text-center border-r border-black">40.000</td>
            </tr>
            <tr className="border-b border-black">
              <td className="w-10 border-l border-black text-center">1</td>
              <td className="w-32 border-x border-black text-center ">CA202</td>
              <td className="w-96 border-r border-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                nobis.
              </td>
              <td className="text-center border-r border-black w-20">2,00</td>
              <td className="w-16 border-r border-black text-center">PCS</td>
              <td className="text-center border-r border-black">20.000</td>
              <td className="text-center border-r border-black">40.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex gap-5">
        <button className="p-2 bg-black text-white rounded-md px-5 py-2">
          Print Out
        </button>
        <button className="p-2 bg-black text-white rounded-md px-5 py-2">
          Simpan
        </button>
      </div>
    </section>
  );
};

const ListPembayaran = () => {
  return (
    <section>
      <p>List Pembayaran</p>
    </section>
  );
};

export default KasirPembayaran;
