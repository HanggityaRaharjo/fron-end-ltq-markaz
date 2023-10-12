import React from 'react'
import Layout from '../../../../layouts/Layout'
import PieChart from '../../../../components/ChartPie'

function DetailSiswa() {
    return (
        <Layout>
            <div className='p-5'>
                <div className='flex flex-col gap-5'>
                    <div className="flex flex-col gap-2 mb-5">
                        <h1 className="font-bold text-xl">Detail Siswa</h1>
                        <hr className="border-black" />
                    </div>
                    <div className='flex justify-center'>
                        <label className='bg-[#169859] px-4 py-2 rounded-l-full text-white font-medium'>Siswa</label>
                        <div className='relative w-[400px] '>
                            <input type="text" className='px-2 border outline-none h-full w-full rounded-r-full ' />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-2 right-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5 bg-white '>
                        <div className='p-5 rounded-md flex flex-col gap-2 w-[500px]'>
                            <div className='flex gap-2'>
                                <label className='text-xs text-gray-500'>No. Id : <span className='font-medium text-black'>342352</span></label>
                                <div className='border border-gray-500'></div>
                                <label className='text-xs text-gray-500'>Daftar : <span className='font-medium text-black'>10 oktober 2020</span></label>
                                <div className='border border-gray-500'></div>
                                <label className='text-xs text-gray-500'>Membarui : <span className='font-medium text-black'>10 oktober 2020</span></label>
                                <div className='border border-gray-500'></div>
                                <div>
                                    <button className='text-red-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex py-2'>
                                    <label className='w-[200px]'>Kode Markaz</label>
                                    <p className='border-b-[1px] border-gray-200 w-full'>124234</p>
                                </div>
                                <div className='flex py-2'>
                                    <label className='w-[200px]'>Nama Sekolah</label>
                                    <p className='border-b-[1px] border-gray-200 w-full'>124234</p>
                                </div>
                                <div className='flex py-2'>
                                    <label className='w-[200px]'>ID Siswa</label>
                                    <p className='border-b-[1px] border-gray-200 w-full'>63423</p>
                                </div>
                                <div className='flex py-2'>
                                    <label className='w-[200px]'>Nama Siswa</label>
                                    <p className='border-b-[1px] border-gray-200 w-full'>asep furkon</p>
                                </div>
                                <div className='flex py-2'>
                                    <label className='w-[200px]'>Group</label>
                                    <p className='border-b-[1px] border-gray-200 w-full'>Kelas 2A</p>
                                </div>
                                <div className='flex py-2'>
                                    <label className='w-[200px]'>Telepon</label>
                                    <p className='border-b-[1px] border-gray-200 w-full'>0821744784</p>
                                </div>
                                <div className='flex py-2'>
                                    <label className='w-[200px]'>Email</label>
                                    <p className='border-b-[1px] border-gray-200 w-full'>Furkon@gmail.com</p>
                                </div>
                            </div>
                            <div className='py-5'>
                                <button className='bg-[#169859] px-4 py-2 text-white rounded-full  shadow-md shadow-gray-400 hover:shadow-green-300 transition-all duration-200'>Perbarui Data</button>
                            </div>
                        </div>
                        <div className=' flex justify-center items-center p-5 rounded-md'>
                            <div className='h-[300px] w-[300px]'>
                                <PieChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DetailSiswa