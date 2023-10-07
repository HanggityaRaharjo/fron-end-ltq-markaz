import React, { useState } from 'react'
import Layout from '../../../layouts/Layout'

function DetailTugas() {
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");


    const handleUploadFile = (e) => {
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
        <Layout>
            <div className='p-5'>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-2 w-[600px] rounded-md shadow-md bg-white p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='font-bold text-2xl'>Tugas menulis bahasa arab</h1>
                                        <p>H. Endang . 17 agustus 2024</p>
                                        <span>100 poin</span>
                                    </div>
                                    <div className='flex flex-col justify-between items-end'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg>
                                        <span>Tenggat: 24 Des 2022</span>
                                    </div>
                                </div>
                                <hr className='mt-2 border-black' />
                                <div>
                                    <p>sertakan link video persentasi tugas akhir semester dalam ekstention youtube
                                        Setiap mahasiswa mengumpulkan tugas di classroom</p>
                                </div>
                                <hr className='mt-2 border-black' />

                                <div className='flex flex-col gap-1'>
                                    <div className='flex gap-2 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        <span>komentar</span>
                                    </div>
                                    <div>
                                        <button><span>Tambah komentar kelas</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white p-5'>
                            <div>xas</div>
                        </div>
                    </div>
                    <div>
                        <div className='p-5 w-[400px] rounded-md shadow-md bg-white'>
                            <div className='flex justify-between'>
                                <h2>Tugas</h2>
                                <span className='text-red-400'>Belum Diserahkan</span>
                            </div>
                            <div className="mt-5 flex justify-center">
                                <div
                                    onClick={(e) => {
                                        e.target.firstChild.click();
                                    }}
                                    className=" flex justify-center items-center w-full h-10 bg-[#169859] bg-opacity-60 rounded-md cursor-pointer"
                                >
                                    <input
                                        type="file"
                                        onChange={handleUploadFile}
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

                                    {/* {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DetailTugas