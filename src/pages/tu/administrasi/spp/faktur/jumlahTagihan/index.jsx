import React from 'react'
import Layout from '../../../../../../layouts/Layout'
import logo from "../../../../../../assets/logo/LTQ.png"

function JumlahTagihan() {
    return (
        <Layout>
            <section className='p-5'>
                <div className='w-full border bg-white shadow-lg py-10'>
                    <div className='flex justify-between items-center px-20'>
                        <div className='w-[200px] h-[200px]'>
                            <img src={logo} alt="" className='h-full w-full scale-150' />
                        </div>
                        <div>
                            <h1 className='font-semibold text-xl text-right'>Invoice</h1>
                            <div className='flex flex-col mt-2'>
                                <label className='flex justify-between gap-10 text-[16px]'>Tanggal  <span>15-02-2024</span></label>
                                <label className='flex justify-between gap-10 text-[16px]'>Tgl. Jatuh Tempo  <span>15-02-2024</span></label>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='flex'>
                            <div className='w-1/2 p-5'>
                                <div>
                                    <h1 className='font-bold text-xl'>Info Perusahaan</h1>
                                    <div className='bg-black w-full h-[2px] mt-5' />
                                </div>
                                <div className='mt-5'>
                                    <h1 className='font-bold text-xl text-green-600'>LTQ</h1>
                                    <div className='mt-2'>
                                        <p>Alamat:</p>
                                        <p>Kecamatan Baleendah, Kab. Bandung</p>
                                        <p>Jawa Barat</p>
                                        <p>Telp: 098898899899</p>
                                        <p>Email: ltq@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2 p-5'>
                                <div>
                                    <h1 className='font-bold text-xl'>Tagihan Untuk</h1>
                                    <div className='bg-black w-full h-[2px] mt-5' />
                                </div>
                                <div className='mt-5'>
                                    <h1 className='font-bold text-xl text-green-600'>agus </h1>
                                    <div className='mt-2'>
                                        <p>Alamat:</p>
                                        <p>Kecamatan Baleendah, Kab. Bandung</p>
                                        <p>Jawa Barat</p>
                                        <p>Telp: 098898899899</p>
                                        <p>Email: ltq@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 mt-5'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-black text-white'>
                                        <td className='py-2 px-2 text-center'>No</td>
                                        <td className='py-2 px-10 text-center'>Produk</td>
                                        <td className='py-2 px-5 text-center'>Deskripsi</td>
                                        <td className='py-2 px-5 text-center'>Qty</td>
                                        <td className='py-2 px-5 text-center'>Harga</td>
                                        <td className='py-2 px-5 text-center'>Jumlah</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='py-2 text-center border'>1</td>
                                        <td className='py-2 text-center border'>Baju</td>
                                        <td className='py-2 text-center border'>ckjabsck</td>
                                        <td className='py-2 text-center border'>3</td>
                                        <td className='py-2 text-center border'>20000</td>
                                        <td className='py-2 text-center border'>60000</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 text-center border'>1</td>
                                        <td className='py-2 text-center border'>Baju</td>
                                        <td className='py-2 text-center border'>ckjabsck</td>
                                        <td className='py-2 text-center border'>3</td>
                                        <td className='py-2 text-center border'>20000</td>
                                        <td className='py-2 text-center border'>60000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className=' flex justify-end w-full mt-5 p-5'>
                            <table>
                                <tr>
                                    <td className='py-2 px-10 text-right font-semibold'>Subtotal</td>
                                    <td className='py-2 px-10'>Rp. 14000</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-10 text-right font-semibold'>Total Diskon</td>
                                    <td className='py-2 px-10'>Rp. 0.00</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-10 text-right font-semibold'>Total</td>
                                    <td className='py-2 px-10'>Rp. 14000</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-10 text-right font-semibold'>Lunas</td>
                                    <td className='py-2 px-10'>Rp. 14000</td>
                                </tr>
                                <tr>
                                    <td className='py-2 px-10 text-right font-semibold'>Jumlah Tertagih</td>
                                    <td className='py-2 px-10'>Rp. 0.00</td>
                                </tr>
                            </table>
                        </div>

                        <div className='flex p-5'>
                            <div className='w-1/2'>
                                <h1 className='font-bold text-xl'>Keterangan</h1>
                                <div className='bg-black w-full h-[2px] mt-5' />
                                <div className='mt-5'>
                                    <h1>Pembayaran bisa melalui :</h1>
                                    <h1 className='py-2 font-bold'>Bank Transfer</h1>
                                    <p>BRI : <span>967865867</span></p>
                                    <h1 className='py-2 font-bold'>E-Wallet</h1>
                                    <p>Dana : <span>967865867</span></p>
                                    <p>Semua rekening dan e-wallet atas nama <span className='font-bold'>xxxx xxxxx xxx</span></p>
                                </div>
                            </div>
                            <div className='w-1/2 flex justify-center'>
                                <div className='flex flex-col items-center'>
                                    <h1 className='font-bold'>
                                        15 Agt, 2023
                                    </h1>
                                    <div className='h-[200px] w-[200px] bg-slate-200 mt-5'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default JumlahTagihan