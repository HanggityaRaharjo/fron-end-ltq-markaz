import { useState } from 'react';
import React from 'react'
import Layout from '../../../layouts/Layout'
import DataTable from 'react-data-table-component';


const Checkbox = () => (
    <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-indigo-600"
    />
)

function Icon() {
    return (
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>

    )
}

function UserRole() {

    const columns = [
        {
            name: 'No Id',
            selector: row => row.id,
            sortable: true,
            minWidth: '200px',
            width: '100px',

        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            minWidth: '300px',
            width: '300px',

        },
        {
            name: 'admin',
            selector: row => row.admin,
            cell: (row) => (<Checkbox />),
            minWidth: '100px',
            width: '90px',

        },
        {
            name: 'Tu',
            selector: row => row.tu,
            cell: (row) => (<Checkbox />),
            minWidth: '100px',
            width: '90px',
        },
        {
            name: 'Bendahara',
            selector: row => row.bendahara,
            cell: (row) => (<Checkbox />),
            minWidth: '100px',
            width: '100px',
        },
        {
            name: 'Guru',
            selector: row => row.guru,
            cell: (row) => (<Checkbox />),
            minWidth: '100px',
            width: '90px',
        },
        {
            name: 'Peserta',
            selector: row => row.Peserta,
            cell: (row) => (<Checkbox />),
            minWidth: '100px',
            width: '100px',
        },
        {
            name: '',
            selector: row => row.action,
            minWidth: '100px',
            width: '50px',
        },
    ]

    const data = [
        {
            id: 1231341,
            name: 'sindi',
            action: <Icon />
        },
        {
            id: 1242442,
            name: 'muhamad ahmad rinaldi',
            action: <Icon />
        },
        {
            id: 1533414,
            name: 'sofyan',
            action: <Icon />
        },
        {
            id: 1535444,
            name: 'aji kusuma',
            action: <Icon />
        },
        {
            id: 1638973,
            name: 'dadang',
            action: <Icon />
        },
    ]

    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const newData = data.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setRecords(newData)
    }


    return (
        <Layout>
            <section className='p-5 bg-white'>
                <div className="container mx-auto p-4">
                    <h1 className="text-xl font-bold mb-4">User Role</h1>
                    <div className='bg-white shadow-md'>
                        <div className='flex justify-between mb-2'>
                            <button className='bg-[#169859] text-sm text-[#f3faf6] px-4 py-2 rounded-lg font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>

                                <span>Role</span>
                            </button>
                            <input type="text" onChange={handleFilter} className=' border border-gray-300 p-1' placeholder='Search...' />
                        </div>
                        <DataTable columns={columns} data={records} selectableRows fixedHeader pagination></DataTable>
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


export default UserRole

