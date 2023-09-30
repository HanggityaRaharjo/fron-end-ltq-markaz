import React, { useState } from 'react'
import Layout from '../../../layouts/Layout'

function PresensiGuru() {
    const [isShowDetail, setIsShowDetail] = useState(false)


    const data = [
        {
            index: 1,
            program: 'Tartil',
            jam: '07.00 - 08.30',
            materi: 'membaca panjang pendek harakat',
            descripsi: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis magnam ipsa ipsam ratione omnis aliquam dolores eum, nisi cumque corrupti vero quidem tempora? Reprehenderit officia accusantium facere laboriosam eius?'
        },
        {
            index: 2,
            program: 'Tilawah',
            jam: '09.00 - 11.30',
            materi: 'membaca panjang pendek harakat',
            descripsi: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis magnam ipsa ipsam ratione omnis aliquam dolores eum, nisi cumque corrupti vero quidem tempora? Reprehenderit officia accusantium facere laboriosam eius?'
        }
    ]

    const toggleDetail = (index) => {
        setIsShowDetail((prevVisibility) => ({
            ...prevVisibility,
            [index]: !prevVisibility[index],
        }));
    };

    return (
        <Layout>
            <section className='p-5'>
                <div>
                    <h1 className='font-bold text-2xl'>Presensi</h1>
                </div>

                <div className='mt-10 bg-white shadow-lg overflow-auto'>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-black text-white'>
                                <td className='py-2 px-1  text-center'>No</td>
                                <td className='py-2 px-2  text-center'>Program</td>
                                <td className='py-2 px-2  text-center'>Jam</td>
                                <td className='py-2 px-2  text-center'>Absen</td>
                                <td className='py-2 px-2  text-center'>action</td>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {data.map((item) => (
                                <React.Fragment key={item.index}>
                                    <tr className=''>
                                        <td className='p-2 border text-center'>{item.index}</td>
                                        <td className='p-2 border text-center'>{item.program}</td>
                                        <td className='p-2 border text-center'>{item.jam}</td>
                                        <td className='p-2 border text-center'></td>
                                        <td className='p-2 border text-center'>
                                            <div className='flex justify-center gap-2'>
                                                <button className='text-blue-500 active:scale-95 transition duration-150'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => toggleDetail(item.index)} className='text-green-500 active:scale-95 transition duration-150'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>

                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={5} className=''>
                                            <div className={`flex px-2 flex-col gap-2  overflow-hidden transition-all duration-200 ${isShowDetail[item.index] ? 'h-[150px]' : 'h-[0px]'}`}>
                                                <h3>Detail</h3>
                                                <h2>Materi : <span>{item.materi}</span></h2>
                                                <p>
                                                    {item.descripsi}
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}


                        </tbody>
                    </table>
                </div>
            </section>
        </Layout >
    )
}

export default PresensiGuru