import React from 'react'
import Layout from '../../layouts/Layout'


function KelasSiswa() {
    return (
        <Layout>
            <section className='p-5 bg-white shadow-md rounded-md'>
                <div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-2xl">Kelas</h1>
                        <hr className="border-black" />
                        {/* <p className="bg-[#5FB68A80] px-5 py-2 rounded-md">Ujian dibagi menjadi 2 bagian, yaitu Ujian Teori & Ujian Praktek</p> */}
                    </div>

                    <div className='border border-[#5FB68A80] mt-10 flex flex-col gap-2 p-5 rounded-md'>
                        <div className='flex'>
                            <label className='w-40 font-semibold'>No ID</label>
                            <p>8867868</p>
                        </div>
                        <hr className='border-[#5FB68A80]' />
                        <div className='flex'>
                            <label className='w-40 font-semibold'>Nama</label>
                            <p>Aceng firmansyah</p>
                        </div>
                    </div>

                    <div className='mt-10 p-5 flex flex-col gap-2 border border-[#5FB68A80] rounded-md'>
                        <h1 className='font-bold mb-5'>informasi Kelas</h1>
                        <div className='flex'>
                            <label className='w-40 font-semibold'>Kelas</label>
                            <p className='w-full'>2A</p>
                        </div>
                        <hr className='border-[#5FB68A80]' />
                        <div className='flex'>
                            <label className='w-40 font-semibold'>Level</label>
                            <p className='w-full'>Tahsin 2</p>
                        </div>
                        <hr className='border-[#5FB68A80]' />
                        <div className='flex'>
                            <label className='w-40 font-semibold'>Pengajar</label>
                            <p className='w-full'>Ust. Tarkim Mutasimbillah, Lc. Alhafizh</p>
                        </div>
                        <hr className='border-[#5FB68A80]' />
                        <div className='flex'>
                            <label className='w-40 font-semibold'>Waktu</label>
                            <p className='w-full'>Sabtu, Pukul 07:00 - 09:00 WIB</p>
                        </div>
                        <hr className='border-[#5FB68A80]' />
                        <div className='flex'>
                            <label className='w-40 font-semibold'>Lokasi</label>
                            <p className='w-full'>Masjid</p>
                        </div>
                    </div>

                    <div className='mt-10 p-5  flex flex-col gap-5 border border-[#5FB68A80]'>
                        <h1 className='font-bold'>Informasi Absensi</h1>
                        <div className='flex'>
                            <label className='w-40 font-semibold'>Kelas</label>
                            <div className='grid grid-cols-4 md:grid-cols-5 gap-10'>
                                <div className='h-5 w-5 border border-black flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-7 h-7 text-[#5FB68A80]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <div className='h-5 w-5 border border-black flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-6 h-6 text-red-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                                <div className='h-5 w-5 border border-black'></div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <h1 className='font-bold text-xl'>5%</h1>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default KelasSiswa