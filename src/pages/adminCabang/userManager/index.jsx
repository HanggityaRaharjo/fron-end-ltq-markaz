import React from 'react'
import Layout from '../../../layouts/Layout';
import { Link } from 'react-router-dom';



function UserManager() {
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
          <Table data={data} />
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

const data = [
  {
    no: 1, name: 'ssajhabsc ashcb', TTL: 'Bandung, 24 januari 2000', id: "11282789", wa: "089786575577"
  },
  {
    no: 2, name: 'cknki jasc kjasc ', TTL: 'Bandung, 24 januari 2000', id: "11282789", wa: "089786575577"
  },
  {
    no: 3, name: 'caosc oajsnc jsc', TTL: 'Bandung, 24 januari 2000', id: "11282789", wa: "089786575577"
  },
  {
    no: 4, name: 'oiaps oasca scciun', TTL: 'Bandung, 24 januari 2000', id: "11282789", wa: "089786575577"
  },
  {
    no: 5, name: 'oiaps oasca scciun', TTL: 'Bandung, 24 januari 2000', id: "11282789", wa: "089786575577"
  },
];

const Table = ({ data }) => {
  return (
    <table className='w-full border-collapse border'>
      <thead>
        <tr className='text-sm'>
          <th className='w-[25px] border-collapse border'>No</th>
          <th className='w-[200px] border-collapse border'>Name</th>
          <th className='w-[200px] border-collapse border'>TTL</th>
          <th className='w-[100px] border-collapse border'>ID LTQ</th>
          <th className='w-[100px] border-collapse border'>No WA</th>
          <th className='w-[100px] border-collapse border'>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.no}>
            <td className='w-[15px] border-collapse border text-center'>{item.no}</td>
            <td className='text-sm border'>{item.name}</td>
            <td className='text-sm border'>{item.TTL}</td>
            <td className='text-sm border text-center'>{item.id}</td>
            <td className='text-sm border text-center'>{item.wa}</td>
            <td className='text-sm border flex justify-center'>
              <div>
                <button className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                  <span>Edit</span>
                </button>
                <button className='bg-red-500 text-sm text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                  <span>Hapus</span>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default UserManager;