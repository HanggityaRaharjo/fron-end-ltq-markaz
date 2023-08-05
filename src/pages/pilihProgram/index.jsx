import React from 'react'
import { useState } from 'react'
import Layout from '../../layouts/Layout'
import DataTable from 'react-data-table-component'
import { data } from 'autoprefixer'


function PilihProgram() {
    const Checkbox = () => {
        return (
            <div>
                <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                    name='jadwal'
                />
            </div>
        )
    }

    const columns = [
        {
            name: 'No',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Nama Program',
            selector: row => row.program,
            sortable: true
        },
        {
            name: 'Hari',
            selector: row => row.hari,
            sortable: true
        },
        {
            name: 'Jam',
            selector: row => row.jam,
            sortable: true
        },
        {
            name: 'action',
            selector: row => row.action,
            cell: (row) => (<Checkbox />)
        }
    ]

    const data = [
        {
            id: 1,
            program: 'tartil',
            hari: 'senin',
            jam: '07.00-09.00',
        },
        {
            id: 2,
            program: 'tahfidz',
            hari: 'rabu',
            jam: '07.00-09.00',


        },
        {
            id: 3,
            program: 'tartil',
            hari: 'senin',
            jam: '09.00-10.00',

        },
        {
            id: 4,
            program: 'Bahasa Arab',
            hari: 'senin',
            jam: '09.00-10.00',

        },
        {
            id: 5,
            program: 'Talaqqi',
            hari: 'senin',
            jam: '09.00-10.00',

        },
    ]
    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const newData = data.filter(row => row.program.toLowerCase().includes(event.target.value.toLowerCase()))
        setRecords(newData)
    }

    return (
        <Layout>
            <section className='p-5 bg-white min-w-screen'>
                <div className='mb-10'>
                    <h1 className='font-bold'>Jadwal Kelas</h1>
                </div>
                <div className='bg-white shadow-md'>
                    <div className='text-end'>
                        <input type="text" onChange={handleFilter} className=' border border-gray-300 p-1' placeholder='Search...' />
                    </div>
                    <DataTable columns={columns} data={records} />
                </div>
                <div className='flex justify-end mt-5'>
                    <button className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-20 rounded-sm font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                        <span>tambah</span>
                    </button>
                </div>
            </section>
        </Layout>
    )
}

export default PilihProgram