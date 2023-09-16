import React from 'react'
import Layout from '../../../../layouts/Layout'

function FormAlurKas() {
    return (
        <Layout>
            <section className='p-5'>

                <div>
                    <h1 className='font-bold text-2xl'>Tambah Data Transaksi</h1>
                </div>
                <div className='mt-10 bg-white p-5 flex flex-col gap-5'>
                    <div className='flex'>
                        <label className='bg-black px-2 py-2 w-52 text-white rounded-l-md'> Nama transaksi</label>
                        <input type="text" className='border px-2 py-2 w-full rounded-r-md' />
                    </div>
                    <div className='flex'>
                        <label className='bg-black px-2 py-2 w-52 text-white rounded-l-md'> Kategori id</label>
                        <input type="text" className='border px-2 py-2 w-full rounded-r-md' />
                    </div>
                    <div className='flex'>
                        <label className='bg-black px-2 py-2 w-52 text-white rounded-l-md'> Tanggal</label>
                        <input type="date" className='border px-2 py-2 w-full rounded-r-md' />
                    </div>
                    <div className='flex'>
                        <label className='bg-black px-2 py-2 w-52 text-white rounded-l-md'> Pemasukan</label>
                        <input type="text" className='border px-2 py-2 w-full rounded-r-md' />
                    </div>
                    <div className='flex'>
                        <label className='bg-black px-2 py-2 w-52 text-white rounded-l-md'> Pengeluaran</label>
                        <input type="text" className='border px-2 py-2 w-full rounded-r-md' />
                    </div>
                    <div className='flex justify-end gap-2'>
                        <button
                            className='bg-black text-white px-4 py-2 rounded-md flex gap-2 active:scale-95 duration-300'>
                            tambah</button>
                        <button
                            className='bg-black text-white px-4 py-2 rounded-md flex gap-2 active:scale-95 duration-300'>
                            batal</button>
                    </div>
                </div>
            </section>
        </Layout >
    )
}



export default FormAlurKas