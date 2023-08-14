import { React, useState } from "react";
import { Link } from "react-router-dom";
import LayoutDaftarTahsin from "./LayoutDaftarTahsin";

function DaftarTahsinBiodata() {
  return (
    <>
      <LayoutDaftarTahsin>
        <section className="p-5 mt-10  bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-md">
          <div className="px-5">
            <div className="grid grid-cols-2 gap-10">
              <FormInput title={"No ID LTQ (5 Digit)"} />
              <FormInput title={"Nama Lengkap"} start={"*"} />
              <FormInput title={"Usia"} start={"*"} />
              <FormSelect
                title={"Jenis Kelain"}
                list0={"Silahkan Pilih"}
                list1={"Laki-Laki"}
                list2={"Perempuan"}
              />
            </div>
            <div className="flex flex-col mt-10">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40 relative">
                Alamat
              </label>
              <input
                type="text"
                className="pr-5 w-full border border-[#169859]  px-5 h-[100px] rounded-md rounded-tl-none"
                placeholder="Type here.."
              />
            </div>
            <div className="grid grid-cols-2 gap-10 mt-10">
              <FormSelect title={"Kelurahan"} />
              <FormSelect title={"Kecamatan"} />
              <FormSelect title={"Kabupaten/Kota"} />
              <FormSelect title={"Provinsi"} />
              <FormInput title={"No Wa"} />
              <FormInput title={"No SMS Alternatif"} />
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-10 pr-5">
            {/* <button
                type="submit"
                className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                Submit
              </button> */}
            <Link
              to="/daftartahsinhari"
              className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            >
              Submit
            </Link>
            <button
              type="submit"
              className="border border-[#169859] text-[#169859] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            >
              Cancel
            </button>
          </div>
        </section>
      </LayoutDaftarTahsin>
    </>
  );
}

const FormInput = ({ title, start }) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40 relative">
          {title}
          <span className="absolute pl-2">{start}</span>
        </label>
        <input
          type="text"
          className=" w-full border border-[#169859]  px-5 h-10 rounded-md rounded-tl-none"
          placeholder="Type here.."
        />
      </div>
    </>
  );
};

const FormSelect = ({ title, list0, list1, list2, value }) => {
  return (
    <>
      <div className="flex flex-col">
        <label
          for="cars"
          className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40 relative"
        >
          {title}
          <span className="absolute pl-5">*</span>
        </label>
        <select
          name="cars"
          id="cars"
          className="h-10 w-full border border-[#169859]  px-5 rounded-md rounded-tl-none"
        >
          <option value={value}>{list0}</option>
          <option value={value}>{list1}</option>
          <option value={value}>{list2}</option>
        </select>
      </div>
    </>
  );
};

export default DaftarTahsinBiodata;
