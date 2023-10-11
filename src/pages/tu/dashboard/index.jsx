import React, { useState } from 'react'
import Layout from '../../../layouts/Layout'


import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'
import ChartComponent from '../../../components/ChartComponent'
import PieChart from '../../../components/ChartPie'
import { Link } from 'react-router-dom'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function DashboardTu() {
    const [isShowDetail, setIsShowDetail] = useState(false)
    const [isTambahTagihan, setIsTambahTagihan] = useState(false)

    const HandleTambahTagihan = () => {
        setIsTambahTagihan(true)
    }

    const data = {
        labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [{
            data: [8, 7.8, 6, 8, 7, 5, 6, 10, 5],
            backgroundColor: 'tranparent',
            borderColor: '#00BFFF ',
            pointBorderColor: 'transparent',
            pointBorderWidth: 2,
        }]
    };

    const options = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 2,
                max: 15,
                ticks: {
                    stepSize: 1,
                    callack: (value) => value + 'K'
                },
                grid: {
                    borderBash: [30]
                }
            }
        }
    }


    return (
        <Layout>
            <BuatTagihan show={isTambahTagihan} close={setIsTambahTagihan} />
            {/* <Line data={data} options={options} style={{ width: '100%', height: '100%' }} className=''></Line> */}
            <section className='p-5'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-5'>
                    <div className=' w-full bg-white p-5 rounded-md shadow-md hover:shadow-green-200 hover:scale-105 transition-all duration-200'>
                        <div onClick={() => HandleTambahTagihan()} className='flex flex-col items-center gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            <label>Buat Tagihan</label>
                        </div>
                    </div>
                    <div className=' w-full bg-white p-5 rounded-md shadow-md hover:shadow-green-200 hover:scale-105 transition-all duration-200'>
                        <div className='flex flex-col items-center gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>
                            <label>Unduh batch</label>
                        </div>
                    </div>
                    <div className=' w-full bg-white p-5 rounded-md shadow-md hover:shadow-green-200 hover:scale-105 transition-all duration-200'>
                        <Link to={'/show/daftar-siswa'}>
                            <div className='flex flex-col items-center gap-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <label>Daftar Siswa</label>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 p-5 gap-5'>
                    <div className='bg-white p-5 shadow-md'>
                        <label className='font-bold text-2xl'>Transaksi</label>
                        <div className='flex items-center h-full'>
                            <ChartComponent />
                        </div>
                    </div>
                    <div className='bg-white p-5 shadow-md'>
                        <label className='font-bold text-2xl'>Pembayaran</label>
                        <div className='h-[300px] flex justify-center'>
                            <PieChart />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

const BuatTagihan = ({ show, close }) => {
    return (
        <div className={`fixed z-[1000] left-0 top-[-1000px] h-screen w-screen bg-gray-300 backdrop-blur-sm bg-opacity-50 justify-center items-center transition-all duration-500 opacity-0 ${show ? 'top-[0px] opacity-100' : ''}`}>
            <div className='flex justify-center items-center h-full'>
                <div className='bg-white w-[800px]  rounded-md p-5'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <div className=''>
                                <label className='font-bold text-xl text-green-500'>Tagihan</label>
                                <p className='text-gray-500'>Buat Tagihan Baru</p>
                            </div>
                        </div>
                        <div className='bg-green-200 p-5 rounded-md'>
                            <div className='flex gap-5'>
                                <div className='flex flex-col w-4/12'>
                                    <label className='font-medium'>Tagihan untuk</label>
                                    <select name="" id="" className='rounded-md outline-none p-2'>
                                        <option value="">SPP</option>
                                        <option value="">DPP</option>
                                        <option value="">Zizwaf</option>
                                    </select>
                                </div>
                                <div className='flex flex-col w-9/12'>
                                    <label className='font-medium'>Nama Siswa</label>
                                    <input type="text" className='rounded-md outline-none p-2 ' />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 p-5 gap-5'>
                            <div className='flex flex-col gap-2 col-span-3'>
                                <label className='font-medium'>Nama Tagihan</label>
                                <input type="text" className='rounded-md outline-none border-b-2 border-gray-200 px-2' placeholder='cth : SPP April 2020 ' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium'>Tagihan untuk</label>
                                <select name="" id="" className='rounded-md outline-none border border-gray-300'>
                                    <option value="">Pilih</option>
                                    <option value="">BSI</option>
                                    <option value="">BRI</option>
                                    <option value="">BCA</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium'>Jumlah Tagihan</label>
                                <input type="number" className='rounded-md outline-none border border-gray-300 px-2 ' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium'>Denda</label>
                                <input type="number" className='rounded-md outline-none border border-gray-300 px-2 ' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium'>Aktif</label>
                                <input type="date" className='rounded-md outline-none border border-gray-300 px-2 ' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium'>Jatuh Tempo</label>
                                <input type="date" className='rounded-md outline-none border border-gray-300 px-2 ' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium'>Kadaluarsa</label>
                                <input type="date" className='rounded-md outline-none border border-gray-300 px-2 ' />
                            </div>
                        </div>
                        <div className='flex justify-end gap-2 p-5'>
                            <button className='px-4 py-2 bg-[#169859] text-white rounded-md active:scale-95 transition-all duration-200'><span>Buat baru</span></button>
                            <button onClick={() => close()} className='px-4 py-2 border border-[#169859] text-[#169859] rounded-md active:scale-95 transition-all duration-200'><span>Batal</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DashboardTu