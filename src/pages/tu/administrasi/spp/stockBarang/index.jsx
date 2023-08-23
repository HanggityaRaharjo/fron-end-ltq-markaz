import React, { useEffect, useState } from 'react'
import Layout from '../../../../../layouts/Layout'

function StockBarang() {
    const [showDataBarang, setShowDataBarang] = useState([])
    const [dataBarangMasuk, showDataBarangMasuk] = useState([])
    const [dataBarangKeluar, showDataBarangKeluar] = useState([])
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

    const barangMasuk = [
        {
            name: 'pulpen',
            jumlah_barang: 20,
            tanggal: '12-11-2023',
            deskripsi: 'cas ckjasc kajs ',

        },
    ]

    const barangKeluar = [
        {
            name: 'pulpen',
            jumlah_barang: 20,
            tanggal: '12-11-2023',
            deskripsi: 'cas ckjasc kajs ',
        },
    ]
    useEffect(() => {
        setShowDataBarang(dataBarang)
    })

    useEffect(() => {
        showDataBarangMasuk(barangMasuk)
    })

    useEffect(() => {
        showDataBarangKeluar(barangKeluar)
    })



    return (
        <Layout>
            <TambahBarangMasuk
                show={showMoodal}
                close={setShowModal}
            />
            <section className='p-5'>
                <div className=''>
                    <div className='mb-10'>
                        <h1 className='font-bold text-2xl'>Barang</h1>
                    </div>
                    {/* Tabel Barang */}
                    <div>
                        <div className='mb-2'>
                            <div className='flex justify-between'>
                                <button
                                    onClick={() => HandleTambah()}
                                    className="border bg-black text-white p-2 w-28 rounded-lg font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                                >
                                    <span>Tambah</span>
                                </button>
                                <input type="text" className='border h-10 px-2' />
                            </div>
                        </div>
                        <div className='bg-white'>
                            <table className='w-full shadow-lg'>
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
                    {/* Tabel Barang Masuk */}
                    <div className='mt-10'>
                        <div className='py-5'>
                            <h1 className='font-bold text-xl'>Barang Masuk</h1>
                        </div>
                        <div className='bg-white'>
                            <table className='w-full shadow-lg'>
                                <thead>
                                    <tr className='bg-black text-white text-center'>
                                        <td className='p-2  w-[50px]'>No</td>
                                        <td className='p-2 w-[400px]'>Nama barang</td>
                                        <td className='p-2  w-[200px]'>Jumlah Barang</td>
                                        <td className='p-2  w-[200px]'>Tanggal</td>
                                        <td className='p-2  w-[200px]'>Deskripsi</td>
                                        <td className='p-2  w-[200px]'>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataBarangMasuk && dataBarangMasuk.map((item, index) =>
                                        <TabelDataMasuk
                                            no={index + 1}
                                            name={item.name}
                                            jumlah_barang={item.jumlah_barang}
                                            tanggal={item.tanggal}
                                            deskripsi={item.deskripsi}
                                        />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Tabel Barang Keluar */}
                    <div className='mt-10'>
                        <div className='py-5'>
                            <h1 className='font-bold text-xl'>Barang Keluar</h1>
                        </div>
                        <div className='bg-white'>
                            <table className='w-full shadow-lg'>
                                <thead>
                                    <tr className='bg-black text-white text-center'>
                                        <td className='p-2  w-[50px]'>No</td>
                                        <td className='p-2 w-[400px]'>Nama barang</td>
                                        <td className='p-2  w-[200px]'>Jumlah Barang</td>
                                        <td className='p-2  w-[200px]'>Tanggal Keluar</td>
                                        <td className='p-2  w-[200px]'>Deskripsi</td>
                                        <td className='p-2  w-[200px]'>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataBarangKeluar && dataBarangKeluar.map((item, index) =>
                                        <TabelDataKeluar
                                            no={index + 1}
                                            name={item.name}
                                            jumlah_barang={item.jumlah_barang}
                                            tanggal={item.tanggal}
                                            deskripsi={item.deskripsi}
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


const TabelDataMasuk = ({ no, name, jumlah_barang, tanggal, deskripsi }) => {
    return (
        <tr>
            <td className='p-2 border text-center'>{no}</td>
            <td className='p-2 border'>{name}</td>
            <td className='p-2 border text-center'>{jumlah_barang}</td>
            <td className='p-2 border text-center'>{tanggal}</td>
            <td className='p-2 border text-center'>{deskripsi}</td>
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

const TabelDataKeluar = ({ no, name, jumlah_barang, tanggal, deskripsi }) => {
    return (
        <tr>
            <td className='p-2 border text-center'>{no}</td>
            <td className='p-2 border'>{name}</td>
            <td className='p-2 border text-center'>{jumlah_barang}</td>
            <td className='p-2 border text-center'>{tanggal}</td>
            <td className='p-2 border text-center'>{deskripsi}</td>
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

const TambahBarangMasuk = ({ show, close }) => {

    const [active, setActive] = useState([])

    return (
        <div className='fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-50 justify-center items-center'
            style={{ display: show ? "flex" : "none" }}>
            <div className='flex justify-center items-center h-full'>
                <div className='bg-white max-h-[500px] w-[400px]  rounded-md p-5'>
                    <div>
                        <h1 className='font-bold'>Tambah</h1>
                    </div>

                    <div className='mt-5 flex gap-2'>
                        <button className='p-2 bg-black text-white active:scale-95 duration-300'><label>Barang Masuk</label></button>
                        <button className='p-2 bg-black text-white active:scale-95 duration-300'><label>Barang Kaluar</label></button>
                    </div>
                    <div className='mt-5 flex flex-col gap-2'>
                        <div className="flex flex-col">
                            <label className="bg-black text-[#f3faf6] rounded-t-md text-center w-40 flex justify-center items-center ">
                                Nama Barang
                            </label>
                            <input
                                name="nama_tagihan"
                                type="text"
                                class="w-full border border-black rounded-md p-2 h-10 rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bg-black text-[#f3faf6] rounded-t-md text-center w-40 flex justify-center items-center ">
                                Barang Masuk
                            </label>
                            <input
                                name="nama_tagihan"
                                type="text"
                                class="w-full border border-black rounded-md p-2 h-10 rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bg-black text-[#f3faf6] rounded-t-md text-center w-40 flex justify-center items-center ">
                                Harga baran
                            </label>
                            <input
                                name="nama_tagihan"
                                type="text"
                                class="w-full border border-black rounded-md p-2 h-10 rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bg-black text-[#f3faf6] rounded-t-md text-center w-40 flex justify-center items-center ">
                                Sisa Barang
                            </label>
                            <input
                                name="nama_tagihan"
                                type="text"
                                class="w-full border border-black rounded-md p-2 h-10 rounded-tl-none"
                                placeholder="Type here.."
                            />
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
        </div>
    )
}

export default StockBarang