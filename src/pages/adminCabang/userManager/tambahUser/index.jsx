import React, { useState } from "react";
import Layout from "../../../../layouts/Layout";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsActive,
} from "../../../../components/breadcrumbs";
function TambahUser() {
  const [currentTab, setCurrentTab] = useState("peserta");
  return (
    <Layout>
      <Breadcrumbs>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
        <BreadcrumbsItem>Pengaturan</BreadcrumbsItem>
        <BreadcrumbsItem>Pengguna</BreadcrumbsItem>
        <BreadcrumbsActive>Buat</BreadcrumbsActive>
      </Breadcrumbs>
      <section>
        <div className="flex mb-5 gap-2">
          <button
            className={
              currentTab == "peserta"
                ? "py-2 px-4 rounded-md bg-[#2f3a4e] text-[#f3faf6] active:scale-95 transition duration-300"
                : "bg-gray-100 py-2 px-4 rounded-md"
            }
            onClick={() => setCurrentTab("peserta")}
          >
            Peserta
          </button>
          <button
            className={
              currentTab == "guru"
                ? "py-2 px-4 rounded-md bg-[#2f3a4e] text-[#f3faf6] active:scale-95 transition duration-300"
                : "bg-gray-100 py-2 px-4 rounded-md"
            }
            onClick={() => setCurrentTab("guru")}
          >
            Guru
          </button>

          <button
            className={
              currentTab == "tata-usaha"
                ? "py-2 px-4 rounded-md bg-[#2f3a4e] text-[#f3faf6] active:scale-95 transition duration-300"
                : "bg-gray-100 py-2 px-4 rounded-md"
            }
            onClick={() => setCurrentTab("tata-usaha")}
          >
            Tata Usaha
          </button>
          <button
            className={
              currentTab == "bendahara"
                ? "py-2 px-4 rounded-md bg-[#2f3a4e] text-[#f3faf6] active:scale-95 transition duration-300"
                : "bg-gray-100 py-2 px-4 rounded-md"
            }
            onClick={() => setCurrentTab("bendahara")}
          >
            Bendahara
          </button>
          <button
            className={
              currentTab == "admin-cabang"
                ? "py-2 px-4 rounded-md bg-[#2f3a4e] text-[#f3faf6] active:scale-95 transition duration-300"
                : "bg-gray-100 py-2 px-4 rounded-md"
            }
            onClick={() => setCurrentTab("admin-cabang")}
          >
            Admin Cabang
          </button>
        </div>
        {currentTab == "peserta" ? <BoxFormPeserta /> : null}
        {currentTab == "guru" ? <BoxFormGuru /> : null}
        {currentTab == "tata-usaha" ? <BoxFormTataUsaha /> : null}
        {currentTab == "admin-cabang" ? <BoxFormAdminCabang /> : null}
        {currentTab == "bendahara" ? <BoxFormBendahara /> : null}
      </section>
    </Layout>
  );
}

const BoxFormPeserta = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-5 mb-5">
        {/*  */}
        <div>
          {/* Otentikasi */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                otentikasi pengguna
              </p>
            </div>
            <FormInput name="Email" title="Email" />
            <FormInput name="nama" title="Nama" />
            <FormInput name="Password" title="Password" />
          </div>
          {/* End Otentikasi */}
          {/* Pilih Cabang */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                Cabang
              </p>
            </div>
            <FormInput name="Email" title="Pilih Cabang" />
          </div>
          {/* End Pilih Cabang */}
          {/* Program */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                Program
              </p>
            </div>
            <FormInput name="nama_lengkap" title="Nama Lengkap" />
            <FormInput name="tanggal_lahir" title="Tanggal Lahir" />
          </div>
          {/* End Program */}
          {/* File */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                File
              </p>
            </div>
            <FormInput name="Foto" title="Foto Diri" />
            <FormInput name="Foto" title="Foto KTP" />
          </div>
          {/* END fILE */}
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-white rounded-md shadow p-5 ">
          <div className="mb-2 flex justify-end text-end">
            <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
              Biodata Peserta
            </p>
          </div>
          <FormInput name="nama_lengkap" title="Nama Lengkap" />
          <FormInput name="tanggal_lahir" title="Tanggal Lahir" />
          <FormInput name="Usia" title="Usia" />
          <FormInput name="Jeniskelamin" title="Jeniskelamin" />
          <FormInput name="Alamat" title="Alamat" />
          <FormInput name="Kelurahan" title="Kelurahan" />
          <FormInput name="Kecamatan" title="Kecamatan" />
          <FormInput name="Kabupaten/Kota" title="Kabupaten/Kota" />
          <FormInput name="Provinsi" title="Provinsi" />
          <FormInput name="No wa" title="No wa" />
          <FormInput name="No Alternatif" title="No Alternatif" />
        </div>
        {/*  */}
        {/*  */}

        {/*  */}
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#169859] text-[#f3faf6] p-2 w-full  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
        >
          <span>Simpan</span>
        </button>
      </div>
    </section>
  );
};

const BoxFormGuru = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-5 mb-5">
        {/*  */}
        <div className="w-">
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                otentikasi pengguna
              </p>
            </div>
            <FormInput name="Email" title="Email" />
            <FormInput name="nama" title="Nama" />
            <FormInput name="Password" title="Password" />
          </div>
          {/* Program */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                Program
              </p>
            </div>
            <FormInput name="nama_lengkap" title="Nama Lengkap" />
            <FormInput name="tanggal_lahir" title="Tanggal Lahir" />
          </div>
          {/* End Program */}
          {/* File */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                File
              </p>
            </div>
            <FormInput name="Foto" title="Foto Diri" />
            <FormInput name="Foto" title="Foto KTP" />
          </div>
          {/* END fILE */}
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-white rounded-md shadow p-5 ">
          <div className="mb-2 flex justify-end text-end">
            <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
              Biodata Guru
            </p>
          </div>
          <FormInput name="nama_lengkap" title="Nama Lengkap" />
          <FormInput name="tanggal_lahir" title="Tanggal Lahir" />
          <FormInput name="Usia" title="Usia" />
          <FormInput name="Jeniskelamin" title="Jeniskelamin" />
          <FormInput name="Alamat" title="Alamat" />
          <FormInput name="Kelurahan" title="Kelurahan" />
          <FormInput name="Kecamatan" title="Kecamatan" />
          <FormInput name="Kabupaten/Kota" title="Kabupaten/Kota" />
          <FormInput name="Provinsi" title="Provinsi" />
          <FormInput name="No wa" title="No wa" />
          <FormInput name="No Alternatif" title="No Alternatif" />
        </div>
        {/*  */}
        {/*  */}

        {/*  */}
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#169859] text-[#f3faf6] p-2 w-full  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
        >
          <span>Simpan</span>
        </button>
      </div>
    </section>
  );
};

const BoxFormAdminCabang = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-5 mb-5">
        {/*  */}
        <div className="w-">
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                otentikasi pengguna
              </p>
            </div>
            <FormInput name="Email" title="Email" />
            <FormInput name="nama" title="Nama" />
            <FormInput name="Password" title="Password" />
          </div>
          {/* Program */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                Program
              </p>
            </div>
            <FormInput name="nama_lengkap" title="Nama Lengkap" />
            <FormInput name="tanggal_lahir" title="Tanggal Lahir" />
          </div>
          {/* End Program */}
          {/* File */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                File
              </p>
            </div>
            <FormInput name="Foto" title="Foto Diri" />
            <FormInput name="Foto" title="Foto KTP" />
          </div>
          {/* END fILE */}
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-white rounded-md shadow p-5 ">
          <div className="mb-2 flex justify-end text-end">
            <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
              Biodata Peserta
            </p>
          </div>
          <FormInput name="nama_lengkap" title="Nama Lengkap" />
          <FormInput name="tanggal_lahir" title="Tanggal Lahir" />
          <FormInput name="Usia" title="Usia" />
          <FormInput name="Jeniskelamin" title="Jeniskelamin" />
          <FormInput name="Alamat" title="Alamat" />
          <FormInput name="Kelurahan" title="Kelurahan" />
          <FormInput name="Kecamatan" title="Kecamatan" />
          <FormInput name="Kabupaten/Kota" title="Kabupaten/Kota" />
          <FormInput name="Provinsi" title="Provinsi" />
          <FormInput name="No wa" title="No wa" />
          <FormInput name="No Alternatif" title="No Alternatif" />
        </div>
        {/*  */}
        {/*  */}

        {/*  */}
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#169859] text-[#f3faf6] p-2 w-full  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
        >
          <span>Simpan</span>
        </button>
      </div>
    </section>
  );
};

const BoxFormBendahara = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-5 mb-5">
        {/*  */}
        <div className="w-">
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                otentikasi pengguna
              </p>
            </div>
            <FormInput name="Email" title="Email" />
            <FormInput name="nama" title="Nama" />
            <FormInput name="Password" title="Password" />
          </div>
          {/* Program */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                Program
              </p>
            </div>
            <FormInput name="nama_lengkap" title="Nama Lengkap" />
            <FormInput name="tanggal_lahir" title="Tanggal Lahir" />
          </div>
          {/* End Program */}
          {/* File */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                File
              </p>
            </div>
            <FormInput name="Foto" title="Foto Diri" />
            <FormInput name="Foto" title="Foto KTP" />
          </div>
          {/* END fILE */}
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-white rounded-md shadow p-5 ">
          <div className="mb-2 flex justify-end text-end">
            <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
              Biodata Peserta
            </p>
          </div>
          <FormInput name="nama_lengkap" title="Nama Lengkap" />
          <FormInput name="tanggal_lahir" title="Tanggal Lahir" />
          <FormInput name="Usia" title="Usia" />
          <FormInput name="Jeniskelamin" title="Jeniskelamin" />
          <FormInput name="Alamat" title="Alamat" />
          <FormInput name="Kelurahan" title="Kelurahan" />
          <FormInput name="Kecamatan" title="Kecamatan" />
          <FormInput name="Kabupaten/Kota" title="Kabupaten/Kota" />
          <FormInput name="Provinsi" title="Provinsi" />
          <FormInput name="No wa" title="No wa" />
          <FormInput name="No Alternatif" title="No Alternatif" />
        </div>
        {/*  */}
        {/*  */}

        {/*  */}
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#169859] text-[#f3faf6] p-2 w-full  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
        >
          <span>Simpan</span>
        </button>
      </div>
    </section>
  );
};

const BoxFormTataUsaha = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-5 mb-5">
        {/*  */}
        <div className="w-">
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                otentikasi pengguna
              </p>
            </div>
            <FormInput name="Email" title="Email" />
            <FormInput name="nama" title="Nama" />
            <FormInput name="Password" title="Password" />
          </div>
          {/* Program */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                Program
              </p>
            </div>
            <FormInput name="nama_lengkap" title="Nama Lengkap" />
            <FormInput name="tanggal_lahir" title="Tanggal Lahir" />
          </div>
          {/* End Program */}
          {/* File */}
          <div className="bg-white rounded-md shadow p-5 mb-5">
            <div className="mb-2 flex justify-end text-end">
              <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
                File
              </p>
            </div>
            <FormInput name="Foto" title="Foto Diri" />
            <FormInput name="Foto" title="Foto KTP" />
          </div>
          {/* END fILE */}
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-white rounded-md shadow p-5 ">
          <div className="mb-2 flex justify-end text-end">
            <p className="border-b-2  font-semibold text-lg text-gray-500 border-gray-500 w-fit px-5">
              Biodata Tata Usaha
            </p>
          </div>
          <FormInput name="nama_lengkap" title="Nama Lengkap" />
          <FormInput name="tanggal_lahir" title="Tanggal Lahir" />
          <FormInput name="Usia" title="Usia" />
          <FormInput name="Jeniskelamin" title="Jeniskelamin" />
          <FormInput name="Alamat" title="Alamat" />
          <FormInput name="Kelurahan" title="Kelurahan" />
          <FormInput name="Kecamatan" title="Kecamatan" />
          <FormInput name="Kabupaten/Kota" title="Kabupaten/Kota" />
          <FormInput name="Provinsi" title="Provinsi" />
          <FormInput name="No wa" title="No wa" />
          <FormInput name="No Alternatif" title="No Alternatif" />
        </div>
        {/*  */}
        {/*  */}

        {/*  */}
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#169859] text-[#f3faf6] p-2 w-full  rounded-md font-semibold hover:bg-opacity-70 transition duration-150  active:scale-95"
        >
          <span>Simpan</span>
        </button>
      </div>
    </section>
  );
};

const FormInput = ({ name, title }) => {
  return (
    <div className="flex flex-col mb-5">
      <label className="bg-[#2f3a4e] text-[#f3faf6] px-2 rounded-t-md  w-40">
        {title}
      </label>
      <input
        name={name}
        type="text"
        className=" w-full border border-[#2f3a4e]  px-5 h-10 rounded-md rounded-tl-none"
        placeholder="Type here.."
      />
    </div>
  );
};

export default TambahUser;
