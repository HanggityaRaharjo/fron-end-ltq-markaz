import React, { useState } from 'react'
import Layout from '../../../layouts/Layout'
import DataTable from 'react-data-table-component'

function Icon() {
    return (
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>

    )
}

function PengaturanKelas() {
    const columns = [
        {
            name: 'Program',
            selector: row => row.program,
            sortable: true,
            minWidth: '300px',
            width: '200px',


        },
        {
            name: 'Pengajar',
            selector: row => row.pengajar,
            sortable: true,
            minWidth: '400px',
            width: '400px',

        },
        {
            name: 'Hari',
            selector: row => row.hari,
            sortable: false,
            minWidth: '200px',
            width: '100px',
        },
        {
            name: 'Jam',
            selector: row => row.jam,
            sortable: false,
            minWidth: '200px',
            width: '150px',
        },
        {
            name: ' ',
            selector: row => row.action,
            sortable: false,
            minWidth: '100px',
            width: '100px',
        },
    ]

    const data = [
        {
            program: 'Tartil',
            pengajar: 'muhamad ahmad',
            hari: 'senin',
            jam: '07.00-09.00',
            action: <Icon />
        },
        {
            program: 'Tahfidz',
            pengajar: 'Bu dini',
            hari: 'senin',
            jam: '08.00-09.00',
            action: <Icon />
        },
        {
            program: 'Bahasa arab',
            pengajar: 'pak anis',
            hari: 'Rabu',
            jam: '07.00-09.00',
            action: <Icon />
        },
        {
            program: 'Tahfidz',
            pengajar: 'pak eko',
            hari: 'kamis',
            jam: '07.00-09.00',
            action: <Icon />
        },
        {
            program: 'Isim',
            pengajar: 'Bu dian',
            hari: 'selasa',
            jam: '07.00-09.00',
            action: <Icon />
        },
        {
            program: 'Tarti',
            pengajar: 'Ahmad',
            hari: 'Rabu',
            jam: '07.00-09.00',
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
            <section className='p-5 bg-white'>
                <div>
                    <h1>
                        Kelas
                    </h1>
                    <div className='mt-10'>
                        <div className='flex justify-between mb-2'>
                            <button className='bg-[#169859] text-sm text-[#f3faf6] px-4 py-2 rounded-lg font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>

                                <span>Kelas</span>
                            </button>
                            <input type="text" onChange={handleFilter} className=' border border-gray-300 p-1' placeholder='Search...' />
                        </div>
                        <DataTable columns={columns} data={records} selectableRows fixedHeader pagination paginationPerPage={10}></DataTable>
                    </div>
                    <div className='flex justify-end mt-10'>
                        <button className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PengaturanKelas