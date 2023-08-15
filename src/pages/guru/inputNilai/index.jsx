import React, { useEffect, useState } from 'react'
import Layout from '../../../layouts/Layout'
import axios from 'axios'

function InputnilaiSiswa() {
    const [showmodal, setShowModal] = useState(false);

    const HandleEditNilai = () => {
        setShowModal(true)
    }

    return (
        <Layout>
            <ModalEditNilai
                show={showmodal}
                close={setShowModal} />
            <section className='p-5 bg-white'>
                <div className=''>
                    <div>
                        <h1 className='font-bold text-2xl'>Nilai Siswa</h1>
                    </div>

                    <div className='mt-10 max-h-[300px] overflow-y-auto shadow-lg border rounded-lg'>
                        <table className='w-full'>
                            <thead className='sticky -top-1 bg-white '>
                                <tr className='bg-black text-white'>
                                    <td className='p-2   font-bold text-center w-[50px]'>No</td>
                                    <td className='p-2   font-bold text-center w-[200px]'>Nama</td>
                                    <td className='p-2   font-bold text-center w-[200px]'>Program</td>
                                    <td className='p-2   font-bold text-center w-[150px]'>Nilai</td>
                                    <td className='p-2   font-bold text-center w-[150px]'>action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>Ujang Enam</td>
                                    <td className='p-2 border text-center'>talaqi</td>
                                    <td className='p-2 border text-center'>70</td>
                                    <td className='p-2 border text-center '>
                                        <div className='flex justify-center gap-5 '>
                                            <button
                                                className='text-blue-500 active:scale-95 transition duration-150'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                            <button className='text-red-500 active:scale-95 transition duration-150'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>

                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='p-2 border text-center'>1</td>
                                    <td className='p-2 border '>Ujang Enam</td>
                                    <td className='p-2 border text-center'>talaqi</td>
                                    <td className='p-2 border text-center'>70</td>
                                    <td className='p-2 border text-center '>
                                        <div className='flex justify-center gap-5 '>
                                            <button
                                                className='text-blue-500 active:scale-95 transition duration-150'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                            <button className='text-red-500 active:scale-95 transition duration-150'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>

                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

function ModalEditNilai({ show, close }) {
    return (
        <div className='fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-50 justify-center items-center'
            style={{ display: show ? "flex" : "none" }}>
            <div className='flex justify-center items-center h-full w-full'>
                <div className='p-5 w-[600px] max-h-[700px] bg-white rounded-lg'>
                    <h1 className='font-bold text-2x1'>Edit Nilai</h1>
                    <div className='flex flex-col gap-5'>
                        <div className='my-5'>
                            <p>Ujang Enam</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                Nilai 1
                            </label>
                            <input
                                name='no_wa'
                                type="number"
                                className=" w- border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                Nilai 2
                            </label>
                            <input
                                name='no_wa'
                                type="number"
                                className=" w- border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                Nilai 3
                            </label>
                            <input
                                name='no_wa'
                                type="number"
                                className=" w- border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>

                        <div className="flex gap-2 justify-end ">
                            <button
                                type="submit"
                                // onClick={() => HandleNextPost()}
                                className="bg-green-700 rounded-lg px-5 py-2 text-white min-w-[100px] active:scale-95 transition duration-150">
                                Simpan
                            </button>
                            <button
                                onClick={() => close(false)}
                                className="bg-green-700 rounded-lg px-5 py-2 text-white min-w-[100px] active:scale-95 transition duration-150"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputnilaiSiswa