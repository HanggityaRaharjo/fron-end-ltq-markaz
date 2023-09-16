import React, { useEffect, useState } from 'react'
import Layout from '../../../layouts/Layout'



function PresensiKehadiran() {
    const [dataTabel, setDataTabel] = useState([])
    const [shomodal, setShowModal] = useState(false)

    const HandlerPresensi = () => {
        setShowModal(true)
    }

    const data = [
        {
            name: 'ujang enam',
            hari: '',
            sakit: '',
            absen: '',
            izin: ''
        },
        {
            name: 'Rijal',
            hari: '',
            sakit: '',
            absen: '',
            izin: ''
        },
        {
            name: 'wahyu',
            hari: '',
            sakit: '',
            absen: '',
            izin: ''
        },
        {
            name: 'dani',
            hari: '',
            sakit: '',
            absen: '',
            izin: ''
        },
    ]

    useEffect(() => {
        setDataTabel(data);
    }, [])


    return (
        <Layout>
            <ModalEditPresensi
                show={shomodal}
                close={setShowModal}
            />
            <section className='p-5 bg-white'>
                <div>
                    <div>
                        <h1 className='font-bold text-xl'>Presensi Kehadiran</h1>
                    </div>
                    <div className='mt-10 overflow-auto'>
                        <table className='w-full'>
                            <thead>
                                <tr className='bg-black text-white'>
                                    <td className='p-2 font-bold  text-center w-[50px]'>No</td>
                                    <td className='p-2 font-bold  text-center'>Nama</td>
                                    <td className='p-2 font-bold  text-center w-[100px]'>Hadir</td>
                                    <td className='p-2 font-bold  text-center w-[100px]'>Sakit</td>
                                    <td className='p-2 font-bold  text-center w-[100px]'>Absen</td>
                                    <td className='p-2 font-bold  text-center w-[100px]'>Izin</td>
                                    <td className='p-2 font-bold  text-center w-[100px]'>action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {dataTabel && dataTabel.map((item, index) =>
                                    <TabelData
                                        input={HandlerPresensi}
                                        key={index}
                                        no={index + 1}
                                        name={item.name}
                                        hadir={item.hadir}
                                        sakit={item.sakit}
                                        absen={item.absen}
                                        izin={item.izin}
                                    />

                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Layout>
    )
}


const TabelData = ({ no, name, hadir, sakit, absen, izin, input }) => {
    return (
        <tr className='text-sm hover:bg-gray-100'>
            <td className='p-2 border text-center'>{no}</td>
            <td className='p-2 border '>{name}</td>
            <td className='p-2 border text-center'>{hadir}</td>
            <td className='p-2 border text-center'>{sakit}</td>
            <td className='p-2 border text-center'>{absen}</td>
            <td className='p-2 border text-center'>{izin}</td>
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


function ModalEditPresensi({ show, close }) {
    return (
        <div className='fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-30 justify-center items-center'
            style={{ display: show ? "block" : "none" }}>
            <div className='flex justify-center items-center h-full w-full'>
                <div className='p-5 max-h-[600px] w-[400px] bg-white rounded-lg'>
                    <h1 className='font-bold'>Edit Presensi</h1>
                    <div className='my-5'>
                        <p className='mb-5'>Ujang Enam</p>
                        <table className='w-full bg-white border shadow-lg'>
                            <thead>
                                <tr className='bg-black text-white rounded-lg'>
                                    <td className='p-2 text-center'>Hadir</td>
                                    <td className='p-2 text-center'>Sakit</td>
                                    <td className='p-2 text-center'>Izin</td>
                                    <td className='p-2 text-center'>Absen</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-2 text-center'><input type="checkbox" name="hadir" id="" /></td>
                                    <td className='p-2 text-center'><input type="checkbox" name="sakit" id="" /></td>
                                    <td className='p-2 text-center'><input type="checkbox" name="izin" id="" /></td>
                                    <td className='p-2 text-center'><input type="checkbox" name="absen" id="" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex gap-5 my-2 justify-end items-center translate-y-5">
                            <button
                                type="submit"
                                // onClick={() => HandleNextPost()}
                                className="bg-green-700 rounded-lg px-5 py-2 text-white min-w-[100px]">
                                Ya
                            </button>
                            <button
                                onClick={() => close(false)}
                                className="bg-green-700 rounded-lg px-5 py-2 text-white min-w-[100px]"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PresensiKehadiran