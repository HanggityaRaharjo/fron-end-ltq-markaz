import React from 'react'
import { useState } from 'react'
import Layout from '../../layouts/Layout'
import DataTable from 'react-data-table-component'
import BRI from '../../assets/logo/BRI.png'
import BSI from '../../assets/logo/BSI.png'
import BCA from '../../assets/logo/BCA.png'



function Pembayaran() {
    const columns = [
        {
            name: 'No',
            selector: (row) => row.no,
            width: '100px'
        },
        {
            name: 'program',
            selector: (row) => row.program,
            width: '500px'
        },
        {
            name: 'jumlah',
            selector: (row) => row.jumlah,
            width: '200px'
        },
    ]

    const data = [
        {
            no: 1,
            program: 'talaqqi',
            jumlah: 'Rp.200.000'
        }
    ]



    return <Layout>
        <section className='min-h-screen bg-white font-poppins'>
            <div className='flex justify-center'>
                <div className='w-[800px] h-[400px] mt-10 shadow-md rounded-md'>
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
            <div className='mb-10 mt-10'>
                <h1 className='font-semibold'>Pembayaran Via Bank</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='w-[300px] h-[200px] flex justify-center items-center relative rounded-md bg-white shadow-md hover:scale-105 transition duration-150'>
                        <div className='flex justify-center h-[100px] w-[150px] items-center'>
                            <img src={BRI} alt="" className='h-full w-full' />
                        </div>
                        <span className='absolute bottom-0 bg-slate-400 text-white w-full text-center py-2 rounded-b-md'>NoRek: xxxxxxxxx</span>
                    </div>
                    <div className='w-[300px] h-[200px] flex justify-center items-center relative rounded-md bg-white shadow-md hover:scale-105 transition duration-150'>
                        <div className='flex justify-center items-center h-[100px] w-[150px] '>
                            <img src={BSI} alt="" className='h-full w-full' />
                        </div>
                        <span className='absolute bottom-0 bg-slate-400 text-white w-full text-center py-2 rounded-b-md'>NoRek: xxxxxxxxx</span>
                    </div>
                    <div className='w-[300px] h-[200px] flex justify-center items-center relative rounded-md bg-white shadow-md hover:scale-105 transition duration-150'>
                        <div className='flex justify-center items-center h-[100px] w-[150px]'>
                            <img src={BCA} alt="" className='h-full w-full' />
                        </div>
                        <span className='absolute bottom-0 bg-slate-400 text-white w-full text-center py-2 rounded-b-md'>NoRek: xxxxxxxxx</span>
                    </div>

                </div>
            </div>
            <div className='mt-10 flex justify-center items-center'>
                <div>
                    <h1 className='text-center font-bold'>Upload</h1>
                    <p className='text-center'>bukti pembayaran</p>
                    <div className='w-[400px] mt-10 flex justify-center'>
                        <ImageUploader />
                    </div>
                </div>
            </div>
            <div className='flex justify-end m-10'>
                <button className='bg-[#169859] text-white p-2 rounded-md'>
                    submit
                </button>
            </div>
        </section>
    </Layout>
}

const ImageUploader = ({ name }) => {
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setImagePreview("");
        }

        // Checking if the selected file is an image
        if (selectedFile && selectedFile.type.split("/")[0] !== "image") {
            setErrorMessage("File harus berupa gambar.");
        } else {
            setErrorMessage("");
        }
    };

    return (
        <>
            <div className="w-1/2">
                <div className="flex justify-center">
                    <div className="w-full">
                        {imagePreview ? (
                            <div className="flex justify-center">
                                <div className="w-[290px] h-[150px]">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-[290px] h-[150px] rounded-md object-center object-cover"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center">
                                <div className="w-[290px] h-[150px] bg-gray-200 rounded-md flex justify-center items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-20 h-20 text-gray-300"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        )}
                        <div className="mt-5">
                            <div
                                onClick={(e) => {
                                    e.target.firstChild.click();
                                }}
                                className=" flex justify-center items-center w-[480] h-10 bg-[#169859] bg-opacity-60 rounded-lg cursor-pointer"
                            >
                                <input
                                    name={name}
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className="border h-full w-full relative -z-10 hidden"
                                />
                                <div className="flex justify-center gap-5 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                        />
                                    </svg>
                                    <p className="text-sm font-semibold text-white">
                                        Upload File
                                    </p>
                                </div>

                                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pembayaran