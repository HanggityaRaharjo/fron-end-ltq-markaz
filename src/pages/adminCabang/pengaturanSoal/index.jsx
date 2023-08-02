import React from 'react'
import Layout from '../../../layouts/Layout'
import { useState } from 'react';
import DataTable from 'react-data-table-component';

function PengaturanSoal() {
    const columns = [
        {
            name: 'No',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'kode',
            selector: row => row.kode,
            sortable: true
        },
        {
            name: 'Pengajar',
            selector: row => row.pengajar
        },
        {
            name: 'Program',
            selector: row => row.program,
            sortable: true
        },
        {
            name: 'Ujian',
            selector: row => row.ujian
        },
        {
            name: 'Soal - soal',
            selector: row => row.soal
        },
        {
            name: 'Jawaban',
            selector: row => row.jawaban,
            sortable: true
        },
        {
            name: 'action',
        },
    ];

    const data = [
        {
            id: 1,
            kode: 'A',
            name: 'vpomvp',
            pengajar: 'aji kusmans',
            program: 'ancasc',
            ujian: 'ciajc',
            soal: 'oiflk',
            jawaban: 'B',
            action: 'cascac'
        },
        {
            id: 2,
            kode: 'C',
            name: 'pomjcpk oivan',
            pengajar: 'dadang amid',
            program: 'ancasc',
            ujian: 'ciajc',
            soal: 'oiflk',
            jawaban: 'B',
            action: 'cascac'
        },
        {
            id: 3,
            kode: 'D',
            name: 'cascm',
            pengajar: 'pak yanto',
            program: 'ancasc',
            ujian: 'ciajc',
            soal: 'oiflk',
            jawaban: 'B',
            action: 'cascac'
        },
        {
            id: 4,
            kode: 'A',
            name: 'dadacasc',
            pengajar: 'ramdani',
            program: 'ancasc',
            ujian: 'ciajc',
            soal: 'oiflk',
            jawaban: 'B',
            action: 'cascac'
        },
        {
            id: 5,
            kode: 'A',
            name: 'clcniajsc',
            pengajar: 'acnac',
            program: 'ancasc',
            ujian: 'ciajc',
            soal: 'oiflk',
            jawaban: 'B',
            action: 'cascac'
        },
        {
            id: 6,
            kode: 'B',
            name: 'clcniajsc',
            pengajar: 'acnac',
            program: 'ancasc',
            ujian: 'ciajc',
            soal: 'oiflk',
            jawaban: 'B',
            action: 'cascac'
        },
        {
            id: 7,
            kode: 'C',
            name: 'clcniajsc',
            pengajar: 'acnac',
            program: 'ancasc',
            ujian: 'ciajc',
            soal: 'oiflk',
            jawaban: 'B',
            action: 'cascac'
        },
        {
            id: 8,
            kode: 'B',
            name: 'iajsc',
            pengajar: 'acnac',
            program: 'ancasc',
            ujian: 'ciajc',
            soal: 'oiflk',
            jawaban: 'B',
            action: 'cascac'
        },
    ]

    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const newData = data.filter(row => row.pengajar.toLowerCase().includes(event.target.value.toLowerCase()))
        setRecords(newData)
    }

    return (
        <Layout>
            <section className='p-5 bg-white'>
                <div className='text-end'>
                    <input type="text" onChange={handleFilter} className=' border border-gray-300 p-1' placeholder='Search...' />
                </div>
                <div className='bg-white shadow-md p-2'>
                    <DataTable columns={columns} data={records} selectableRows fixedHeader pagination paginationPerPage={10} />
                </div>

            </section>

        </Layout>
    )
}

export default PengaturanSoal