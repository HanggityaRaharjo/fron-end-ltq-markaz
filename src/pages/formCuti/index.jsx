import React from "react";
import Layout from "../../layouts/Layout";

function FormCuti() {
  return (
    <Layout>
      <section className="mt-10 bg-white p-5 shadow-md">
        <div className="grid grid-cols-2 gap-2">
          <FormInput label={"Mulai cuti"} type={"date"} />
          <FormInput label={"Sampai dengan"} type={"date"} />
          <FormInput label={"Alasan"} type={"area"} />
        </div>
        <div className="flex justify-end gap-5 mt-10 pr-5">
          <button className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
            Submit
          </button>
          <button
            type="submit"
            className="border border-[#169859] text-[#169859] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
          >
            Cancel
          </button>
        </div>
      </section>
    </Layout>
  );
}

const FormInput = ({ label, type }) => {
  if (type === "text") {
    return (
      <div className="flex flex-col">
        <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg w-auto p-1">
          {label}
        </label>
        <input
          type="text"
          className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
          placeholder="Type here.."
        />
      </div>
    );
  }
  if (type === "date") {
    return (
      <div className="flex flex-col">
        <div className="flex items-end gap-2">
          <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-auto p-1">
            {label}
          </label>
          <small>Hari/Bulan/Tahun</small>
        </div>
        <input
          type="date"
          className="w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
          placeholder="Type here.."
        />
      </div>
    );
  }
  if (type === "area") {
    return (
      <div className="flex flex-col  col-span-2">
        <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-auto p-1">
          {label}
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="border border-[#169859] rounded-lg rounded-t-none col-span-3 p-5"
          placeholder="Type Here"
        ></textarea>
      </div>
    );
  }
};

export default FormCuti;
