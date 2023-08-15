import React, { useState } from 'react'
import Layout from '../../../../../../layouts/Layout'

function SppPesertaBaru() {
    const [activeTab, setActiveTab] = useState('spp');


    return (
        <Layout>
            <section className='p-5'>
                <div>
                    <h1 className='font-bold text-2xl'>Pembayaran SPP</h1>
                </div>

                <div className='mt-10 '>
                    <div className='w-[400px] flex  gap-2'>
                        <button
                            className={`px-4 py-1 mr-2 rounded-t-md ${activeTab === 'spp' ? 'bg-[#169859] text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => setActiveTab('spp')}
                        >
                            SPP
                        </button>
                        <button
                            className={`px-4 py-1 mr-2  rounded-t-md ${activeTab === 'dpp' ? 'bg-[#169859] text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => setActiveTab('dpp')}
                        >
                            DPP
                        </button>
                        <button
                            className={`px-4 py-1  rounded-t-md ${activeTab === 'ziswaf' ? 'bg-[#169859] text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => setActiveTab('ziswaf')}
                        >
                            Ziswaf
                        </button>
                    </div>
                    <div className='bg-white shadow-lg border'>

                        {activeTab === 'spp' ? (
                            <div className='mt-10 flex flex-col gap-5 p-5'>
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
                                        Nama Tagihan
                                    </label>
                                    <input
                                        name="spp"
                                        type="number"
                                        class="w-full border border-[#169859] rounded-r-md p-2 h-10 rounded-tl-none"
                                        placeholder="Type here.."
                                    />
                                </div>
                                <div className="flex border">
                                    <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-40 flex justify-center items-center ">
                                        SPP
                                    </label>
                                    <div class="relative w-full">
                                        <span class="absolute left-3 top-1 text-gray-500">Rp</span>
                                        <input
                                            name="spp"
                                            type="number"
                                            class="w-full border border-[#169859] rounded-r-md px-14 h-10 rounded-tl-none"
                                            placeholder="Type here.."
                                        />
                                    </div>
                                </div>
                                <div className="flex  border">
                                    <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-40 flex justify-center items-center ">
                                        Jatuh Tempo
                                    </label>
                                    <input
                                        name="spp"
                                        type="date"
                                        class="w-full border border-[#169859] rounded-r-md p-2 h-10 rounded-tl-none"
                                        placeholder="Type here.."
                                    />
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
                                        Nama Tagihan
                                    </label>
                                    <input
                                        name="spp"
                                        type="number"
                                        class="w-full border border-[#169859] rounded-r-md p-2 h-10 rounded-tl-none"
                                        placeholder="Type here.."
                                    />
                                </div>
                                <div className="flex border">
                                    <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-40 flex justify-center items-center ">
                                        DPP
                                    </label>
                                    <div class="relative w-full">
                                        <span class="absolute left-3 top-1 text-gray-500">Rp</span>
                                        <input
                                            name="spp"
                                            type="number"
                                            class="w-full border border-[#169859] rounded-r-md px-14 h-10 rounded-tl-none"
                                            placeholder="Type here.."
                                        />
                                    </div>
                                </div>
                                <div className="flex  border">
                                    <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-40 flex justify-center items-center ">
                                        Jatuh Tempo
                                    </label>
                                    <input
                                        name="spp"
                                        type="date"
                                        class="w-full border border-[#169859] rounded-r-md p-2 h-10 rounded-tl-none"
                                        placeholder="Type here.."
                                    />
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
                                        Nama Tagihan
                                    </label>
                                    <input
                                        name="spp"
                                        type="number"
                                        class="w-full border border-[#169859] rounded-r-md p-2 h-10 rounded-tl-none"
                                        placeholder="Type here.."
                                    />
                                </div>
                                <div className="flex border">
                                    <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-40 flex justify-center items-center ">
                                        Ziswaf
                                    </label>
                                    <div class="relative w-full">
                                        <span class="absolute left-3 top-1 text-gray-500">Rp</span>
                                        <input
                                            name="spp"
                                            type="number"
                                            class="w-full border border-[#169859] rounded-r-md px-14 h-10 rounded-tl-none"
                                            placeholder="Type here.."
                                        />
                                    </div>
                                </div>
                                <div className="flex  border">
                                    <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-40 flex justify-center items-center ">
                                        Jatuh Tempo
                                    </label>
                                    <input
                                        name="spp"
                                        type="date"
                                        class="w-full border border-[#169859] rounded-r-md p-2 h-10 rounded-tl-none"
                                        placeholder="Type here.."
                                    />
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




                {/* <div className='mt-10 flex gap-5'>
                    <div className="flex w-1/2 border">
                        <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-28 flex justify-center items-center ">
                            SPP
                        </label>
                        <div class="relative w-full">
                            <span class="absolute left-3 top-1 text-gray-500">Rp</span>
                            <input
                                name="spp"
                                type="number"
                                class="w-full border border-[#169859] rounded-r-md px-14 h-10 rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2">
                        <label className="bg-[#169859] text-[#f3faf6] rounded-l-md text-center w-28 flex justify-center items-center ">
                            DPP
                        </label>
                        <div class="relative w-full">
                            <span class="absolute left-3 top-1 text-gray-500">Rp.</span>
                            <input
                                name="dpp"
                                type="number"
                                class="w-full border border-[#169859] rounded-r-md px-14 h-10 rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                    </div>
                </div> */}
            </section>
        </Layout>
    )
}

export default SppPesertaBaru