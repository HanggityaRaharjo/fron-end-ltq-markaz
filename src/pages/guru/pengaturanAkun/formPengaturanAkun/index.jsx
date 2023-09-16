import React from 'react'
import Layout from '../../../../layouts/Layout'

function FormPengaturanAkunGuru() {
    return (
        <Layout>
            <section className='p-5 bg-white shadow-md rounded-md'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Pengaturan Akun</h1>
                    <hr className='border-black' />
                </div>
                <div className='flex flex-col gap-2 p-5 mt-10'>
                    <div className='border border-[#5FB68A80] flex flex-col gap-2 p-5 rounded-md'>
                        <h1 className='mb-5 font-bold text-xl'>Pengguna</h1>
                        <div className="flex flex-col">
                            <label className="font-medium" >Nama Pengguna</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                    </div>
                    <div className='border border-[#5FB68A80] mt-10 flex flex-col gap-2 p-5 rounded-md'>
                        <h1 className='mb-5 font-bold text-xl'>Kontak</h1>
                        <div className="flex flex-col">
                            <label className="font-medium" >No Hp</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >No Alternatif</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Email</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                    </div>
                    <div className='border border-[#5FB68A80] mt-10 flex flex-col gap-2 p-5 rounded-md'>
                        <h1 className='mb-5 font-bold text-xl'>Sosial Media</h1>
                        <div className="flex flex-col">
                            <label className="font-medium" >Facebook</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Instagram</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                    </div>
                    <div className='border border-[#5FB68A80] mt-10 flex flex-col gap-2 p-5 rounded-md'>
                        <h1 className='mb-5 font-bold text-xl'>Password</h1>
                        <div className="flex flex-col">
                            <label className="font-medium" >Panssword</label>
                            <input type="password" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                    </div>
                </div>
                <div className=' flex justify-end gap-5 p-5'>
                    <button className='bg-[#169859] text-white px-4 py-2 rounded-md active:scale-95 duration-300'>Kembali</button>
                    <button className='bg-[#169859] text-white px-4 py-2 rounded-md active:scale-95 duration-300'>Simpan</button>
                </div>
            </section>
        </Layout>
    )
}

export default FormPengaturanAkunGuru