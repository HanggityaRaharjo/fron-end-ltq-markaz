import React from 'react'
import { useState } from 'react';
import Layout from '../../../../../layouts/Layout';


function UbahBiodataPegawai() {
    const [isSwitch, setIsSwitch] = useState('biodata')


    return (
        <Layout>
            <section className='font-poppins p-5'>
                <div className='flex flex-col gap-2 bg-white shadow-md p-5'>
                    <h1 className='font-bold text-xl'>Ubah Biodata</h1>
                    <hr className='border-black' />
                    <p className="bg-[#5FB68A80] px-5 py-2 rounded-md">Lengkapi biodata diri anda</p>
                </div>
                <div>
                    <div className="flex flex-col gap-2 bg-white shadow-md p-5">
                        <div className="flex flex-col">
                            <label className="font-medium" >Nama Lengkap</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Tempat Lahir</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Tanggal Lahir</label>
                            <input type="date" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Jenis kelamin</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Alamat</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Provinsi</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Kota</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Kecamatan</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Kelurahan</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >No Wa</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >No Alterntif</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Pekerjaan</label>
                            <input type="text" className='h-10 border-b-2 focus:border-[#169859]  w-full outline-none' />
                        </div>
                    </div>
                    <InputFoto />
                </div>




                <div className='mt-10 flex justify-end gap-5'>
                    <button className='bg-[#169859] text-white px-4 py-2 rounded-md active:scale-95 duration-300'>Kembali</button>
                    <button className='bg-[#169859] text-white px-4 py-2 rounded-md active:scale-95 duration-300'>Simpan</button>
                </div>
            </section>

        </Layout>
    )
}

const InputFoto = () => {
    const [file, setFile] = useState(null);
    const [imagePreviewKtp, setImagePreviewKtp] = useState("");
    const [imagePreviewProfil, setImagePreviewProfil] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFileChangeKTP = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewKtp(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setImagePreviewKtp("");
        }

        // Checking if the selected file is an image
        if (selectedFile && selectedFile.type.split("/")[0] !== "image") {
            setErrorMessage("File harus berupa gambar.");
        } else {
            setErrorMessage("");
        }
    };

    const handleFileChangeProfil = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewProfil(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setImagePreviewProfil("");
        }

        // Checking if the selected file is an image
        if (selectedFile && selectedFile.type.split("/")[0] !== "image") {
            setErrorMessage("File harus berupa gambar.");
        } else {
            setErrorMessage("");
        }
    };
    return (
        <div className='mt-10 bg-white shadow-md p-5'>
            <div className="flex items-center justify-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full">
                        {imagePreviewKtp ? (
                            <div className="flex justify-center">
                                <div className="w-[285px] h-[190px]">
                                    <img
                                        src={imagePreviewKtp}
                                        alt="Preview"
                                        className="w-[285px] h-[190px] rounded-md object-center object-cover"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center">
                                <div className="w-[285px] h-[190px] bg-gray-200 rounded-md flex justify-center items-center">
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
                        <div className="mt-5 flex justify-center">
                            <div
                                onClick={(e) => {
                                    e.target.firstChild.click();
                                }}
                                className=" flex justify-center items-center w-[285px] h-10 bg-[#169859] bg-opacity-60 rounded-md cursor-pointer"
                            >
                                <input
                                    name={name}
                                    type="file"
                                    onChange={handleFileChangeKTP}
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
                    <div className="w-full">
                        {imagePreviewProfil ? (
                            <div className="flex justify-center">
                                <div className="w-[190px] h-[190px] rounded-full overflow-hidden">
                                    <img
                                        src={imagePreviewProfil}
                                        alt="Preview"
                                        className="w-[285px] h-[190px] rounded-md object-center object-cover"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center">
                                <div className="w-[190px] h-[190px] bg-gray-200 rounded-full flex justify-center items-center">
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
                        <div className="mt-5 flex justify-center">
                            <div
                                onClick={(e) => {
                                    e.target.firstChild.click();
                                }}
                                className=" flex justify-center items-center w-[285px] h-10 bg-[#169859] bg-opacity-60 rounded-md cursor-pointer"
                            >
                                <input
                                    name={name}
                                    type="file"
                                    onChange={handleFileChangeProfil}
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
        </div>
    )
}

export default UbahBiodataPegawai