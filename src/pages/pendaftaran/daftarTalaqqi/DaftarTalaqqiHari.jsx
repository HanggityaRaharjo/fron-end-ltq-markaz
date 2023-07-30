import { React, useState } from "react";
import { Link } from "react-router-dom";
import LayoutTalaqqi from "./LayoutTalaqqi";

function DaftarTalaqqiHari() {
  // State untuk menyimpan nilai opsi yang terpilih
  const [selectedOption, setSelectedOption] = useState("");

  // Daftar opsi yang akan ditampilkan dalam dropdown
  const options = [
    { value: "option1", label: "senin" },
    { value: "option2", label: "selasa" },
    { value: "option3", label: "rabu" },
    { value: "option4", label: "kamis" },
    { value: "option5", label: "jumat" },
    { value: "option6", label: "sabtu" },
  ];

  // Fungsi untuk menangani perubahan opsi terpilih
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <LayoutTalaqqi>
        <section className="p-5 mt-10  bg-white bg-opacity-60 backdrop-blur-md rounded-xl shadow-md">
          <div className="px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <FormSelect
                title={"Waktu"}
                list0={"-- Silahkan Pilih --"}
                list1={"05.00 - 07.00"}
                list2={"07.00 - 09-00"}
              />

              <DropdownSelect
                title={"Waktu"}
                options={options}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
              />
            </div>
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
      </LayoutTalaqqi>
    </>
  );
}
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
          className="h-10 w-full border border-[#169859]  px-5 rounded-lg rounded-tl-none"
        >
          <option value={value}>{list0}</option>
          <option value={value}>{list1}</option>
          <option value={value}>{list2}</option>
        </select>
      </div>
    </>
  );
};

const DropdownSelect = (props) => {
  const { options, selectedOption, onChange, title } = props;

  return (
    <div className="flex flex-col">
      <label
        for="cars"
        className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40 relative"
      >
        {title}
        <span className="absolute pl-5">*</span>
      </label>
      <select
        value={selectedOption}
        onChange={onChange}
        className="h-10 w-full border border-[#169859]  px-5 rounded-lg rounded-tl-none"
      >
        <option value="">Pilih opsi...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DaftarTalaqqiHari;
