import React from "react";
import Layout from "../../../../layouts/Layout";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsActive,
} from "../../../../components/breadcrumbs";
function TambahUser() {
  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Pengaturan</BreadcrumbsItem>
        <BreadcrumbsItem>Pengguna</BreadcrumbsItem>
        <BreadcrumbsActive>Buat</BreadcrumbsActive>
      </Breadcrumbs>
      <section className="p-5 mt-10  bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-md">
        <div className="px-5">
          <div className="grid grid-cols-2 gap-5">
            <FormInput type={"text"} label={"Nama Lengkap"} />
            <FormInput type={"date"} label={"Tanggal Lahir"} />
            <FormInput type={"area"} label={"Alamat"} />
            <FormInput type={"text"} label={"No ID"} />
            <FormInput type={"text"} label={"No Wa"} />
          </div>
        </div>
        <div className="flex justify-end gap-5 mt-10 pr-5">
          <button className="bg-[#169859] text-[#f3faf6] p-2 w-28 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
            Submit
          </button>
          <Link
            to={"/manage-user"}
            className="border border-[#169859] text-[#169859] p-2 w-28 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            Cancel
          </Link>
        </div>
      </section>
    </Layout>
  );
}

const FormInput = ({ label, type }) => {
  if (type === "text") {
    return (
      <div className="flex flex-col">
        <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
          {label}
        </label>
        <input
          type="text"
          className=" w-full border border-[#169859]  px-5 h-10 rounded-md rounded-tl-none"
          placeholder="Type here.."
        />
      </div>
    );
  }
  if (type === "date") {
    return (
      <div className="flex flex-col">
        <div className="flex items-end gap-2">
          <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
            {label}
          </label>
          <small>Hari/Bulan/Tahun</small>
        </div>
        <input
          type="date"
          className="w-full border border-[#169859]  px-5 h-10 rounded-md rounded-tl-none"
          placeholder="Type here.."
        />
      </div>
    );
  }
  if (type === "area") {
    return (
      <div className="flex flex-col  col-span-2">
        <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
          {label}
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="border border-[#169859] rounded-md rounded-tl-none col-span-3 p-5"
          placeholder="Type Here"
        ></textarea>
      </div>
    );
  }
};

export default TambahUser;
