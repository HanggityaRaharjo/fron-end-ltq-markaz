import React, { useState } from 'react'
import Layout from '../../../../../../layouts/Layout'

function DataKonsumen() {
    const [isShowModal, setIsShowModal] = useState(false)
    const [isShowModalEdit, setIsShowModalEdit] = useState(false)

    const HandleTambah = () => {
        setIsShowModal(true)
    }

    const HandleEdit = () => {
        setIsShowModalEdit(true)
    }

    return (
        <Layout>
            <section className='p-5 font-poppins'>

                <ModalTambah show={isShowModal} close={setIsShowModal} />
                <ModalEdit show={isShowModalEdit} close={setIsShowModalEdit} />
                <div>
                    <h1 className='font-bold text-2xl mb-10'>Konsumen</h1>
                </div>
                <div className="flex justify-end gap-5 mt-5">
                    <button
                        onClick={() => HandleTambah()}
                        type="submit" className="bg-black text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                        <span>Tambah</span>
                    </button>
                </div>

                <div className='mt-5'>
                    <div className='bg-white shadow-lg w-full  max-h-[400px] overflow-y-scroll'>
                        <table className='w-full border'>
                            <thead>
                                <tr className='bg-black text-white text-center font-bold '>
                                    <td className='p-2 w-[50px]'>No</td>
                                    <td className='px-2'>Nama Konsumen</td>
                                    <td className='px-2'>Tgl</td>
                                    <td className='px-2'>Nama Barang</td>
                                    <td className='px-2'>Jumlah Barang</td>
                                    <td className='px-2'>Total</td>
                                    <td className='px-2'>action</td>
                                </tr>
                            </thead>
                            <tbody className='border-collapse'>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                    <td className='p-2 border '>12-12-2023</td>
                                    <td className='p-2 border '>pulpen</td>
                                    <td className='p-2 border '>4</td>
                                    <td className='p-2 border '>50000</td>
                                    <td className='p-2 border'>
                                        <div className='flex justify-center gap-5 '>
                                            <button
                                                onClick={() => HandleEdit()}
                                                className='text-blue-500 active:scale-95 transition duration-150'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                            <button className='text-red-500 active:scale-95 transition duration-150 '>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                    <td className='p-2 border '>12-12-2023</td>
                                    <td className='p-2 border '>pulpen</td>
                                    <td className='p-2 border '>4</td>
                                    <td className='p-2 border '>50000</td>
                                    <td className='p-2 border'>
                                        <div className='flex justify-center gap-5 '>
                                            <button
                                                className='text-blue-500 active:scale-95 transition duration-150'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                            <button className='text-red-500 active:scale-95 transition duration-150 '>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border'>
                                    <td className='p-2'></td>
                                    <td className='p-2'>jumlah</td>
                                    <td className='p-2'></td>
                                    <td className='p-2'></td>
                                    <td className='p-2'></td>
                                    <td className='p-2'>100000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </Layout >
    )
}

const ModalTambah = ({ show, close }) => {
    return (
        <div className={`fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-20 justify-center items-center transition-all duration-500 ${show ? 'top-0' : 'top-[-1000px]'}`}>
            <div className='flex justify-center items-center h-full'>
                <div className='bg-white py-5 w-[500px] p-5 rounded-md'>
                    <div>
                        <h1 className='py-4 font-bold text-xl'>Tambah Data</h1>
                        <div className="flex flex-col">
                            <label className="font-medium" >Nama Konsumen</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Tanggal</label>
                            <input type="date" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className='py-5 flex flex-col gap-5'>
                            <h1 className='py-2 font-bold text-xl'>Barang</h1>
                            <div className="flex flex-col">
                                <label className="font-medium" >Nama Barang</label>
                                <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-medium" >Jumlah</label>
                                <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-medium" >Total</label>
                                <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                            </div>
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
const ModalEdit = ({ show, close }) => {
    return (
        <div className={`fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-20 justify-center items-center transition-all duration-500 ${show ? 'top-0' : 'top-[-1000px]'}`}>
            <div className='flex justify-center items-center h-full'>
                <div className='bg-white py-5 w-[400px] p-5 rounded-md'>
                    <div>
                        <h1 className='py-2 font-bold text-xl'>Tambah Data</h1>
                        <div className='border flex'>
                            <label className='bg-black w-32 text-white py-2 px-2'>Konsumen</label>
                            <input type="text" className='py-2 px-2 border w-full' />
                        </div>
                        <div className='border flex pt-2'>
                            <label className='bg-black w-32 text-white py-2 px-2'>Tanggal</label>
                            <input type="date" className='py-2 px-2 border w-full' />
                        </div>
                        <div className='py-5 flex flex-col gap-5'>
                            <h1 className='py-2 font-bold text-xl'>Barang</h1>
                            <div className='border flex'>
                                <label className='bg-black w-32 text-white py-2 px-2'>Nama</label>
                                <input type="text" className='py-2 px-2 border w-full' />
                            </div>
                            <div className='border flex'>
                                <label className='bg-black w-32 text-white py-2 px-2'>Jumlah</label>
                                <input type="text" className='py-2 px-2 border w-full' />
                            </div>
                            <div className='border flex'>
                                <label className='bg-black w-32 text-white py-2 px-2'>Total</label>
                                <input type="text" className='py-2 px-2 border w-full' />
                            </div>
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

export default DataKonsumen