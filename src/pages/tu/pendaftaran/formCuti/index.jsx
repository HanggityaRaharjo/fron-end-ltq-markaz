import React from 'react'
import Layout from '../../../../layouts/Layout'

function FormCutiTu() {
    return (
        <Layout>
            <section className="p-5">
                <div className='bg-white p-5 shadow-md rounded-md font-poppins text-gray-500 border-l-2 border-[#169859]'>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-2xl">Formulir Pengajuan Cuti </h1>
                        <hr className="border-black" />
                        {/* <p className="bg-[#5FB68A80] px-5 py-2 rounded-md">Ujian dibagi menjadi 2 bagian, yaitu Ujian Teori & Ujian Praktek</p> */}
                    </div>

                    <div className="mt-10 flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label className="font-medium" >Mulai Cuti</label>
                            <input type="date" className='h-10 border-b-2 focus:border-[#169859]  w-1/2 outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Sampai dengan</label>
                            <input type="date" className='h-10 border-b-2 focus:border-[#169859]  w-1/2 outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label>Alasan Cuti</label>
                            <input type="area" placeholder="Alasan cuti" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                    </div>

                    <div className="flex justify-end mt-10">
                        <button className="h-10bg-[#169859] text-white rounded-md active:scale-95 duration-300">Simpan</button>
                    </div>
                </div>
                <div className='mt-10 flex justify-end gap-5'>
                    <button className='bg-[#169859] text-white px-4 py-2 rounded-md active:scale-95 duration-300'>Kembali</button>
                    <button className='bg-[#169859] text-white px-4 py-2 rounded-md active:scale-95 duration-300'>Simpan</button>
                </div>
            </section>
        </Layout>
    )
}

export default FormCutiTu