import React from 'react'
import Layout from '../../../layouts/Layout'

function RiwayatPendidikan() {
    return (
        <Layout>
            <section className='p-5'>
                <div className=''>
                    <h1 className='font-bold text-xl'>
                        RiwayatPendidikan
                    </h1>
                </div>
                <div className='bg-white mt-10'>
                    <table className='w-full'>
                        <thead>
                            <tr className='text-center bg-black text-white'>
                                <td className=' px-2 py-2 w-[50px]'>No</td>
                                <td className=' px-20 py-2'>Priode</td>
                                <td className=' px-2 py-2 w-[100px]'>Angakatan</td>
                                <td className=' px-2 py-2 w-[100px]'>Level</td>
                                <td className=' px-2 py-2'>Keterangan</td>
                                <td className=' px-2 py-2 w-[100px]'>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <td className='border px-2 py-1'>1</td>
                                <td className='border px-2 py-1 text-left'>Syawal 1441</td>
                                <td className='border px-2 py-1'>26</td>
                                <td className='border px-2 py-1'>Level 1</td>
                                <td className='border px-2 py-1'>Lulus</td>
                                <td className='border px-2 py-1'>Lanjut</td>
                            </tr>
                            <tr className='text-center'>
                                <td className='border px-2 py-1'>2</td>
                                <td className='border px-2 py-1 text-left'>Rabiul Awwal 1442</td>
                                <td className='border px-2 py-1'>27</td>
                                <td className='border px-2 py-1'>Level 2</td>
                                <td className='border px-2 py-1'>Lulus Bersyarat</td>
                                <td className='border px-2 py-1'>Lanjut</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}

export default RiwayatPendidikan