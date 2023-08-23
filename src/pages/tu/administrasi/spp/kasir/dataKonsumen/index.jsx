import React from 'react'
import Layout from '../../../../../../layouts/Layout'

function DataKonsumen() {
    return (
        <Layout>
            <section className='p-5 font-poppins'>
                <div>
                    <h1 className='font-bold text-2xl mb-10'>Konsumen</h1>
                </div>

                <div className='bg-white shadow-lg p-2'>
                    <div className='flex gap-2'>
                        <div className="flex  border">
                            <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-40 flex justify-center items-center ">
                                Nama
                            </label>
                            <input
                                name="nama"
                                type="text"
                                class="w-full border border-[#169859] rounded-r-md p-2 h-10 rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex  border">
                            <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-40 flex justify-center items-center ">
                                Barang
                            </label>
                            <input
                                name="nama_barang"
                                type="text"
                                class="w-full border border-[#169859] rounded-r-md p-2 h-10 rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex  border">
                            <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-40 flex justify-center items-center ">
                                Stock
                            </label>
                            <input
                                name="stock"
                                type="number"
                                class="w-full border border-[#169859] rounded-r-md p-2 h-10 rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-5 mt-5">
                        <button type="submit" className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                            <span>Tambah</span>
                        </button>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='bg-white shadow-lg w-full  max-h-[400px] overflow-y-scroll'>
                        <table className='w-full border'>
                            <thead>
                                <tr className='bg-black text-white text-center font-bold '>
                                    <td className='p-2 w-[50px]'>No</td>
                                    <td className='px-2'>Nama Konsumen</td>
                                    <td className='w-[400px]'>
                                        Barang
                                        <tr className='flex'>
                                            <td className='p-2 w-1/2'>Harga</td>
                                            <td className='p-2 w-1/2'>Stock</td>
                                        </tr>
                                    </td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                    <td className='border'>
                                        <tr className='flex text-center'>
                                            <td className='p-2 w-full border-r'>200.000</td>
                                            <td className='p-2 w-full'>50</td>
                                        </tr>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                    <td className='border'>
                                        <tr className='flex text-center'>
                                            <td className='p-2 w-full border-r'>200.000</td>
                                            <td className='p-2 w-full'>50</td>
                                        </tr>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                    <td className='border'>
                                        <tr className='flex text-center'>
                                            <td className='p-2 w-full border-r'>200.000</td>
                                            <td className='p-2 w-full'>50</td>
                                        </tr>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='bg-white mt-5 shadow-lg w-full max-h-[400px] overflow-y-scroll'>
                        <table className='w-full'>
                            <thead>
                                <tr className='bg-black text-white text-center font-bold sticky top-0'>
                                    <td className='p-2 w-[50px]'>No</td>
                                    <td className='px-2'>Nama Barang</td>
                                    <td className='px-2'>Jumlah Barang</td>
                                    <td className='px-2'>pembayaran</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                    <td className='p-2 border text-center '>baju</td>
                                    <td className='p-2 border text-center '>
                                        <div className='flex justify-center gap-5 '>
                                            <button
                                                onClick={() => input()}
                                                className='text-blue-500 active:scale-95 transition duration-150'>
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
            </section>
        </Layout>
    )
}

export default DataKonsumen