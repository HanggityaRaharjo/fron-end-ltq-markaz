import React, { useState } from 'react'
import Layout from '../../../layouts/Layout'

function SeleksiPeserta() {
    const [isShowDetail, setIsShowDetail] = useState(false)

    const HandleDetail = () => {
        setIsShowDetail(true)
    }

    return (
        <Layout>
            <div className='p-5 flex flex-col gap-5'>
                <div className="flex flex-col gap-2 bg-white p-5 shadow-md rounded-md">
                    <h1 className="font-bold text-2xl">Seleksi Peserta</h1>
                    <hr className="border-black" />
                </div>
                <div className='p-5 bg-white shadow-md rounded-md'>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-black text-white text-center'>
                                <td className='px-4 py-2'>Id</td>
                                <td className='px-4 py-2'>Nama Peserta</td>
                                <td className='px-4 py-2'>Program</td>
                                <td className='px-4 py-2'>Hasil Test</td>
                                <td className='px-4 py-2'>action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <td className='px-4 py-2 border'>D03892</td>
                                <td className='px-4 py-2 border text-left'>Asep kurnia</td>
                                <td className='px-4 py-2 border'>Tilawah</td>
                                <td className='px-4 py-2 border'>
                                    <div>
                                        <button onClick={() => setIsShowDetail(!isShowDetail)} className='p-2 bg-blue-200 rounded-md font-medium'>Detail</button>
                                    </div>
                                </td>
                                <td className='px-4 py-2 border'>
                                    <div className='w-full'>
                                        <select name="" id="" className='w-full outline-none'>
                                            <option value="">Pilih</option>
                                            <option value="">Lulus</option>
                                            <option value="">Tidak Lulus</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={5} className={`border overflow-hidden `} style={{ height: isShowDetail ? 'auto' : 0, overflow: 'hidden', transition: 'height 0.2s' }}>
                                    < div className={`flex px-2 flex-col gap-2  overflow-hidden transition-all duration-200 ${isShowDetail ? 'h-[150px]' : 'h-[0px]'}`}>
                                        ss
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout >
    )
}

export default SeleksiPeserta