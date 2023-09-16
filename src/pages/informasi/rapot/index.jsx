import React from 'react'
import Layout from '../../../layouts/Layout'
import { useState } from 'react'

function InformasiRapot() {
    const [isActiveTab, setActiveTab] = useState('level1')

    return (
        <Layout>
            <section className='p-5 font-poppins'>
                <div>
                    <h1 className='font-bold text-xl'>Informasi Rapot</h1>
                </div>
                <div className='flex gap-1 mt-10'>
                    <button
                        onClick={() => setActiveTab('level1')}
                        className={` px-2 py-1 rounded-t-md active:scale-95 duration-300 ${isActiveTab === 'level1' ? 'bg-black px-3  text-white' : 'bg-gray-200 text-black'}`}>Level 1</button>
                    <button
                        onClick={() => setActiveTab('level2')}
                        className={` px-2 py-1 rounded-t-md active:scale-95 duration-300 ${isActiveTab === 'level2' ? 'bg-black px-3  text-white' : 'bg-gray-200 text-black'}`}>Level 2</button>
                    <button
                        onClick={() => setActiveTab('level3')}
                        className={` px-2 py-1 rounded-t-md active:scale-95 duration-300 ${isActiveTab === 'level3' ? 'bg-black px-3  text-white' : 'bg-gray-200 text-black'}`}>Level 3</button>
                    <button
                        onClick={() => setActiveTab('level4')}
                        className={` px-2 py-1 rounded-t-md active:scale-95 duration-300 ${isActiveTab === 'level4' ? 'bg-black px-3  text-white' : 'bg-gray-200 text-black'}`}>Level 4</button>
                    <button
                        onClick={() => setActiveTab('level5')}
                        className={` px-2 py-1 rounded-t-md active:scale-95 duration-300 ${isActiveTab === 'level5' ? 'bg-black px-3  text-white' : 'bg-gray-200 text-black'}`}>Level 5</button>
                </div>
                <div className='bg-white pt-5'>
                    {isActiveTab === 'level1' ? (
                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <h1 className='font-bold text-xl'>HASIL UJIAN AKHIR</h1>
                                <h1 className='font-bold text-xl'>PROGRAM TAHSIN TILAWAH</h1>
                            </div>
                            <div className='my-5'>
                                <table>
                                    <thead>
                                        <tr>
                                            <td className='px-2 w-[200px]'>Priode</td>
                                            <td className='px-2'>:</td>
                                            <td className='px-2  border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                        </tr>
                                        <tr>
                                            <td className='px-2'>Semester</td>
                                            <td className='px-2'>:</td>
                                            <td className='px-2 border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                        </tr>
                                        <tr>
                                            <td className='px-2'>Nama Siswa</td>
                                            <td className='px-2'>:</td>
                                            <td className='px-2 border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                        </tr>
                                        <tr>
                                            <td className='px-2'>Nama Pembimbing</td>
                                            <td className='px-2'>:</td>
                                            <td className='px-2 border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <table className='w-full bg-white shadow-md'>
                                <thead>
                                    <tr className='text-center text-white bg-black'>
                                        <td className='px-2 py-2  w-[50px]'>No</td>
                                        <td className='px-20 py-2  '>Materi</td>
                                        <td className='px-2 py-2 '>Angka</td>
                                        <td className='px-2 py-2 '>Huruf</td>
                                        <td className='px-20 py-2 '>Catatan</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='px-2 py-2 border text-center'>1</td>
                                        <td className='px-2 py-2 border'>Ujian Tilawah</td>
                                        <td className='px-2 py-2 border text-center'>79</td>
                                        <td className='px-2 py-2 border text-center'>B</td>
                                        <td className='px-2 py-2 border text-center'>Bagus tingkatkan lagi</td>
                                    </tr>
                                    <tr>
                                        <td className='px-2 py-2 border text-center'>2</td>
                                        <td className='px-2 py-2 border'>Ujian Tadribat</td>
                                        <td className='px-2 py-2 border text-center'>79</td>
                                        <td className='px-2 py-2 border text-center'>B</td>
                                        <td className='px-2 py-2 border text-center'>Bagus tingkatkan lagi</td>
                                    </tr>
                                    <tr className=''>
                                        <td className='px-2 border border-r-0'></td>
                                        <td className='px-2 font-bold border border-l-0'>Total Nilai</td>
                                        <td className='px-2 border'></td>
                                        <td className='px-2 border'></td>
                                        <td className='px-2 border border-l-0'></td>
                                    </tr>
                                    <tr className=''>
                                        <td className='px-2 border border-r-0'></td>
                                        <td className='px-2 font-bold border border-l-0'>Rata-rata</td>
                                        <td className='px-2 border'></td>
                                        <td className='px-2 border'></td>
                                        <td className='px-2 border border-l-0'></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className='mt-10'>
                                <div className='grid grid-cols-2 px-5'>
                                    <div className='flex flex-col'>
                                        <h1 className='font-bold'>Catatan :</h1>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatum dolor hic voluptate ratione, eos dolorem minima enim saepe fugiat!</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='font-bold'>Keputusan :</h1>
                                        <p>Dengan memperhatikan prestasi yang dicapai pada semester <span className='border border-dotted border-b-gray-400 border-x-0 border-t-0 font-semibold'>3</span></p>
                                        <p>Maka siswa ini di tetapkan :</p>
                                        <p>Lulus / Diluluskan ke semester : <span className='font-semibold border border-dotted border-b-gray-400 border-x-0 border-t-0'>4</span></p>
                                        <hr className='w-1/2 border-gray-400' />
                                        <p>Mengulang di semester</p>
                                        <div className='mt-10 flex justify-center'>
                                            <div>
                                                <p className='w-40 border border-dotted border-b-gray-400 border-x-0 border-t-0'></p>
                                                <h1 className='text-center'>Penguji</h1>
                                                <div className='h-32 w-30 bg-slate-100 flex justify-center mb-10'>
                                                    <img src="" alt="" />
                                                </div>
                                                <p className='w-40 border border-dotted border-b-gray-400 border-x-0 border-t-0 '></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : isActiveTab === 'level2' ? (
                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <h1 className='font-bold text-xl'>HASIL UJIAN AKHIR</h1>
                                <h1 className='font-bold text-xl'>PROGRAM TAHSIN TILAWAH</h1>
                            </div>
                            <div className='my-5'>
                                <table>
                                    <thead>
                                        <tr>
                                            <td className='px-2 w-[200px]'>Priode</td>
                                            <td className='px-2'>:</td>
                                            <td className='px-2  border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                        </tr>
                                        <tr>
                                            <td className='px-2'>Semester</td>
                                            <td className='px-2'>:</td>
                                            <td className='px-2 border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                        </tr>
                                        <tr>
                                            <td className='px-2'>Nama Siswa</td>
                                            <td className='px-2'>:</td>
                                            <td className='px-2 border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                        </tr>
                                        <tr>
                                            <td className='px-2'>Nama Pembimbing</td>
                                            <td className='px-2'>:</td>
                                            <td className='px-2 border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <table className='w-full bg-white shadow-md'>
                                <thead>
                                    <tr className='text-center text-white bg-black'>
                                        <td className='px-2 py-2  w-[50px]'>No</td>
                                        <td className='px-20 py-2  '>Materi</td>
                                        <td className='px-2 py-2 '>Angka</td>
                                        <td className='px-2 py-2 '>Huruf</td>
                                        <td className='px-20 py-2 '>Catatan</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='px-2 py-2 border text-center'>1</td>
                                        <td className='px-2 py-2 border'>Ujian Tilawah</td>
                                        <td className='px-2 py-2 border text-center'>79</td>
                                        <td className='px-2 py-2 border text-center'>B</td>
                                        <td className='px-2 py-2 border text-center'>Bagus tingkatkan lagi</td>
                                    </tr>
                                    <tr>
                                        <td className='px-2 py-2 border text-center'>2</td>
                                        <td className='px-2 py-2 border'>Ujian Tadribat</td>
                                        <td className='px-2 py-2 border text-center'>79</td>
                                        <td className='px-2 py-2 border text-center'>B</td>
                                        <td className='px-2 py-2 border text-center'>Bagus tingkatkan lagi</td>
                                    </tr>
                                    <tr className=''>
                                        <td className='px-2 border border-r-0'></td>
                                        <td className='px-2 font-bold border border-l-0'>Total Nilai</td>
                                        <td className='px-2 border'></td>
                                        <td className='px-2 border'></td>
                                        <td className='px-2 border border-l-0'></td>
                                    </tr>
                                    <tr className=''>
                                        <td className='px-2 border border-r-0'></td>
                                        <td className='px-2 font-bold border border-l-0'>Rata-rata</td>
                                        <td className='px-2 border'></td>
                                        <td className='px-2 border'></td>
                                        <td className='px-2 border border-l-0'></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className='mt-10'>
                                <div className='grid grid-cols-2 px-5'>
                                    <div className='flex flex-col'>
                                        <h1 className='font-bold'>Catatan :</h1>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatum dolor hic voluptate ratione, eos dolorem minima enim saepe fugiat!</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='font-bold'>Keputusan :</h1>
                                        <p>Dengan memperhatikan prestasi yang dicapai pada semester <span className='border border-dotted border-b-gray-400 border-x-0 border-t-0 font-semibold'>3</span></p>
                                        <p>Maka siswa ini di tetapkan :</p>
                                        <p>Lulus / Diluluskan ke semester : <span className='font-semibold border border-dotted border-b-gray-400 border-x-0 border-t-0'>4</span></p>
                                        <hr className='w-1/2 border-gray-400' />
                                        <p>Mengulang di semester</p>
                                        <div className='mt-10 flex justify-center'>
                                            <div>
                                                <p className='w-40 border border-dotted border-b-gray-400 border-x-0 border-t-0'></p>
                                                <h1 className='text-center'>Penguji</h1>
                                                <div className='h-32 w-30 bg-slate-100 flex justify-center mb-10'>
                                                    <img src="" alt="" />
                                                </div>
                                                <p className='w-40 border border-dotted border-b-gray-400 border-x-0 border-t-0 '></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : <div className='p-5'>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-bold text-xl'>HASIL UJIAN AKHIR</h1>
                            <h1 className='font-bold text-xl'>PROGRAM TAHSIN TILAWAH</h1>
                        </div>
                        <div className='my-5'>
                            <table>
                                <thead>
                                    <tr>
                                        <td className='px-2 w-[200px]'>Priode</td>
                                        <td className='px-2'>:</td>
                                        <td className='px-2  border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                    </tr>
                                    <tr>
                                        <td className='px-2'>Semester</td>
                                        <td className='px-2'>:</td>
                                        <td className='px-2 border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                    </tr>
                                    <tr>
                                        <td className='px-2'>Nama Siswa</td>
                                        <td className='px-2'>:</td>
                                        <td className='px-2 border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                    </tr>
                                    <tr>
                                        <td className='px-2'>Nama Pembimbing</td>
                                        <td className='px-2'>:</td>
                                        <td className='px-2 border border-dotted border-b-gray-400 border-x-0 border-t-0 w-[300px]'></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <table className='w-full bg-white shadow-md'>
                            <thead>
                                <tr className='text-center text-white bg-black'>
                                    <td className='px-2 py-2  w-[50px]'>No</td>
                                    <td className='px-20 py-2  '>Materi</td>
                                    <td className='px-2 py-2 '>Angka</td>
                                    <td className='px-2 py-2 '>Huruf</td>
                                    <td className='px-20 py-2 '>Catatan</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='px-2 py-2 border text-center'>1</td>
                                    <td className='px-2 py-2 border'>Ujian Tilawah</td>
                                    <td className='px-2 py-2 border text-center'>79</td>
                                    <td className='px-2 py-2 border text-center'>B</td>
                                    <td className='px-2 py-2 border text-center'>Bagus tingkatkan lagi</td>
                                </tr>
                                <tr>
                                    <td className='px-2 py-2 border text-center'>2</td>
                                    <td className='px-2 py-2 border'>Ujian Tadribat</td>
                                    <td className='px-2 py-2 border text-center'>79</td>
                                    <td className='px-2 py-2 border text-center'>B</td>
                                    <td className='px-2 py-2 border text-center'>Bagus tingkatkan lagi</td>
                                </tr>
                                <tr className=''>
                                    <td className='px-2 border border-r-0'></td>
                                    <td className='px-2 font-bold border border-l-0'>Total Nilai</td>
                                    <td className='px-2 border'></td>
                                    <td className='px-2 border'></td>
                                    <td className='px-2 border border-l-0'></td>
                                </tr>
                                <tr className=''>
                                    <td className='px-2 border border-r-0'></td>
                                    <td className='px-2 font-bold border border-l-0'>Rata-rata</td>
                                    <td className='px-2 border'></td>
                                    <td className='px-2 border'></td>
                                    <td className='px-2 border border-l-0'></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className='mt-10'>
                            <div className='grid grid-cols-2 px-5'>
                                <div className='flex flex-col'>
                                    <h1 className='font-bold'>Catatan :</h1>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatum dolor hic voluptate ratione, eos dolorem minima enim saepe fugiat!</p>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='font-bold'>Keputusan :</h1>
                                    <p>Dengan memperhatikan prestasi yang dicapai pada semester <span className='border border-dotted border-b-gray-400 border-x-0 border-t-0 font-semibold'>3</span></p>
                                    <p>Maka siswa ini di tetapkan :</p>
                                    <p>Lulus / Diluluskan ke semester : <span className='font-semibold border border-dotted border-b-gray-400 border-x-0 border-t-0'>4</span></p>
                                    <hr className='w-1/2 border-gray-400' />
                                    <p>Mengulang di semester</p>
                                    <div className='mt-10 flex justify-center'>
                                        <div>
                                            <p className='w-40 border border-dotted border-b-gray-400 border-x-0 border-t-0'></p>
                                            <h1 className='text-center'>Penguji</h1>
                                            <div className='h-32 w-30 bg-slate-100 flex justify-center mb-10'>
                                                <img src="" alt="" />
                                            </div>
                                            <p className='w-40 border border-dotted border-b-gray-400 border-x-0 border-t-0 '></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }

                </div>
                <div className='flex justify-end gap-2 mt-2'>
                    <button className='px-4 py-1 bg-black text-white rounded-md active:scale-95 duration-300'>Cuti</button>
                    <button className='px-4 py-1 bg-black text-white rounded-md active:scale-95 duration-300'>Lanjut</button>
                </div>
            </section>
        </Layout>
    )
}

export default InformasiRapot