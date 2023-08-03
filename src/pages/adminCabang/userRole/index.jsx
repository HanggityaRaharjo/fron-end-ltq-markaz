import { useState } from 'react';
import React from 'react'
import Layout from '../../../layouts/Layout'
import DataTable from 'react-data-table-component';

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
            minWidth: '100px',
            width: '100px',

        },
        {
            name: 'Tu',
            selector: row => row.tu,
            minWidth: '100px',
            width: '100px',
        },
        {
            name: 'Bendahara',
            selector: row => row.bendahara,
            minWidth: '100px',
            width: '100px',
        },
        {
            name: 'Guru',
            selector: row => row.guru,
            minWidth: '100px',
            width: '100px',
        },
        {
            name: 'Peserta',
            selector: row => row.Peserta,
            minWidth: '100px',
            width: '100px',
        },
    ]

    const data = [
        {
            id: 1231341,
            name: 'sindi',
            admin: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            tu: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            bendahara: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            guru: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            Peserta: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
        },
        {
            id: 1242442,
            name: 'muhamad ahmad rinaldi',
            admin: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            tu: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            bendahara: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            guru: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            Peserta: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
        },
        {
            id: 1533414,
            name: 'sofyan',
            admin: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            tu: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            bendahara: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            guru: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            Peserta: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
        },
        {
            id: 1535444,
            name: 'aji kusuma',
            admin: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            tu: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            bendahara: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            guru: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            Peserta: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
        },
        {
            id: 1638973,
            name: 'dadang',
            admin: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            tu: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            bendahara: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            guru: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />,
            Peserta: <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
            />
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
                        <div className='text-end'>
                            <input type="text" onChange={handleFilter} className=' border border-gray-300 p-1' placeholder='Search...' />
                        </div>
                        <DataTable columns={columns} data={records} fixedHeader pagination></DataTable>
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

