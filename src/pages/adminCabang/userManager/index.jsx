import React from 'react'
import { useState } from 'react';
import Layout from '../../../layouts/Layout';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';



function UserManager() {
  const columns = [
    {
      name: 'No',
      selector: row => row.no,
      sortable: true
    },
    {
      name: 'Name',
      selector: row => row.nama,
      sortable: true
    },
    {
      name: 'TTG',
      selector: row => row.ttg,
      sortable: true
    },
    {
      name: 'No ID',
      selector: row => row.noId,
      sortable: true
    },
    {
      name: 'No Wa',
      selector: row => row.noWa,
      sortable: true
    },
    {
      name: 'Action',
      selector: row => row.action,
    },
  ]

  const data = [
    {
      no: 1,
      nama: 'ahmad susanto',
      ttg: '14-09-1998',
      noId: '229108442',
      noWa: '0897655646',
      action: <Button />
    },
    {
      no: 2,
      nama: 'ahmad susanto',
      ttg: '14-09-1998',
      noId: '229108442',
      noWa: '0897655646',
      action: <Button />
    },
    {
      no: 3,
      nama: 'ahmad susanto',
      ttg: '14-09-1998',
      noId: '229108442',
      noWa: '0897655646',
      action: <Button />
    },
    {
      no: 4,
      nama: 'ahmad susanto',
      ttg: '14-09-1998',
      noId: '229108442',
      noWa: '0897655646',
      action: <Button />
    },
    {
      no: 5,
      nama: 'ahmad susanto',
      ttg: '14-09-1998',
      noId: '229108442',
      noWa: '0897655646',
      action: <Button />
    },
  ]

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter(row => row.nama.toLowerCase().includes(event.target.value.toLowerCase()))
    setRecords(newData)
  }


  return (
    <Layout>
      <section className='bg-white p-5'>
        <div>
          <Link to={'/tambah-user'} className="bg-[#169859] text-[#f3faf6] p-2 w-40 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>

            <span className='text-sm'>Tambah Data</span>
          </Link>
        </div>

        <div className='mt-10'>
          <div className='text-end'>
            <input type="text" onChange={handleFilter} className=' border border-gray-300 p-1' placeholder='search...' />
          </div>
          <div className='bg-white shadow-md p-1'>
            <DataTable columns={columns} data={records} selectableRows fixedHeader pagination paginationPerPage={5} />
          </div>
        </div>

        <div className='flex justify-end mt-10 pr-7'>
          <button className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
            <span>Save</span>
          </button>
        </div>
      </section>
    </Layout>
  )
}
const Button = () => {
  return (
    <div className='flex gap-2'>
      <button className='bg-[#169859] text-[12px] text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
        <span>Edit</span>
      </button>
      <button className='bg-red-400 text-[12px] text-[#f3faf6] p-1 w-20 mt-1 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
        <span>Hapus</span>
      </button>
    </div>
  )

}


export default UserManager;