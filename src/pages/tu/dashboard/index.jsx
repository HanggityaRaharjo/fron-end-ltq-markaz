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

function DashboardTu() {
    const [isShowDetail, setIsShowDetail] = useState(false)


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
            <section className='p-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-5'>
                    <div className=' h-[300px] w-full bg-white p-5 rounded-md shadow-md'>
                        {/* <Line data={data} options={options} style={{ width: '100%', height: '100%' }} className=''></Line> */}
                        <ChartComponent />
                    </div>
                </div>
            </section>
        </Layout>
    )
}


export default DashboardTu