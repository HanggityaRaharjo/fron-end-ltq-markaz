import React from 'react'
import Layout from '../../../layouts/Layout'

function StatusPembayaran() {
    return <Layout>
        <section className=' bg-white flex justify-center items-center py-20'>
            <div className='h-[400px] w-[400px] shadow-lg rounded-lg flex justify-center pt-20 border'>
                <div>
                    <div className='flex justify-center'>
                        <div className=' flex justify-center items-center h-[100px] w-[100px] bg-yellow-300 rounded-full p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className='mt-10 text-center px-10'>
                        <p className='text-[20px] font-semibold'>Pending</p>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex tempore veniam</p>

                    </div>
                </div>
            </div>
        </section>
    </Layout>
}



export default StatusPembayaran