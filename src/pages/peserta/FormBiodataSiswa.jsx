import React from "react";
import Layout from "../../layouts/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
const FormBiodataSiswa = () => {
  // State untuk menyimpan nilai opsi yang terpilih
  const [selectedOption, setSelectedOption] = useState("");

  // Daftar opsi yang akan ditampilkan dalam dropdown
  const options = [
    { value: "option1", label: "Laki-Laki" },
    { value: "option2", label: "Perempuan" },
  ];

  // Fungsi untuk menangani perubahan opsi terpilih
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[1].value);
  };
  return (
    <Layout>
      <section className="min-h-screen ">
        <div className="h-20  bg-white rounded-full flex items-center justify-around shadow-lg mb-5">
          <StepNumber number={1} text="Biodata Siswa" status={true} />
          <StepArrow />
          <StepNumber number={2} text="Pilihan Program" status={false} />
          <StepArrow />
          <StepNumber number={3} text="Biaya Pendidikan" status={false} />
          <StepArrow />
          <StepNumber number={4} text="Placement Test" status={false} />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-5">
          <form action="" method="post" onSubmit={(e) => HandleSubmit(e)}>
            <div className="grid grid-cols-2 gap-10 mb-2">
              <FormInput label="Nama Lengkap" type="text" />
              <FormInput label="Usia" type="text" />
              <DropdownSelect
                title={"Jenis Kelamin"}
                options={options}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
              />
              <FormInput label="Tanggal Lahir" type="date" />
              <FormInput label="Alamat Lengkap" type="area" />
              <DropdownSelect
                title={"Kelurahan"}
                options={options}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
              />
              <DropdownSelect
                title={"kecamatan"}
                options={options}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
              />
              <DropdownSelect
                title={"Kabupaten"}
                options={options}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
              />
              <DropdownSelect
                title={"Provinsi"}
                options={options}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
              />
              <FormInput label="No WA" type="text" />
              <FormInput label="No Alternatif" type="text" />
            </div>
            <div className="flex w-ful gap-2 mt-10">
              <ImageUploaderSquare />
              <ImageUploaderCircle />
            </div>

            <div className="flex justify-end gap-5 mt-5">
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
          </form>
        </div>
      </section>
    </Layout>
  );
};

// imagebulat

const ImageUploaderCircle = () => {
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
      <div className="w-1/2">
        <div className="flex justify-center">
          <div className="w-full">
            {imagePreview ? (
              <div className="flex justify-center">
                <div className="w-[150px] h-[150px]">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-[150px] h-[150px] rounded-full object-center object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="w-[150px] h-[150px] bg-gray-200 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-20 h-20 text-gray-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}
            <div className="mt-5">
              <div
                onClick={(e) => {
                  e.target.firstChild.click();
                }}
                className=" flex justify-center items-center w-[480] h-10 bg-[#169859] bg-opacity-60 rounded-lg cursor-pointer"
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
                  <p className="text-sm font-semibold text-white">
                    Upload File
                  </p>
                </div>

                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// imagekotak

const ImageUploaderSquare = () => {
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
      <div className="w-1/2">
        <div className="flex justify-center">
          <div className="w-full">
            {imagePreview ? (
              <div className="flex justify-center">
                <div className="w-[290px] h-[150px]">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-[290px] h-[150px] rounded-md object-center object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="w-[290px] h-[150px] bg-gray-200 rounded-md flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-20 h-20 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
              </div>
            )}
            <div className="mt-5">
              <div
                onClick={(e) => {
                  e.target.firstChild.click();
                }}
                className=" flex justify-center items-center w-[480] h-10 bg-[#169859] bg-opacity-60 rounded-lg cursor-pointer"
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
                  <p className="text-sm font-semibold text-white">
                    Upload File
                  </p>
                </div>

                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="col-span-2  flex justify-center items-center bg-[#169859] bg-opacity-60 rounded-lg cursor-pointer"
        onClick={(e) => {
          e.target.firstChild.click();
        }}
      >
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className="border h-full w-full relative -z-10 hidden"
        />
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <p className="text-xl font-semibold text-white">Upload File</p>
        </div>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div> */}
    </>
  );
};

const FormInput = ({ label, type }) => {
  if (type === "text") {
    return (
      <div className="flex flex-col">
        <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
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
          <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
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
        <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
          {label}
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="border border-[#169859] rounded-lg rounded-tl-none col-span-3 p-5"
          placeholder="Type Here"
        ></textarea>
      </div>
    );
  }
};

const StepNumber = ({ number, text, status }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className="w-14 h-14 bg-[] rounded-full flex justify-center items-center"
        style={{ backgroundColor: status ? "#169859" : "#16985940" }}
      >
        <span className="text-2xl font-bold text-[#f3faf6]">{number}</span>
      </div>
      <div>
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  );
};

const StepArrow = () => {
  return (
    <div className="w-16 h-16  rounded-full flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  );
};

const DropdownSelect = (props) => {
  const { options, selectedOption, onChange, title } = props;

  return (
    <div className="flex flex-col">
      <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40 relative">
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

export default FormBiodataSiswa;
