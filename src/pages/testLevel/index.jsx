import React from 'react'
import Layout from '../../layouts/Layout'

function TestLevel() {
    return (
        <Layout>
            <section className='p-5 bg-white shadow-md rounded-md'>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">Test Level</h1>
                    <hr className="border-black" />
                    <p className="bg-[#5FB68A80] px-5 py-2 rounded-md">Ujian dibagi menjadi 2 bagian, yaitu Ujian Teori & Ujian Praktek</p>
                </div>

                <div className='flex justify-center mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <div className='w-[250px] h-[300px] bg-white shadow-md relative rounded-md'>
                            <h1 className='bg-[#AEDAC4] rounded-t-md text-center absolute w-full'>Ujian Teori</h1>
                            <div className='rounded-b-md flex flex-col gap-5 py-2 h-full'>
                                <div className=' py-10 flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                    </svg>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-2'>
                                    <button className='w-40 py-2 border border-[#AEDAC4] rounded-md hover:bg-[#AEDAC4] transition-all duration-200'>Ya</button>
                                    <button className='w-40 py-2 border border-[#AEDAC4] rounded-md hover:bg-[#AEDAC4] transition-all duration-200'>Tidak</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-[250px] h-[300px] bg-white shadow-md relative rounded-md'>
                            <h1 className='bg-[#AEDAC4] rounded-t-md text-center absolute w-full'>Ujian Teori</h1>
                            <div className='rounded-b-md flex flex-col gap-5 py-2 h-full'>
                                <div className=' py-10 flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-2'>
                                    <button className='w-40 py-2 border border-[#AEDAC4] rounded-md hover:bg-[#AEDAC4] transition-all duration-200'>Ya</button>
                                    <button className='w-40 py-2 border border-[#AEDAC4] rounded-md hover:bg-[#AEDAC4] transition-all duration-200'>Tidak</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default TestLevel