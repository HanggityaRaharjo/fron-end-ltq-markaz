import React from 'react'
import Layout from '../../../../../../layouts/Layout'
import { Link } from 'react-router-dom'


function TabelDaftarUlang() {
    return (
        <Layout>
            <section className='p-5'>
                <div >
                    <h1 className='font-bold text-2xl'>Pembayaran Peserta Baru</h1>
                </div>
                <div className='flex justify-end items-center mt-10'>
                    <Link to='/form/spp-daftar-ulang' className="bg-black text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                        <span>Tambah</span>
                    </Link>
                </div>
                {/* Tabel SPP */}
                <div className='mt-10 bg-white p-5 shadow-md'>
                    <h1 className='font-bold text-2xl'>Tabel SPP</h1>
                    <div className='mt-5 w-full '>
                        <table className='w-full mt-5'>
                            <thead>
                                <tr className='bg-black text-white'>
                                    <td className='py-2 px-5 text-center'>No</td>
                                    <td className='py-2 text-center px-20'>Nama</td>
                                    <td className='py-2 text-center px-5'>Nama Tagihan</td>
                                    <td className='py-2 text-center px-5'> SPP</td>
                                    <td className='py-2 text-center px-5'>Jatuh Tempo</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='py-2 px-2 text-center border'>1</td>
                                    <td className='py-2 px-2  border'>Bagus subagja</td>
                                    <td className='py-2 px-2 text-center border'>Talaqqi</td>
                                    <td className='py-2 px-2 text-center border'>Rp. 150.000</td>
                                    <td className='py-2 px-2 text-center border'>12/11/2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Tabel DPP */}
                {/* <div className=' mt-20'>
                    <h1 className='font-bold text-2xl'>Tabel DPP</h1>
                    <div className='mt-5 w-full bg-white shadow-lg'>
                        <table className='w-full mt-5'>
                            <thead>
                                <tr className='bg-black text-white'>
                                    <td className='py-2 px-5 text-center'>No</td>
                                    <td className='py-2 text-center px-20'>Nama</td>
                                    <td className='py-2 text-center px-5'>Nama Tagihan</td>
                                    <td className='py-2 text-center px-5'> SPP</td>
                                    <td className='py-2 text-center px-5'>Jatuh Tempo</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='py-2 px-2 text-center border'>1</td>
                                    <td className='py-2 px-2  border'>Bagus subagja</td>
                                    <td className='py-2 px-2 text-center border'>Talaqqi</td>
                                    <td className='py-2 px-2 text-center border'>Rp. 150.000</td>
                                    <td className='py-2 px-2 text-center border'>12/11/2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}

                {/* Tabel ZISWAF */}
                <div className='mt-20 bg-white p-5 shadow-md'>
                    <h1 className='font-bold text-2xl'>Tabel ZISWAF</h1>
                    <div className='mt-5 w-full'>
                        <table className='w-full mt-5'>
                            <thead>
                                <tr className='bg-black text-white'>
                                    <td className='py-2 px-5 text-center'>No</td>
                                    <td className='py-2 text-center px-20'>Nama</td>
                                    <td className='py-2 text-center px-5'>Nama Tagihan</td>
                                    <td className='py-2 text-center px-5'> SPP</td>
                                    <td className='py-2 text-center px-5'>Jatuh Tempo</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='py-2 px-2 text-center border'>1</td>
                                    <td className='py-2 px-2  border'>Bagus subagja</td>
                                    <td className='py-2 px-2 text-center border'>Talaqqi</td>
                                    <td className='py-2 px-2 text-center border'>Rp. 150.000</td>
                                    <td className='py-2 px-2 text-center border'>12/11/2023</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='mt-20 bg-white p-5 shadow-md'>
                    <h1 className='font-bold text-2xl'>Tabel Kegiatan</h1>
                    <table className='w-full mt-5'>
                        <thead>
                            <tr className='bg-black text-white'>
                                <td className='py-2 px-5 text-center'>No</td>
                                <td className='py-2 text-center px-10'>Nama Kegiatan</td>
                                <td className='py-2 text-center px-5'>Tagihan</td>
                                <td className='py-2 text-center px-5'>Jatuh Tempo</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='py-2 px-2  text-center border'>1</td>
                                <td className='py-2 px-2   border'>Kajian Keluarga Besar</td>
                                <td className='py-2 px-2  text-center border'>Talaqqi</td>
                                <td className='py-2 px-2  text-center border'>12/11/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}

export default TabelDaftarUlang