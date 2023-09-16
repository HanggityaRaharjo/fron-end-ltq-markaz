import React from 'react'
import Layout from '../../layouts/Layout'

function BiayaPendidikan() {
    return (
        <Layout>
            <section className='p-5 bg-white shadow-md rounded-md'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Biaya Pendidikan</h1>
                    <hr className='border-black' />
                    <p className='bg-[#5FB68A80] px-5 py-2 rounded-md'>Silahkan pilih biaya pendidikan dibawah ini</p>
                </div>

                <div className='mt-10 flex flex-col gap-2 justify-center px-[40px]'>
                    <div className=' w-full flex gap-4'>
                        <label className='w-[150px] px-4 py-2'>Pendaftaran</label>
                        <select name="" id="" className='w-8/12 border-b-2 border-gray-300 focus:border-[#169859] outline-none rounded-md px-4 py-2'>
                            <option value="">Pilih Menu</option>
                            <option value="">100.000</option>
                            <option value="">150.000</option>
                            <option value="">200.000</option>
                            <option value="">500.000</option>
                        </select>
                    </div>
                    <div className=' w-full flex gap-4 items-center'>
                        <label className='w-[150px] px-4 py-2'>Pemangunan</label>
                        <select name="" id="" className='w-8/12 border-b-2 border-gray-300 focus:border-[#169859] outline-none rounded-md px-4 py-2'>
                            <option value="">Pilih Menu</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        <span>/ Semester</span>
                    </div>
                    <div className=' w-full flex gap-4 items-center'>
                        <label className='w-[150px] px-4 py-2'>Kegiatan</label>
                        <select name="" id="" className='w-8/12 border-b-2 border-gray-300 focus:border-[#169859] outline-none rounded-md px-4 py-2'>
                            <option value="">Pilih Menu</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        <span>/ Semester</span>
                    </div>
                    <div className=' w-full flex gap-4 items-center'>
                        <label className='w-[150px] px-4 py-2'>SPP</label>
                        <select name="" id="" className='w-8/12 border-b-2 border-gray-300 focus:border-[#169859] outline-none rounded-md px-4 py-2'>
                            <option value="">Pilih Menu</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        <span>/ Semester</span>
                    </div>
                </div>

                <div className="flex justify-end mt-5">
                    <button className="px-4 py-1 bg-[#169859] text-white rounded-md active:scale-95 duration-300">Lanjut</button>
                </div>
            </section>
        </Layout>
    )
}

export default BiayaPendidikan