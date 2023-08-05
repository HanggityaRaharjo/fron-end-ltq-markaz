import React from 'react'
import Layout from '../../../layouts/Layout'
import { useState } from 'react';
import DataTable from 'react-data-table-component';

function Icon() {
    return (
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>
    )
}
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
            selector: row => row.action,
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
            action: <Icon />
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
            action: <Icon />
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
            action: <Icon />
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
            action: <Icon />
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
            action: <Icon />
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
            action: <Icon />
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
            action: <Icon />
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
            action: <Icon />
        },
    ]

    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const newData = data.filter(row => row.pengajar.toLowerCase().includes(event.target.value.toLowerCase()))
        setRecords(newData)
    }

    return (
        <Layout>
            <section className='p-5 bg-white font-poppins'>
                <div className='mb-10'>
                    <h1 className='font-bold'>Pengaturan Kelas</h1>
                </div>
                <div className='flex justify-between mb-2'>
                    <button className='bg-[#169859] text-sm text-[#f3faf6] px-4 py-2 rounded-lg font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>

                        <span>Soal</span>
                    </button>
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