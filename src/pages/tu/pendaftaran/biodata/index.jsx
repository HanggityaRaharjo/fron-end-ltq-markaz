import React, { useEffect, useState } from 'react'
import Layout from '../../../../layouts/Layout'
import foto from '../../../../assets/founder/founder.jpg'
import { Link } from 'react-router-dom'

function BiodataPegawai() {
    const [showModal, setShowModal] = useState(false)
    const [showEditFoto, setShowEditFoto] = useState(false)
    const [isActive, setIsActive] = useState('biodata')


    const HandleEdit = () => {
        setShowModal(true)
    }

    const HandleFoto = () => {
        setShowEditFoto(true)
    }

    return (
        <Layout>
            <section className='p-5'>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">Biodata</h1>
                    <hr className="border-black" />
                    <p className="bg-[#5FB68A80] px-5 py-2 rounded-md">Lengkapi biodata diri anda</p>
                </div>
                <div className='bg-white shadow-md p-5 mt-5 '>
                    <div className=' flex flex-col md:flex-row gap-5'>
                        <div className='h-[150px] w-[150px] rounded-md bg-gray-500 overflow-hidden object-cover'>
                            <img src={foto} alt="" className='object-cover h-full' />
                        </div>
                        <div className=''>
                            <div className='flex flex-col gap-2'>
                                <h1 className='px-2 font-bold text-[24px]'>Ujang Enam S.T</h1>
                                <table>
                                    <tr>
                                        <td className="px-2 w-[100px] font-semibold">Email</td>
                                        <td className="px-2">:</td>
                                        <td className="px-2 text-blue-400">UjangEnam@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 w-[100px] font-semibold">Facebook</td>
                                        <td className="px-2">:</td>
                                        <td className="px-2 text-blue-400">UjangEnam@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 w-[100px] font-semibold">Instagram</td>
                                        <td className="px-2">:</td>
                                        <td className="px-2 text-blue-400">UjangEnam@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 w-[100px] font-semibold">Role</td>
                                        <td className="px-2">:</td>
                                        <td className="px-2">Pegawai</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end my-5">
                    <Link to={'/form/ubah-biodata-pegawai'} className="flex items-center gap-2 p-2 bg-[#169859] rounded-md text-white active:scale-95 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        Ubah biodata
                    </Link>
                </div>

                <div className='bg-white p-5 shadow-lg rounded-b-md mt-5'>
                    <div className="mt-10 flex flex-col gap-2">
                        <div className="flex flex-col">
                            <label className="font-medium" >Nama Lengkap</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Aceng fikri</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Tempat Lahir</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Bandung</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Tanggal Lahir</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>12-21-1998</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Jenis Kelamin</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Laki-Laki</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Alamat</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>jln. Cipisung</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Kelurahan</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Andir</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Kota</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Bandung</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Provinsi</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Jawa Barat</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >No Wa</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>08978654657</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >No alternatif</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>08976656567</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Pekerjaan</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Karyawan swasta</p>
                        </div>
                        <div className=''>
                            <label className='font-medium'>Foto KTP</label>
                            <div className="w-full pt-2">
                                <div className="w-[285px] h-[190px] rounded-md overflow-hidden border">
                                    <img src={foto} alt="" className="h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}


export default BiodataPegawai