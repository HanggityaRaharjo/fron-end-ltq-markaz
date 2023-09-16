import React from 'react'
import Layout from '../../../layouts/Layout'
import { Link } from 'react-router-dom'

function PengaturanAkunGuru() {
    return (
        <Layout>
            <section className='p-5 bg-white shadow-md rounded-md'>
                <div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl'>Pengaturan Akun</h1>
                        <hr className='border-black' />
                    </div>
                    <div className='flex justify-end mt-10'>
                        <Link to={'/form/pengaturan-akun-guru'} className="px-5 py-1 bg-[#169859] text-white rounded-md active:scale-95 duration-300">Edit</Link>
                    </div>
                    <div>
                        <div className='border border-[#5FB68A80] mt-5 flex flex-col gap-2 p-5 rounded-md'>
                            <h1 className='mb-5 font-bold text-xl'>Pengguna</h1>
                            <div className='flex gap-5'>
                                <label className='w-[200px] font-semibold'>Nama Lengkap</label>
                                <p className='w-full'>Aceng firmansyah</p>
                            </div>
                            <hr className='border-[#5FB68A80]' />
                            <div className='flex gap-5'>
                                <label className='w-[200px] font-semibold'>Nama Pengguna</label>
                                <p className='w-full'>Aceng</p>
                            </div>
                        </div>
                        <div className='border border-[#5FB68A80] mt-10 flex flex-col gap-2 p-5 rounded-md'>
                            <h1 className='mb-5 font-bold text-xl'>Kontak</h1>
                            <div className='flex gap-5'>
                                <label className='w-[200px] font-semibold'>Hp</label>
                                <p className='w-full'>09878778687</p>
                            </div>
                            <hr className='border-[#5FB68A80]' />
                            <div className='flex gap-5'>
                                <label className='w-[200px] font-semibold'>Email</label>
                                <p className='w-full'>Aceng@gmail.com</p>
                            </div>
                        </div>
                        <div className='border border-[#5FB68A80] mt-10 flex flex-col gap-2 p-5 rounded-md'>
                            <h1 className='mb-5 font-bold text-xl'>Sosial Media</h1>
                            <div className='flex gap-5'>
                                <label className='w-[200px] font-semibold'>Facebook</label>
                                <p className='w-full'>Aceng@gmail.com</p>
                            </div>
                            <hr className='border-[#5FB68A80]' />
                            <div className='flex gap-5'>
                                <label className='w-[200px] font-semibold'>Email</label>
                                <p className='w-full'>Aceng@gmail.com</p>
                            </div>
                        </div>
                        <div className='border border-[#5FB68A80] mt-10 flex flex-col gap-2 p-5 rounded-md'>
                            <h1 className='mb-5 font-bold text-xl'>Password</h1>
                            <div className='flex gap-5'>
                                <label className='w-[200px] font-semibold'>password</label>
                                <p className='w-full'>**********</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PengaturanAkunGuru