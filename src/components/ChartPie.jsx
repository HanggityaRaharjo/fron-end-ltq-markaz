import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
    // Data yang akan digunakan untuk chart pie
    const data = {
        labels: ['Slice 1', 'Slice 2', 'Slice 3'],
        datasets: [
            {
                data: [30, 50, 20], // Jumlah data untuk setiap slice
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Warna untuk setiap slice
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Warna ketika dihover
            },
        ],
    };

    return (
        <div className=''>
            <Pie data={data} />
        </div>
    );
};

export default PieChart;