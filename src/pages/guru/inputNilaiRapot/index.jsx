import React from 'react'
import Layout from '../../../layouts/Layout'

function InputNilaiRapot() {
    return (
        <Layout>
            <section className='p-5 font-poppins'>
                <div className=' '>
                    <div>
                        <h1 className='font-bold'>Input Nilai Rapot</h1>
                    </div>
                    <div className='mt-10 bg-white  shadow-lg rounded-lg'>
                        <table className='w-full'>
                            <thead>
                                <td className='p-2 text-center w-[50px]'>No</td>
                                <td className='p-2 text-center w-[200px]'>Nama</td>
                                <td className='p-2 text-center w-[150px]'>Program</td>
                                <td className='p-2 text-center w-[50px]'>Nilai</td>
                            </thead>
                            <tbody>
                                <td className='p-2 text-center'>1</td>
                                <td className='p-2 text-center'>ujang</td>
                                <td className='p-2 text-center'>
                                    <select
                                        name="program"
                                        className="h-10 w-full border border-[#169859]  px-5 rounded-lg"
                                    >
                                        <option value="">Pilih opsi...</option>
                                        <option value="jawa barat">Talaqqi</option>
                                        <option value="jawa timur">tartil</option>
                                    </select>
                                </td>
                                <td className='p-2 text-center'><input type="number" name="" className='h-10 w-full border border-[#169859]' /></td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default InputNilaiRapot