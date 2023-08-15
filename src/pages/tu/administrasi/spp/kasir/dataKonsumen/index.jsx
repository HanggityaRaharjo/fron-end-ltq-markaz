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
                                name="spp"
                                type="number"
                                class="w-full border border-[#169859] rounded-r-md p-2 h-10 rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex  border">
                            <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-40 flex justify-center items-center ">
                                Barang
                            </label>
                            <input
                                name="spp"
                                type="number"
                                class="w-full border border-[#169859] rounded-r-md p-2 h-10 rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex  border">
                            <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-40 flex justify-center items-center ">
                                Jumlah
                            </label>
                            <input
                                name="spp"
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

                <div className='flex gap-5 mt-5'>
                    <div className='bg-white shadow-lg w-1/2 max-h-[400px] overflow-y-scroll'>
                        <table className='w-full'>
                            <thead>
                                <tr className='bg-black text-white text-center font-bold sticky top-0'>
                                    <td className='p-2 w-[40px]'>No</td>
                                    <td className='p-2 w-[200px]'>Nama Konsumen</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>ujang</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='w-1/2 h-auto flex flex-col gap-5'>
                        <div className='w-full bg-white shadow-lg  max-h-[200px] overflow-y-scroll'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-black text-white text-center sticky top-0'>
                                        <td className='p-2 w-[50px]'>No</td>
                                        <td className='p-2 '>Barang</td>
                                        <td className='p-2 w-[100px]'>Jumlah</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center'>
                                        <td className='p-2 border'>1</td>
                                        <td className='p-2 border'>asoci</td>
                                        <td className='p-2 border'>32</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td className='p-2 border'>2</td>
                                        <td className='p-2 border'>asoci</td>
                                        <td className='p-2 border'>32</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td className='p-2 border'>3</td>
                                        <td className='p-2 border'>asoci</td>
                                        <td className='p-2 border'>32</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td className='p-2 border'>4</td>
                                        <td className='p-2 border'>asoci</td>
                                        <td className='p-2 border'>32</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td className='p-2 border'>5</td>
                                        <td className='p-2 border'>asoci</td>
                                        <td className='p-2 border'>32</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className=' bg-white shadow-lg  max-h-[200px] overflow-y-scroll'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-black text-white text-center'>
                                        <td></td>
                                        <td className='p-2'>pembayaran</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center'>
                                        <td className='p-2 border font-bold'>total</td>
                                        <td className='p-2 border'>asoci</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default DataKonsumen