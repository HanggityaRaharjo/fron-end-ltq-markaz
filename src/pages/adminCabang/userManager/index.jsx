import React, { useEffect } from 'react'
import { useState } from 'react';
import Layout from '../../../layouts/Layout';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import axios from 'axios';


function UserManager() {
  const [showModal, setShowmodal] = useState(false);
  const [showBiodata, setShowBiodata] = useState([])

  const HandleTambahUser = () => {
    setShowmodal(true)
  }


  useEffect(() => {
    axios.get('http://192.168.43.81:8000/api/biodata', {

    }).then((response) => {
      console.log(response);
      setShowBiodata(response.data.Data);
    })
  }, [])


  return (
    <Layout>
      <ModalTambah
        show={showModal}
        changeModal={setShowmodal}
      />
      <section className='bg-white p-5'>
        <div className='mt-5'>
          <div className='text-end border flex justify-between mb-2'>
            <button onClick={() => HandleTambahUser()} className='bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
              <span>Tambah User</span>
            </button>
            {/* <input type="text" onChange={handleFilter} className=' border border-gray-300 p-1' placeholder='search...' /> */}
          </div>
          <div className='bg-white shadow-md p-1 max-h-[400px] overflow-y-auto'>
            {/* <DataTable columns={columns} data={records} selectableRows fixedHeader pagination paginationPerPage={5} /> */}
            <table className='w-full  '>
              <thead>
                <td className='p-2 border text-center font-semibold w-[50px]'>No</td>
                <td className='p-2 border text-center font-semibold w-[250px]'>Nama</td>
                <td className='p-2 border text-center font-semibold w-[100px]'>TTG</td>
                <td className='p-2 border text-center font-semibold w-[150px]'>Jenis Kelamin</td>
                <td className='p-2 border text-center font-semibold w-[150px]'>Alamat</td>
                <td className='p-2 border text-center font-semibold w-[150px]'>No Wa</td>
                <td className='p-2 border text-center font-semibold w-[150px]'>Action</td>
              </thead>
              <tbody>
                {showBiodata && showBiodata.map((item, index) =>
                  <tr>
                    <td className='p-2 border'>{index + 1}</td>
                    <td className='p-2 border'>{item.full_name}</td>
                    <td className='p-2 border'>{item.tanggal_lahir}</td>
                    <td className='p-2 border'>{item.jenis_kelamin}</td>
                    <td className='p-2 border'>{item.alamat}</td>
                    <td className='p-2 border'>{item.no_wa}</td>
                    <td className='p-2 border'>
                      <div className='flex gap-1'>
                        <button className='bg-[#169859] text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                          <span>Edit</span>
                        </button>
                        <button
                          className='bg-red-400 text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                          <span>Hapus</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className='flex justify-end mt-10 pr-7'>
          <button className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
            <span>Save</span>
          </button>
        </div>
      </section>
    </Layout >
  )
}



const ModalTambah = ({ show, changeModal }) => {
  return (
    <div
      className="fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-50 justify-center items-center"
      style={{ display: show ? "flex" : "none" }}
    >
      <div className='flex justify-center items-center h-full w-full'>

        <div className="w-[600px] p-5 bg-white rounded-lg  justify-center items-center max-h-[400px] overflow-y-auto">
          <h1 className='font-semibold'>Tambah User</h1>
          <div className='grid grid-cols-1 gap-2'>
            <div className="flex flex-col mt-2">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                Nama Lengkap
              </label>
              <input
                name='full_name'
                type="text"
                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                placeholder="Type here.."
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                Tanggal Lahir
              </label>
              <input
                name='full_name'
                type="date"
                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                placeholder="Type here.."
              />
            </div>
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40 relative">
                jenis Kelamiin
                <span className="absolute pl-5">*</span>
              </label>
              <select
                name="jenis_kelamin"
                className="h-10 w-full border border-[#169859]  px-5 rounded-lg rounded-tl-none"
              >
                <option value="">Pilih opsi...</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                No Wa
              </label>
              <input
                name='full_name'
                type="text"
                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                placeholder="Type here.."
              />
            </div>
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                Alamat
              </label>
              <input
                name='full_name'
                type="area"
                className=" w-full border border-[#169859]  px-5 h-20 rounded-lg rounded-tl-none"
                placeholder="Type here.."
              />
            </div>
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40 relative">
                provinsi
                <span className="absolute pl-5">*</span>
              </label>
              <select
                name="provinsi"
                className="h-10 w-full border border-[#169859]  px-5 rounded-lg rounded-tl-none"
              >
                <option value="">Pilih opsi...</option>
                <option value="jawa barat">jawa barat</option>
                <option value="jawa timur">jawa timur</option>

              </select>
            </div>
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40 relative">
                Kabupaten/Kota
                <span className="absolute pl-5">*</span>
              </label>
              <select
                name="kabupaten_kota"
                className="h-10 w-full border border-[#169859]  px-5 rounded-lg rounded-tl-none"
              >
                <option value="">Pilih opsi...</option>
                <option value="bandung">bandung</option>
                <option value="bekasi">bekasi</option>

              </select>
            </div>
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40 relative">
                Kecamatan
                <span className="absolute pl-5">*</span>
              </label>
              <select
                name="kecamatan"
                className="h-10 w-full border border-[#169859]  px-5 rounded-lg rounded-tl-none"
              >
                <option value="">Pilih opsi...</option>
                <option value="baleendah">baleendah</option>
                <option value="adir">adir</option>

              </select>
            </div>
            <div className="flex flex-col">
              <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40 relative">
                kelurahan
                <span className="absolute pl-5">*</span>
              </label>
              <select
                name="kelurahan"
                className="h-10 w-full border border-[#169859]  px-5 rounded-lg rounded-tl-none"
              >
                <option value="">Pilih opsi...</option>
                <option value="andir">andir</option>
                <option value="malakasari">malakasari</option>
              </select>
            </div>
          </div>
          <div className="flex gap-5 mb-2 justify-end items-center translate-y-5">
            <button
              type="submit"
              // onClick={() => HandleNextPost()}
              className="bg-green-700 rounded-lg px-5 py-2 text-white min-w-[100px]">
              Ya
            </button>
            <button
              onClick={() => changeModal(false)}
              className="bg-green-700 rounded-lg px-5 py-2 text-white min-w-[100px]"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default UserManager;