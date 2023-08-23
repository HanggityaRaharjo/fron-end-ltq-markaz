import React from 'react'
import Layout from '../../../layouts/Layout'

function PresensiGuru() {
    return (
        <Layout>
            <section className='p-5'>
                <div>
                    <h1 className='font-bold text-2xl'>Presensi</h1>
                </div>

                <div className='mt-10 bg-white shadow-lg'>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-black text-white'>
                                <td className='py-2 px-1  text-center'>No</td>
                                <td className='py-2 px-20  text-center'>Nama</td>
                                <td className='py-2 px-2  text-center'>Program</td>
                                <td className='py-2 px-2  text-center'>Jam</td>
                                <td className='py-2 px-2  text-center'>Absen</td>
                                <td className='py-2 px-2  text-center'>action</td>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <td className='p-2 border text-center'>1</td>
                                <td className='p-2 border '>ujang</td>
                                <td className='p-2 border text-center'>tartil</td>
                                <td className='p-2 border text-center'>07.00-08.00</td>
                                <td className='p-2 border text-center'></td>
                                <td className='p-2 border text-center'>
                                    <button className='text-blue-500 active:scale-95 transition duration-150'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </section>
        </Layout>
    )
}

export default PresensiGuru