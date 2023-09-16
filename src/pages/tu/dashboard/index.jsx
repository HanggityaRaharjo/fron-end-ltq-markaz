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

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function DashboardTu() {

    const [isShow, setIsShow] = useState(false)

    const HandleShow = () => {
        setIsShow(true)
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
            <section className='p-5'>
                <div className='w-full bg-white p-5 shadow-lg'>
                    <Line data={data} options={options} style={{ width: '100%' }} className=''></Line>
                </div>
            </section>
        </Layout>
    )
}


export default DashboardTu