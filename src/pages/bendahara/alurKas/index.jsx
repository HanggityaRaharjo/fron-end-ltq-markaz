import React, { useState } from 'react'
import Layout from '../../../layouts/Layout'

function AlurKas() {
    const [showModal, setShowModal] = useState(false)

    const handleEdit = () => {
        setShowModal(true)
    }

    return (
        <Layout>
            <section className='p-5'>
                <ModalTambah show={showModal} close={setShowModal} />
                <div>
                    <h1 className='font-bold text-2xl'>Transaksi</h1>
                </div>
                <div className='mt-10'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2'>
                            <label htmlFor="">Data</label>
                            <select name="" id="" className='border'>
                                <option value="">5</option>
                                <option value="">10</option>
                                <option value="">20</option>
                                <option value="">25</option>
                            </select>
                        </div>
                        <button
                            onClick={() => handleEdit()}
                            className='bg-black text-white px-4 py-2 rounded-md flex gap-2 active:scale-95 duration-300'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                            </span>tambah</button>
                    </div>
                    <table className='w-full bg-white shadow-lg mt-5'>
                        <thead>
                            <tr className='text-center bg-black text-white'>
                                <td className='py-2 px-2 '>No</td>
                                <td className='py-2 px-5 '>Nama Transaksi</td>
                                <td className='py-2 px-5 '>Kategori Id</td>
                                <td className='py-2 px-5 '>Tanggal</td>
                                <td className='py-2 px-5 '>Pemasukan</td>
                                <td className='py-2 px-5 '>Pengeluaran</td>
                                <td className='py-2 px-5 '>action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='py-2 border text-center'>1</td>
                                <td className='py-2 border text-center'>xasxas</td>
                                <td className='py-2 border text-center'>AB767577</td>
                                <td className='py-2 border text-center'>2022-07-12</td>
                                <td className='py-2 border text-center'>1500000</td>
                                <td className='py-2 border text-center'></td>
                                <td className='py-2 border text-center'>
                                    <div className='flex gap-5 justify-center'>
                                        <button
                                            className='text-blue-500 active:scale-95 duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
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
                            <tr>
                                <td className='py-2 border text-center'>2</td>
                                <td className='py-2 border text-center'>xasxas</td>
                                <td className='py-2 border text-center'>AB767577</td>
                                <td className='py-2 border text-center'>2022-07-12</td>
                                <td className='py-2 border text-center'></td>
                                <td className='py-2 border text-center'>100000</td>
                                <td className='py-2 border text-center'>
                                    <div className='flex gap-5 justify-center'>
                                        <button
                                            onClick={() => handleEdit()}
                                            className='text-blue-500 active:scale-95 duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
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
        <div className={`fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-20 justify-center items-center transition-all duration-500 ${show ? 'top-0' : 'top-[-1000px]'}`}>
            <div className='flex justify-center items-center h-full'>
                <div className='bg-white  px-5 rounded-md p-5'>
                    <h1 className='font-bold text-xl mb-5'>Tambah Data</h1>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='border flex'>
                            <label className='bg-black w-32 text-white py-2 px-2'>Transaksi</label>
                            <input type="text" className='py-2 px-2 border w-full' />
                        </div>
                        <div className='border flex '>
                            <label className='bg-black w-40 text-white py-2 px-2'>Kategori</label>
                            <input type="text" className='py-2 px-2 border w-full' />
                        </div>
                        <div className='border flex col-span-2 '>
                            <label className='bg-black w-40 text-white py-2 px-2'>Tanggall</label>
                            <input type="date" className='py-2 px-2 border w-full' />
                        </div>
                        <div className='border flex col-span-2 '>
                            <label className='bg-black w-40 text-white py-2 px-2'>Pemasukan</label>
                            <input type="number" className='py-2 px-2 border w-full' />
                        </div>
                        <div className='border flex col-span-2 '>
                            <label className='bg-black w-40 text-white py-2 px-2'>Pengeluaran</label>
                            <input type="number" className='py-2 px-2 border w-full' />
                        </div>
                    </div>
                    <div className='flex justify-end gap-2 mt-5'>
                        <button className='bg-black text-white px-4 py-2 rounded-md flex gap-2 active:scale-95 duration-300'>simpan</button>
                        <button
                            onClick={() => close()}
                            className='bg-black text-white px-4 py-2 rounded-md flex gap-2 active:scale-95 duration-300'>batal</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlurKas