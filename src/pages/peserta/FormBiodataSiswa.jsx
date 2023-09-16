import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../store/AuthStore";
import axios from "axios";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsActive,
} from "../../components/breadcrumbs";
import Cookies from "js-cookie";

const FormBiodataSiswa = () => {
  const user = useAuth((state) => state);
  const [selectedOption, setSelectedOption] = useState("");
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const options = [
    { value: "option1", label: "Laki-Laki" },
    { value: "option2", label: "Perempuan" },
  ];

  const GetAllProvince = () => {
    axios
      .get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then(({ data }) => {
        console.log(data);
        setDataProvinsi(data);
      });
  };
  useEffect(() => {
    GetAllProvince();
  }, []);

  // Fungsi untuk menangani perubahan opsi terpilih
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    function ubahFormatTanggalNumerik(tanggal) {
      const tanggalArr = tanggal.split("-");
      const tahun = tanggalArr[0];
      const bulan = tanggalArr[1];
      const tanggalBaru = tanggalArr[2];
      const hasil = `${tahun}-${bulan}-${tanggalBaru}`;
      return hasil;
    }
    e.preventDefault();

    axios
      .post(
        `${import.meta.env.VITE_BACK_END_END_POINT_URL}/biodata/create`,
        {
          uuid: "19d7cb21-3dfd-482e-8bb3-e776b600e407",
          full_name: e.target["full_name"].value,
          usia: e.target["usia"].value,
          jenis_kelamin: e.target["jenis_kelamin"].value,
          tanggal_lahir: ubahFormatTanggalNumerik(
            e.target["tanggal_lahir"].value
          ),
          alamat: e.target["alamat"].value,
          photo: e.target["foto_diri"].files[0],
          photo_ktp: e.target["ktp"].files[0],
          kelurahan: e.target["kelurahan"].value,
          kecamatan: e.target["kecamatan"].value,
          kabupaten_kota: e.target["kabupaten_kota"].value,
          provinsi: e.target["provinsi"].value,
          no_wa: e.target["no_wa"].value,
          no_alternatif: e.target["no_alternatif"].value,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/pilih-program");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Pendaftaran</BreadcrumbsItem>
        <BreadcrumbsActive>Biodata</BreadcrumbsActive>
      </Breadcrumbs>
      <section className="min-h-screen font-poppins text-gray-500">
        <div className="">
          <form method="post" onSubmit={(e) => HandleSubmit(e)}>
            {/* Biodata */}
            <div className=" bg-white rounded-md rounded-l-none shadow-lg p-5 mb-5 border-l-4 border-[#169859]">
              <h3 className="text-lg text-gray-500 font-semibold mb-2 text-end">
                Biodata
              </h3>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex flex-col">
                  <label className="font-medium">Nama Lengkap</label>
                  <input
                    name="full_name"
                    type="text"
                    required
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none"
                    placeholder="Type here.."
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium">Usia</label>
                  <input
                    name="usia"
                    type="number"
                    required
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none"
                    placeholder="Type here.."
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium">
                    jenis Kelamin
                    <span className="absolute pl-5">*</span>
                  </label>
                  <select
                    name="jenis_kelamin"
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none"
                  >
                    <option value="">Pilih opsi...</option>
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="font-medium">Tanggal Lahir</label>
                  <input
                    name="tanggal_lahir"
                    type="date"
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none"
                    placeholder="Type here.."
                  />
                </div>
              </div>
            </div>
            {/* End Biodata */}

            {/* Alamat Lengkap */}
            <div className=" bg-white rounded-md rounded-l-none shadow-lg p-5 mb-5 border-l-4 border-[#169859]">
              <h3 className="text-lg text-gray-500 font-semibold mb-2 text-end">
                Alamat Lengkap
              </h3>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex flex-col">
                  <label className="font-medium">
                    provinsi
                    <span className="absolute pl-5">*</span>
                  </label>
                  <select
                    name="provinsi"
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none"
                    style={{ height: "auto" }}
                  >
                    <option value="">Pilih opsi...</option>
                    {dataProvinsi &&
                      dataProvinsi.map((item) => (
                        <option value={item.name}>{item.name}</option>
                      ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="font-medium">
                    Kabupaten/Kota
                    <span className="absolute pl-5">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="kabupaten_kota"
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none"
                    placeholder="Kabupaten/Kota"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium">
                    Kecamatan
                    <span className="absolute pl-5">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="kecamatan"
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none"
                    placeholder="Kecamatan"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium">
                    kelurahan
                    <span className="absolute pl-5">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="kelurahan"
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none"
                    placeholder="Kelurahan"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium">Alamat</label>
                  <input
                    name="alamat"
                    type="area"
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none"
                    placeholder="Type here.."
                  />
                </div>
              </div>
            </div>
            {/* End Alamat Lengkap */}

            {/* No Telephone */}
            <div className=" bg-white rounded-md rounded-l-none shadow-lg p-5 mb-5 border-l-4 border-[#169859]">
              <h3 className="text-lg text-gray-500 font-semibold mb-2 text-end">
                No Telepon
              </h3>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex flex-col">
                  <label className="font-medium">No Wa</label>
                  <input
                    name="no_wa"
                    type="number"
                    required
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none"
                    placeholder="Type here.."
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium">Nomor Alternatif</label>
                  <input
                    name="no_alternatif"
                    type="number"
                    required
                    className="w-full border-b-2 border-gray-300 focus:border-[#169859] h-10 outline-none"
                    placeholder="Nomor Alternatif"
                  />
                </div>
              </div>
            </div>
            {/* End No Telephone */}

            <div className="flex w-full border-l-4 border-[#169859] gap-2 mt-10 bg-white p-5 rounded-md rounded-l-none shadow">
              <ImageUploaderCircle name="foto_diri" />
              <ImageUploaderSquare name="ktp" />
            </div>

            <div className="flex justify-end gap-5 mt-5">
              <button
                type="submit"
                className="bg-[#169859] text-[#f3faf6] p-2 w-32  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
              >
                <span>Simpan</span>
              </button>
              <button className="border border-[#169859] w-32  text-[#169859] p-2  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95">
                <span>Batal</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

// imagebulat

const ImageUploaderCircle = ({ name }) => {
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
            <p className="text-center text-gray-500 font-semibold">Foto Diri</p>
            {imagePreview ? (
              <div className="flex justify-center">
                <div className="w-[150px] h-[150px]">
                  <img
                    name="photo"
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
                className=" flex justify-center items-center w-[480] h-10 bg-[#169859]  rounded-md cursor-pointer"
              >
                <input
                  type="file"
                  required
                  name={name}
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

const ImageUploaderSquare = ({ name }) => {
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
            <p className="text-center text-gray-500 font-semibold">Foto KTP</p>
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
                className=" flex justify-center items-center w-[480] h-10 bg-[#169859] rounded-md cursor-pointer"
              >
                <input
                  name={name}
                  type="file"
                  required
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

export default FormBiodataSiswa;
