import React from 'react'
import Layout from '../../../layouts/Layout'
import { Link } from 'react-router-dom'

function DaftarSiswa() {
    return (
        <Layout>
            <div className='p-5 font-poppins'>
                <div className='flex flex-col gap-5 bg-white p-5 shadow-md'>
                    <div className="flex flex-col gap-2 mb-10">
                        <h1 className="font-bold text-xl">Daftar Peserta</h1>
                        <hr className="border-black" />
                    </div>
                    <div className='flex justify-center'>
                        <label className='bg-[#169859] px-4 py-2 rounded-l-full text-white font-medium'>Siswa</label>
                        <div className='relative w-[400px] '>
                            <input type="text" className='px-2 border outline-none h-full w-full rounded-r-full ' />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-2 right-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-5 py-10'>
                        <div className='flex flex-col items-center bg-white shadow-md p-5'>
                            <h1 className='font-bold text-3xl'>63</h1>
                            <label>Total Kelas</label>
                        </div>
                        <div className='flex flex-col items-center bg-white shadow-md p-5'>
                            <h1 className='font-bold text-3xl'>496</h1>
                            <label>Total Siswa</label>
                        </div>
                        <div className='flex flex-col items-center bg-white shadow-md p-5'>
                            <h1 className='font-bold text-3xl'>489</h1>
                            <label>Total Telepon</label>
                        </div>
                        <div className='flex flex-col items-center bg-white shadow-md p-5'>
                            <h1 className='font-bold text-3xl'>492</h1>
                            <label>Total Email</label>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className='py-4 flex justify-between'>
                            <div className='flex gap-2'>
                                <label className='font-medium'>Group</label>
                                <select name="" id="" className='border outline-none'>
                                    <option value="">Tafidz</option>
                                    <option value="">Tilawah</option>
                                    <option value="">Tartil</option>
                                </select>
                            </div>
                            <div className='flex gap-2'>
                                <label className='font-medium'>Data</label>
                                <select name="" id="" className='border outline-none'>
                                    <option value="">5</option>
                                    <option value="">10</option>
                                    <option value="">20</option>
                                </select>
                            </div>
                        </div>
                        <table className='w-full bg-white'>
                            <thead>
                                <tr className='bg-black text-white text-center'>
                                    <td className='px-4 py-2 w-20'>ID</td>
                                    <td className='px-4 py-2'>Nama Siswa</td>
                                    <td className='px-4 py-2'>Group</td>
                                    <td className='px-4 py-2'>No Ponsel</td>
                                    <td className='px-4 py-2'>Email</td>
                                    <td className='px-4 py-2 w-20'>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='px-4 py-2 border'>
                                        <Link to={'/show/detail-siswa'} className='bg-green-100 border border-[#169859] rounded-full px-2 shadow hover:shadow-green-500 transition-all duration-200'>23234</Link>
                                    </td>
                                    <td className='px-4 py-2 border'>Asep Kurnia</td>
                                    <td className='px-4 py-2 border'>Tahfidz</td>
                                    <td className='px-4 py-2 border'>08976756566</td>
                                    <td className='px-4 py-2 border'>asepKurnia@gmail.com</td>
                                    <td className='px-4 py-2 border'>
                                        <div className='flex justify-center'>
                                            <button className='text-green-500'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DaftarSiswa