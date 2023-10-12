import React, { useState } from 'react'
import Layout from '../../../../../../../layouts/Layout'

function SppPesertaBaru() {
    const [activeTab, setActiveTab] = useState('spp');


    return (
        <Layout>
            <section className='p-5'>
                <div>
                    <h1 className='font-bold text-2xl'>Peserta Baru</h1>
                </div>

                <div className='mt-10 '>
                    <div className='w-[400px] flex gap-2'>
                        <button
                            className={`px-4 py-1 rounded-t-md active:scale-95 duration-200 ${activeTab === 'spp' ? 'bg-[#169859] text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => setActiveTab('spp')}
                        >
                            SPP
                        </button>
                        <button
                            className={`px-4 py-1 rounded-t-md active:scale-95 duration-200 ${activeTab === 'dpp' ? 'bg-[#169859] text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => setActiveTab('dpp')}
                        >
                            DPP
                        </button>
                        <button
                            className={`px-4 py-1  rounded-t-md active:scale-95 duration-200 ${activeTab === 'ziswaf' ? 'bg-[#169859] text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => setActiveTab('ziswaf')}
                        >
                            Ziswaf
                        </button>
                        <button
                            className={`px-4 py-1  rounded-t-md active:scale-95 duration-200 ${activeTab === 'kegiatan' ? 'bg-[#169859] text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => setActiveTab('kegiatan')}
                        >
                            Kegiatan
                        </button>
                        <button
                            className={`px-4 py-1  rounded-t-md active:scale-95 duration-200 ${activeTab === 'belanja' ? 'bg-[#169859] text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => setActiveTab('belanja')}
                        >
                            Belanja
                        </button>
                    </div>
                    <div className='bg-white shadow-lg border'>

                        {activeTab === 'spp' ? (
                            <div className='mt-10 flex flex-col gap-5 p-5'>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-2xl'>Pembayaran SPP</h1>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Nama</label>
                                    <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Nama Tagihan</label>
                                    <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >SPP</label>
                                    <div className='relative'>
                                        <span className='absolute top-1'>Rp.</span>
                                        <input type="number" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none pl-7' />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Jatuh Tempo</label>
                                    <input type="date" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex justify-end gap-5 mt-5">
                                    <button type="submit" className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                                        <span>Submit</span>
                                    </button>
                                    <button className="border border-[#169859] text-[#169859] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                                    >
                                        <span>Cancel</span>
                                    </button>
                                </div>
                            </div>
                        ) : activeTab === 'dpp' ? (
                            <div className='mt-10 flex flex-col gap-5 p-5'>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-2xl'>Pembayaran DPP</h1>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Nama</label>
                                    <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Nama Tagihan</label>
                                    <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >DPP</label>
                                    <div className='relative'>
                                        <span className='absolute top-1'>Rp.</span>
                                        <input type="number" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none pl-7' />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Jatuh Tempo</label>
                                    <input type="date" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex justify-end gap-5 mt-5">
                                    <button type="submit" className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                                        <span>Submit</span>
                                    </button>
                                    <button className="border border-[#169859] text-[#169859] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                                    >
                                        <span>Cancel</span>
                                    </button>
                                </div>
                            </div>
                        ) : activeTab === 'ziswaf' ? (
                            <div className='mt-10 flex flex-col gap-5 p-5'>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-2xl'>Pembayaran SPP</h1>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Nama</label>
                                    <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Nama Tagihan</label>
                                    <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >ZISWAF</label>
                                    <div className='relative'>
                                        <span className='absolute top-1'>Rp.</span>
                                        <input type="number" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none pl-7' />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Jatuh Tempo</label>
                                    <input type="date" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex justify-end gap-5 mt-5">
                                    <button type="submit" className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                                        <span>Submit</span>
                                    </button>
                                    <button className="border border-[#169859] text-[#169859] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                                    >
                                        <span>Cancel</span>
                                    </button>
                                </div>
                            </div>
                        ) : activeTab === 'kegiatan' ? (
                            <div className='mt-10 flex flex-col gap-5 p-5'>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-2xl'>Pembayaran SPP</h1>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Nama</label>
                                    <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Nama Tagihan</label>
                                    <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Kegiatan</label>
                                    <div className='relative'>
                                        <span className='absolute top-1'>Rp.</span>
                                        <input type="number" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none pl-7' />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Jatuh Tempo</label>
                                    <input type="date" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex justify-end gap-5 mt-5">
                                    <button type="submit" className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                                        <span>Submit</span>
                                    </button>
                                    <button className="border border-[#169859] text-[#169859] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                                    >
                                        <span>Cancel</span>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className='mt-10 flex flex-col gap-5 p-5'>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-2xl'>Pembayaran SPP</h1>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Nama</label>
                                    <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Nama Tagihan</label>
                                    <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Belanja</label>
                                    <div className='relative'>
                                        <span className='absolute top-1'>Rp.</span>
                                        <input type="number" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none pl-7' />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-medium" >Jatuh Tempo</label>
                                    <input type="date" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                                </div>
                                <div className="flex justify-end gap-5 mt-5">
                                    <button type="submit" className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                                        <span>Submit</span>
                                    </button>
                                    <button className="border border-[#169859] text-[#169859] p-2 w-40 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                                    >
                                        <span>Cancel</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default SppPesertaBaru