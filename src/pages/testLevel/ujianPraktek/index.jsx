import React, { useState } from 'react'
import Layout from '../../../layouts/Layout'


function UjianPraktek() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    return (
        <Layout>
            <section className='p-5 bg-white shadow-md rounded-md'>
                <div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-2xl">Test Ujian Praktek</h1>
                        <hr className="border-black" />
                        <p className="bg-[#5FB68A80] px-5 py-2 rounded-md">Bacalah Surat Maryam ayat 1 s.d 10 (Jika sudah mampu membaca Alquran)</p>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <div className='w-[360px] h-[220px] border flex justify-center items-center rounded-md bg-gray-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <div className='flex gap-5'>
                            <label htmlFor="file-upload" className='w-40 py-2 border bg-[#AEDAC4] text-center rounded-md active:scale-95 duration-300 cursor-pointer'>
                                Upload file
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept="audio/*"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </label>
                            <button className='w-40 py-2 border bg-[#AEDAC4] rounded-md active:scale-95 duration-300'>Rekam</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-10">
                    <button className="px-4 py-1 bg-[#169859] text-white rounded-md active:scale-95 duration-300">Simpan</button>
                </div>
            </section>
        </Layout>
    )
}

export default UjianPraktek