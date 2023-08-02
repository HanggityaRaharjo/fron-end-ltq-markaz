import React from 'react'
import Layout from '../../../layouts/Layout'

function PengaturanKelas() {
    return (
        <Layout>
            <section className='p-5 bg-white'>
                <div>
                    <h1>
                        Kelas
                    </h1>
                    <div className='mt-10'>
                        <Table data={data} />
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

const data = [
    { No: 1, program: 'Item 1', pengajar: 'fulan 1', hari: 'senin', jam: '07.00-09.00' },
    { No: 2, program: 'Item 2', pengajar: 'fulan 1', hari: 'senin', jam: '07.00-09.00' },
    { No: 3, program: 'Item 3', pengajar: 'fulan 1', hari: 'senin', jam: '07.00-09.00' },
    { No: 4, program: 'Item 4', pengajar: 'fulan 1', hari: 'senin', jam: '07.00-09.00' },
];

const Table = ({ data }) => {
    return (
        <table className="w-full border-collapse border">
            <thead>
                <tr>
                    <th className="border p-1 w-[10px]">No</th>
                    <th className="border p-2 w-[100px]">Program</th>
                    <th className="border p-2 w-[200px]">Pengajar</th>
                    <th className="border p-2 w-[60px]">Hari</th>
                    <th className="border p-2 w-[60px]">Jam</th>
                    <th className="border p-2 w-[0px]">Opsi</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.No}>
                        <td className="border p-2">{item.No}</td>
                        <td className="border p-2 text-center">{item.program}</td>
                        <td className="border p-2 text-center">{item.pengajar}</td>
                        <td className="border p-2 text-center">{item.hari}</td>
                        <td className="border p-2 text-center">{item.jam}</td>
                        <td className='text-sm border flex justify-center'>
                            <div className=''>
                                <button className='bg-[#169859] text-[12px] text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                                    <span>Edit</span>
                                </button>
                                <button className='bg-red-400 text-[12px] text-[#f3faf6] p-1 w-20 mt-1 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
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

export default PengaturanKelas