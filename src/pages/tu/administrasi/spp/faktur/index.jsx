import React, { useState } from 'react'
import Layout from '../../../../../layouts/Layout'
import { Link } from 'react-router-dom'

function Faktur() {
    const [showModal, setShowModal] = useState(false)

    const HandleTambah = () => {
        setShowModal(true)
    }


    return (
        <Layout>

            <ModalTambah show={showModal} close={setShowModal} />
            <section className='p-5'>
                <div>
                    <h1 className='text-2xl font-bold'>E-faktur</h1>
                </div>
                <div className='flex justify-end mt-10'>
                    <button onClick={() => HandleTambah()} type='submit' className="bg-black text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                        <span>Tambah</span>
                    </button>
                </div>
                <div className='bg-white mt-5 shadow-lg'>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-black text-white text-center'>
                                <td className='py-2 px-2'>No</td>
                                <td className='py-2 px-5'>Nama Barang</td>
                                <td className='py-2 px-2'>Jumlah Tagihan</td>
                                <td className='py-2 px-2'>Jumlah Dibayar</td>
                                <td className='py-2 px-2'>Kekurangan</td>
                                <td className='py-2 px-2'>action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='py-2 px-2 text-center'>1</td>
                                <td className='py-2 px-2 text-center'>Baju</td>
                                <td className='py-2 px-2 text-center'>Rp. 340.000</td>
                                <td className='py-2 px-2 text-center'>Rp. 340.000</td>
                                <td className='py-2 px-2 text-center'>Lorem ipsum dolor</td>
                                <td className='py-2 px-2 text-center'>
                                    <div className='flex justify-between'>
                                        <button className='text-blue-500 active:scale-95 duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                        <button className=' active:scale-95 duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>

                                        </button>
                                        <button className='text-red-500 active:scale-95 duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}

const ModalTambah = ({ show, close }) => {
    return (
        <div
            style={{ display: show ? "flex" : "none" }}
            className='fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-40 justify-center items-center'>
            <div className='flex justify-center items-center h-full'>
                <div className='bg-white rounded-md px-10 py-10 flex flex-col gap-5'>
                    <div className='flex items-center h-10'>
                        <label className='w-48 bg-black text-white p-2 h-full'>Nama Barang</label>
                        <input type="text" className='border w-full p-2 h-full' />
                    </div>
                    <div className='flex items-center h-10 '>
                        <label className='w-48 bg-black text-white p-2 h-full'>Tagihan</label>
                        <div className='relative w-full h-full'>
                            <span className='absolute top-2 left-2'>Rp.</span>
                            <input type="number" className='border w-full p-2 px-10 h-full' />
                        </div>
                    </div>
                    <div className='flex items-center h-10 '>
                        <label className='w-48 bg-black text-white p-2 h-full'>Bayar</label>
                        <div className='relative w-full h-full'>
                            <span className='absolute top-2 left-2'>Rp.</span>
                            <input type="number" className='border w-full p-2 px-10 h-full' />
                        </div>
                    </div>
                    <div className=''>
                        <label className=' bg-black text-white p-2 h-full'>Kekurangan</label>
                        <input type="text" className='border w-full p-2 h-full' />
                    </div>
                    <div className='flex gap-2 justify-end mt-5'>
                        <button
                            type='submit' className="bg-black text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                            <span>simpan</span>
                        </button>
                        <button
                            onClick={() => close()}
                            type='submit' className="bg-black text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                            <span>close</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faktur