import React, { useEffect, useState } from 'react'
import Layout from '../../../layouts/Layout'
import axios from 'axios'

function InputnilaiSiswa() {
    const [dataNilai, setDataNilai] = useState([])

    useEffect(() => {
        axios.get('http://192.168.0.5:8000/api/biodata', {

        }).then((response) => {
            console.log(response.data.Data);
            setDataNilai(response.data.Data)
        })
    }, [])

    return (
        <Layout>
            <section className='p-5 bg-white'>
                <div className=''>
                    <div>
                        <h1>Input Nilai Siswa</h1>
                    </div>

                    <div className='mt-10 max-h-[300px] overflow-y-auto'>
                        <table className='w-full'>
                            <thead className='sticky -top-1 bg-white '>
                                <td className='p-2  font-bold text-center w-[50px]'>No</td>
                                <td className='p-2  font-bold text-center'>Nama</td>
                                <td className='p-2  font-bold text-center w-[150px]'>Nilai 1</td>
                                <td className='p-2  font-bold text-center w-[150px]'>Nilai 2</td>
                                <td className='p-2  font-bold text-center w-[150px]'>Nilai 3</td>
                            </thead>
                            <tbody>
                                {dataNilai && dataNilai.map((item, index) =>
                                    <tr>
                                        <td className='p-2 text-center'>{index + 1}</td>
                                        <td className='p-2 '>{item.full_name}</td>
                                        <td className='p-2 text-center'><input type="number" className='border border-gray-400 rounded-md h-10 w-20 text-center' /></td>
                                        <td className='p-2 text-center'><input type="number" className='border border-gray-400 rounded-md h-10 w-20 text-center' /></td>
                                        <td className='p-2 text-center'><input type="number" className='border border-gray-400 rounded-md h-10 w-20 text-center' /></td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                    <div className='mt-5 flex justify-end'>
                        <button type="submit" className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                            <span>Submit</span>
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default InputnilaiSiswa