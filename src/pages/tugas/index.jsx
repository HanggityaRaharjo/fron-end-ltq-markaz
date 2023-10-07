import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout'
import { Link } from 'react-router-dom'

function Tugas() {
    const [isShowDetail, setIsShowDetail] = useState(false)
    const [isDataList, setIsDataList] = useState([])


    const DataList = [
        {
            label: 'Tugas menulis arab 1',
            deadline: '24 Des 2022',
            status: 'Belum diserahkan',
            detailText: 'Belum ada tugas yang di tambahkan 1',
        },
        {
            label: 'Tugas menulis arab 1',
            deadline: '24 Des 2022',
            status: 'Belum diserahkan',
            detailText: 'Belum ada tugas yang di tambahkanssssssssssssss 1',
        },
    ]

    useEffect(() => {
        setIsDataList(DataList)
    })


    return (
        <Layout>
            <div className='p-5 bg-white'>
                <div>
                    <h1 className='font-bold text-xl'>Tugas</h1>
                </div>
                <div className='flex mt-10 '>
                    <div className='flex flex-col gap-5 w-full'>
                        {isDataList.map((item, index) => (
                            <div key={index} className={`bg-white border-b-2 border-gray-300 flex flex-col overflow-hidden rounded-md hover:bg-gray-200  ${isShowDetail ? 'shadow-md ' : ''}`}>
                                <div onClick={() => setIsShowDetail(!isShowDetail)} className='flex justify-between items-center cursor-pointer px-4 py-2 '>
                                    <div>
                                        <label className='font-medium'>{item.label}</label>
                                        <p className='text-sm'>Tenggat: {item.deadline}</p>
                                    </div>
                                    <p className='text-red-400'>{item.status}</p>
                                </div>
                                <div className={` bg-white h-[0px] opacity-0 transition-all duration-300 px-4 ${isShowDetail ? 'h-[120px] opacity-100' : ''}`}>
                                    <p className='py-5'>{item.detailText}</p>
                                    <div className='flex justify-end'>
                                        <Link to={'/form/detail-tugas'} className='hover:bg-gray-200 transition-all px-4 py-2 duration-200'>Lihat Detail</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Tugas