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

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function DashboardGuru() {
    const [isShowDetail, setIsShowDetail] = useState(false)

    const HandleShow = () => {
        setIsShowDetail(true)
    }


    const data = {
        labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [{
            data: [8, 7.8, 6, 8, 7, 5, 6, 10, 5],
            backgroundColor: 'tranparent',
            borderColor: '#00BFFF ',
            pointBorderColor: 'transparent',
            pointBorderWidth: 1,
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
                max: 10,
                ticks: {
                    stepSize: 1,
                    callack: (value) => value + 'K'
                },
                grid: {
                    borderBash: [50]
                }
            }
        }
    }

    return (
        <Layout>
            <section className='p-5'>
                <div className='flex flex-col lg:flex-row  gap-5'>
                    <div className=' h-[300px] w-full lg:w-[800px] bg-white p-5 rounded-md shadow-md'>
                        {/* <Line data={data} options={options} style={{ width: '100%', height: '100%' }} className=''></Line> */}
                        <ChartComponent />
                    </div>
                    <div className='bg-white p-5 rounded-md shadow-md'>
                        <div className='flex flex-col gap-2'>
                            <h1>Jadwal mengajar</h1>
                            <div className='overflow-hidden rounded-md'>
                                <div onClick={() => setIsShowDetail(!isShowDetail)} className='w-full flex flex-col bg-[#9df7ca] p-2 rounded-md'>
                                    <div className='flex justify-between items-center'>
                                        <table className='w-full'>
                                            <tr className='text-center'>
                                                <td className='px-2 w-28 '>Tilawah</td>
                                                <td className='px-2 w-20 '>Selasa</td>
                                                <td className='px-2 '>07.00 - 09.00</td>
                                                <td className='px-2 w-10 '>
                                                    <div className='flex items-center'>
                                                        <button>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className={`flex gap-2rounded-md h-[0px] transition-all duration-300 ${isShowDetail ? 'h-[100px] border rounded-md' : 'h-[0px]'}`}>
                                    <div className='p-2 flex flex-col gap-2'>
                                        <div className='flex gap-2'>
                                            <label className='font-medium'>Materi :</label>
                                            <p>Belajar panjang pendek bacaan</p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, et.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default DashboardGuru