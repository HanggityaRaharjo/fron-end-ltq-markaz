import { React, useState } from "react";
import Layout from "../../../layouts/Layout";
import {
  Breadcrumbs,
  BreadcrumbsActive,
  BreadcrumbsItem,
} from "../../../components/breadcrumbs";

function PengaturanCabang() {
  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Akun</BreadcrumbsItem>
        <BreadcrumbsActive>Edit</BreadcrumbsActive>
      </Breadcrumbs>
      <FormSection />
    </Layout>
  );
}

const FormSection = () => {
  const HandleSubmitPost = (e) => {
    e.preventDefault();
    // Isi disini untuk melakukan Post

    //

    //
  };
  return (
    <section className="p-5 font-poppins">
      <div className="bg-white rounded-md shadow-lg p-5">
        <h2 className="mb-5 text-3xl font-semibold">Pengaturan Profil</h2>
        <form action="" method="post" onSubmit={(e) => HandleSubmitPost(e)}>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex justify-center w-full">
              <UploaderLogo />
            </div>
            <div className=" flex flex-col justify-between">
              <div>
                <FormInput type={"text"} label={"asdfg"} />
              </div>
              <div className="pt-5">
                <FormInput type={"text"} label={"asdfg"} />
              </div>
              <div className="pt-5">
                <FormInput type={"text"} label={"asdfg"} />
              </div>
            </div>
          </div>

          <div className="my-5 flex justify-center">
            <div className="w-full">
              <FormInput type={"area"} label={"Alamat"} />
            </div>
          </div>

          <div className="flex justify-end gap-5 items-center">
            <button
              type="submit"
              className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
            >
              <span>Submit</span>
            </button>
            <button className="border border-[#169859] text-[#169859] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
              <span>Cancel</span>
            </button>
          </div>
        </form>
      </div>
    </section>
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

const UploaderLogo = () => {
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
      <div className="w-full">
        <div className="flex justify-center">
          <div className="w-full">
            {imagePreview ? (
              <div className="flex justify-center">
                <div className="w-full h-[200px]">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-[200px] rounded-md object-center object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="w-full h-[200px] bg-gray-200 rounded-t-lg flex justify-center items-center">
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
            <div className="flex justify-center w-full">
              <div
                onClick={(e) => {
                  e.target.firstChild.click();
                }}
                className=" flex justify-center items-center  w-full h-10 bg-[#169859] bg-opacity-60 rounded-b-lg cursor-pointer"
              >
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className=" h-full w-full relative -z-10 hidden"
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

export default PengaturanCabang;
