import React from 'react'
import Layout from '../../../../../../layouts/Layout'
import logo from "../../../../../../assets/logo/LTQ.png"

function JumlahTagihan() {
    return (
        <Layout>
            <section className='p-5'>
                <div className='flex justify-end py-4'>
                    <button className='flex gap-2 bg-black text-white px-4 py-2 rounded-md active:scale-95 duration-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                        </svg>
                        <span>Print</span>
                    </button>
                </div>
                <div className=''>
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
                </div>
            </section>
        </Layout>
    )
}

export default JumlahTagihan