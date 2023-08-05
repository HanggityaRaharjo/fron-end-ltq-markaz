import React from 'react'
import Layout from '../../layouts/Layout'

function LevelPeserta() {
    return <Layout>
        <section className='min-h-screen bg-white p-5 font-poppins'>
            <div className='grid grid-cols-2 gap-2 mt-10'>
                <div className=' shadow-md'>
                    <div className='flex justify-center'>
                        <div className='w-[200px] h-[200px] bg-slate-300 rounded-full'>

                        </div>
                    </div>
                    <div className='mt-20'>
                        <div className='p-1 mb-5'>
                            <h1 className='text-[20px]'>Iformasi Level</h1>
                        </div>
                        <table className='mb-5'>
                            <tr className=''>
                                <td className='p-1'>Level</td>
                                <td className='p-1'>:</td>
                                <td className='p-1'>2</td>
                            </tr>
                            <tr className=''>
                                <td className='p-1'>Nilai ujian</td>
                                <td className='p-1'>:</td>
                                <td className='p-1'>70</td>
                            </tr>
                            <tr className=''>
                                <td className='p-1'>Nilai test tilawah</td>
                                <td className='p-1'>:</td>
                                <td className='p-1'>75</td>
                            </tr>

                        </table>
                    </div>
                </div>
                <div className='shadow-md'>
                    <div>
                        <table>
                            <tr>
                                <td className='p-2'>Nama</td>
                                <td className='p-2'>:</td>
                                <td className='p-2'>Lorem ipsum dolor sit</td>
                            </tr>
                            <tr>
                                <td className='p-2'>Program</td>
                                <td className='p-2'>:</td>
                                <td className='p-2'>Lorem ipsum dolor sit</td>
                            </tr>
                            <tr>
                                <td className='p-2'>Nama</td>
                                <td className='p-2'>:</td>
                                <td className='p-2'>Lorem ipsum dolor sit</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
}

export default LevelPeserta