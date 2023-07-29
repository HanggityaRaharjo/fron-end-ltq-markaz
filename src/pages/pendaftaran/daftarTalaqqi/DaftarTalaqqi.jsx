import { React, useState } from "react";
import { Link } from "react-router-dom";
import LayoutTalaqqi from "./LayoutTalaqqi";

function DaftarTalaqqi() {
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
            <Inputfile title={"Lampirkan Bukti Tranfer Pendaftaran"} />

            <Inputfile title={"Lampirkan  Foto KTP/SIM/Kartu Mahasiswa"} />

            <Inputfile title={"Foto Closeup / Selfie Untuk Kartu ID LTQ"} />

            <Inputfile
              title={
                "Lampirkan Rekaman Suara Surat Maryam Ayat 1-10 (Jika sudah mampu membaca Alquran)"
              }
            />
          </div>
        </section>

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
                className="pr-5 w-full border border-[#169859]  px-5 h-[100px] rounded-lg rounded-tl-none"
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
          {/* <div className="flex justify-end gap-5 mt-10 pr-5">
            <Link className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
              Submit
            </Link>
            <button
              type="submit"
              className="border border-[#169859] text-[#169859] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            >
              Cancel
            </button>
          </div> */}
        </section>

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
            {/* <button
                type="submit"
                className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
              >
                Submit
              </button> */}
            <Link className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
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
      </LayoutTalaqqi>
    </>
  );
}

function Inputfile({ title }) {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview("");
    }

    // Checking if the selected file is an image
    if (selectedFile && selectedFile.type.split("/")[0] !== "image") {
      setErrorMessage("File harus berupa gambar.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <>
      <div className="mt-5 py-5">
        <div className="relative w-4/12">
          <h1>
            {title}
            <span className=" text-red-500 ml-2">*</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div
            onClick={(e) => {
              e.target.firstChild.click();
            }}
            className=" flex justify-center items-center w-40 h-10 bg-[#169859] bg-opacity-60 rounded-lg cursor-pointer"
          >
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              className="border h-full w-full relative -z-10 hidden"
            />
            <div className="flex justify-center gap-5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              <p className="text-sm font-semibold text-white">Upload File</p>
            </div>

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
          <div>
            <div className="flex justify-center">
              <div className="h-[200px] w-[200px] bg-gray-200 rounded-lg flex justify-center items-center">
                {imagePreview ? (
                  <div className="w-[200px] h-[200px]">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-[200px] h-[200px]  rounded-lg object-center object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-[200px] h-[200px] bg-gray-200 rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
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
          className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
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

export default DaftarTalaqqi;
