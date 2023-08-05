import React from 'react'
import { useState } from 'react';
import Layout from '../../../layouts/Layout'
import DataTable from 'react-data-table-component';



function PengatuanProgram() {
    const Button = () => {
        return (
            <div className='flex gap-2'>
                <button className='bg-[#169859] text-[12px] text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                    <span>Edit</span>
                </button>
                <button className='bg-red-400 text-[12px] text-[#f3faf6] p-1 w-20 mt-1 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                    <span>Hapus</span>
                </button>
            </div>
        )

    }
    const colums = [
        {
            name: 'No',
            selector: row => row.no,
            minWidth: '100px',
            width: '100px',
        },
        {
            name: 'Name',
            selector: row => row.name,
            minWidth: '500px',
            width: '70%',
        },
        {
            name: 'ation',
            selector: row => row.action,
            cell: (row) => (<Button />),
            minWidth: '300px',
            width: '20%',
        },
    ]

    const data = [
        {
            no: 1,
            name: 'Tahfidz',

        },
        {
            no: 2,
            name: 'Tartil',

        },
        {
            no: 3,
            name: 'Talaqqi',

        },
        {
            no: 4,
            name: 'Bahasa Arab',

        },
    ]


    return (
        <Layout>
            <section className='p-5 bg-white font-poppins'>
                <div>
                    <h1>Pengaturan Program</h1>
                </div>
                <div className='mt-5'>
                    <AddModal />
                </div>
                <div className='mt-5 shadow-md'>
                    <DataTable columns={colums} data={data}></DataTable>
                </div>
                <div className='flex justify-end mt-10 pr-5'>
                    <button className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-20 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                        <span>Save</span>
                    </button>
                </div>

            </section>
        </Layout>
    )
}

const FormInput = ({ label, type }) => {
    if (type === "text") {
        return (
            <div className="flex flex-col">
                <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                    {label}
                </label>
                <input
                    type="text"
                    className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                    placeholder="Type here.."
                />
            </div>
        );
    }
    if (type === "date") {
        return (
            <div className="flex flex-col">
                <div className="flex items-end gap-2">
                    <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                        {label}
                    </label>
                    <small>Hari/Bulan/Tahun</small>
                </div>
                <input
                    type="date"
                    className="w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                    placeholder="Type here.."
                />
            </div>
        );
    }
    if (type === "area") {
        return (
            <div className="flex flex-col  col-span-2">
                <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                    {label}
                </label>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="border border-[#169859] rounded-lg rounded-tl-none col-span-3 p-5"
                    placeholder="Type Here"
                ></textarea>
            </div>
        );
    }
};

function AddModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <button onClick={handleOpenModal} className="bg-[#169859] text-[#f3faf6] p-2  rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <span className='text-[12px]'>Tambah program</span>
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-20">
                    <div className="bg-white w-[500px] rounded-lg p-6">
                        <h2 className="text-lg font-bold mb-4">Masukan program</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            <FormInput type={'text'} label={'program'} />
                            <FormInput type={'text'} label={'program'} />
                        </div>
                        <button onClick={handleCloseModal} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">

                            <span>close</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}



export default PengatuanProgram