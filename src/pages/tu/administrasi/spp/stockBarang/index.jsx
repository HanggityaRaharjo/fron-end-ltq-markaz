import React, { useEffect, useState } from 'react'
import Layout from '../../../../../layouts/Layout'

function StockBarang() {
    const [showDataBarang, setShowDataBarang] = useState([])
    const [showMoodal, setShowModal] = useState(false)

    const HandleTambah = () => {
        setShowModal(true)
    }

    const dataBarang = [
        {
            name: 'baju',
            harga: 20000,
            sisa: 11,
        }
    ]

    useEffect(() => {
        setShowDataBarang(dataBarang)
    })



    return (
        <Layout>
            <TambahBarang
                show={showMoodal}
                close={setShowModal}
            />
            <section className='p-5'>
                <div className=''>
                    <div className='mb-10'>
                        <h1 className='font-bold text-2xl'>Barang</h1>
                    </div>
                    {/* Tabel Barang */}
                    <div className='bg-white p-5 rounded-md shadow-md'>
                        <div className='mb-2'>
                            <div className='py-5 flex justify-between items-center'>
                                <div className='flex gap-2'>
                                    <span className='font-semibold'>Data</span>
                                    <select className='border'>
                                        <option value="">5</option>
                                        <option value="">10</option>
                                        <option value="">20</option>
                                        <option value="">25</option>
                                    </select>
                                </div>
                                <div>
                                    <div>
                                        <input type="text" className='border border-black px-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-black text-white text-center'>
                                        <td className='p-2  w-[50px]'>No</td>
                                        <td className='p-2 w-[400px]'>Nama barang</td>
                                        <td className='p-2  w-[200px]'>Harga</td>
                                        <td className='p-2  w-[200px]'>Sisa</td>
                                        <td className='p-2  w-[200px]'>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {showDataBarang && showDataBarang.map((item, index) =>
                                        <TabelBarang
                                            no={index + 1}
                                            name={item.name}
                                            harga={item.harga}
                                            sisa={item.sisa}
                                        />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section >
        </Layout >
    )
}

const TabelBarang = ({ no, name, harga, sisa }) => {
    return (
        <tr>
            <td className='p-2 border text-center'>{no}</td>
            <td className='p-2 border'>{name}</td>
            <td className='p-2 border text-center'>{harga}</td>
            <td className='p-2 border text-center'>{sisa}</td>
            <td className='p-2 border text-center'>
                <div className='flex justify-center gap-5 '>
                    <button
                        onClick={() => input()}
                        className='text-blue-500 active:scale-95 transition duration-150'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                    <button className='text-red-500 active:scale-95 transition duration-150'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>

                    </button>
                </div>
            </td>
        </tr>
    )
}

const TambahBarang = ({ show, close }) => {

    return (
        <div className='fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-50 justify-center items-center'
            style={{ display: show ? "flex" : "none" }}>
            <div className='flex justify-center items-center h-full'>
                <div className='bg-white max-h-[500px] w-[400px]  rounded-md p-5'>
                    <div>
                        <h1 className='font-bold text-xl'>Tambah</h1>
                        <hr />
                    </div>
                    <div className='mt-5 flex flex-col gap-2'>
                        <div className="flex flex-col">
                            <label className="font-medium" >Nama Barang</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Harga Barang</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Sisa Barang</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                    </div>
                    <div className="flex gap-5 mt-5">
                        <button type="submit" className="bg-black text-[#f3faf6] p-2 w-full rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                            <span>Submit</span>
                        </button>
                        <button
                            onClick={() => close()}
                            className="border border-black text-black p-2 w-full rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                        >
                            <span>Cancel</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockBarang