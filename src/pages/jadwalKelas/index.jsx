import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout'
import book1 from '../../assets/icon/book1.png'
import { Link } from 'react-router-dom'

function JadwalKelas() {
    const [dataClass, setDataClass] = useState([])

    const DataClass = [
        {
            name: 'Tallaqi',
            kelas: 'C',
            jam: '07.00 - 09.00',
            label: 'Due Tuesday',
            pengajar: 'H. Edang'
        },
        {
            name: 'Tilawah',
            kelas: 'B',
            jam: '07.00 - 09.00',
            label: 'Due Tuesday',
            pengajar: 'H. Edang'
        },
        {
            name: 'Tartil',
            kelas: 'B',
            jam: '07.00 - 09.00',
            label: 'Due Tuesday',
            pengajar: 'H. Edang'
        },
    ]

    useEffect(() => {
        setDataClass(DataClass)
    }, [])

    return (
        <Layout>
            <div className='p-5 font-poppins'>
                <div>
                    <h1 className='font-bold text-xl'>Jadwal Kelas</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                    {dataClass.map((item) => (
                        <CardClass
                            name={item.name}
                            kelas={item.kelas}
                            jam={item.jam}
                            label={item.label}
                            pengajar={item.pengajar} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

const CardClass = ({ name, kelas, jam, pengajar }) => {
    return (
        <div className='h-[250px] rounded-md overflow-hidden bg-white shadow-md hover:scale-105 duration-200 relative'>
            <div className='h-[120px] bg-[#176B87] relative overflow-hidden p-5'>
                <div className='absolute h-[120px] w-[120px] right-0 -bottom-10'>
                    <img src={book1} alt="" className='h-full w-full' />
                </div>
                <div className='flex justify-between relative'>
                    <div>
                        <h1 className='font-bold text-white text-2xl'>{name}</h1>
                        <p className='font-medium text-white'>{kelas}</p>
                        <p className='font-medium text-white'>{jam}</p>
                    </div>
                    <Link to={'/show/kelas'} className='text-white flex items-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='p-5 flex flex-col'>
                <label className='font-medium text-gray-400'>Pegajar</label>
                <p className='font-bold'>{pengajar}</p>
            </div>
            <hr />
            <div className='flex items-center justify-end p-2'>
                <Link to={'/show/tugas'} className='text-gray-500 active:scale-95 duration-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default JadwalKelas