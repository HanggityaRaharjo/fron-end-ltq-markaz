import React from 'react'
import Layout from '../../../layouts/Layout'

function PresensiKehadiran() {
    return (
        <Layout>
            <section className='p-5'>
                <div>
                    <div>
                        <h1 className='font-bold '>Presensi Kehadiran</h1>
                    </div>
                    <div className='mt-10'>
                        <table className='w-full'>
                            <thead>
                                <td className='p-2 font-bold border text-center w-[50px]'>No</td>
                                <td className='p-2 font-bold border text-center'>Nama</td>
                                <td className='p-2 font-bold border text-center w-[100px]'>Hadir</td>
                                <td className='p-2 font-bold border text-center w-[100px]'>Sakit</td>
                                <td className='p-2 font-bold border text-center w-[100px]'>Absen</td>
                                <td className='p-2 font-bold border text-center w-[100px]'>Izin</td>
                            </thead>
                            <tbody>
                                <td className='p-2 text-center'>1</td>
                                <td className='p-2'>ujang</td>
                                <td className='p-2 text-center'><input type="checkbox" name='hadir' /></td>
                                <td className='p-2 text-center'><input type="checkbox" name='sakit' /></td>
                                <td className='p-2 text-center'><input type="checkbox" name='absen' /></td>
                                <td className='p-2 text-center'><input type="checkbox" name='izin' /></td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PresensiKehadiran