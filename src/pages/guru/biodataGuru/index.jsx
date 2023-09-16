import React, { useEffect, useState } from 'react'
import Layout from '../../../layouts/Layout'
import foto from '../../../assets/founder/founder.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'


function BiodataGuru() {
    const [showModal, setShowModal] = useState(false)
    const [showEditFoto, setShowEditFoto] = useState(false)
    const [isActive, setIsActive] = useState('biodata')


    const HandleEdit = () => {
        setShowModal(true)
    }

    const HandleFoto = () => {
        setShowEditFoto(true)
    }

    return (
        <Layout>
            <section className='p-5'>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">Biodata</h1>
                    <hr className="border-black" />
                    <p className="bg-[#5FB68A80] px-5 py-2 rounded-md">Lengkapi biodata diri anda</p>
                </div>
                <div className='bg-white shadow-md p-5 mt-5 '>
                    <div className=' flex flex-col md:flex-row gap-5'>
                        <div className='h-[150px] w-[150px] rounded-md bg-gray-500 overflow-hidden object-cover'>
                            <img src={foto} alt="" className='object-cover h-full' />
                        </div>
                        <div className=''>
                            <div className='flex flex-col gap-2'>
                                <h1 className='px-2 font-bold text-[24px]'>Ujang Enam S.T</h1>
                                <table>
                                    <tr>
                                        <td className="px-2 w-[100px] font-semibold">Email</td>
                                        <td className="px-2">:</td>
                                        <td className="px-2 text-blue-400">UjangEnam@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 w-[100px] font-semibold">Facebook</td>
                                        <td className="px-2">:</td>
                                        <td className="px-2 text-blue-400">UjangEnam@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 w-[100px] font-semibold">Instagram</td>
                                        <td className="px-2">:</td>
                                        <td className="px-2 text-blue-400">UjangEnam@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 w-[100px] font-semibold">Role</td>
                                        <td className="px-2">:</td>
                                        <td className="px-2">Pegawai</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end my-5">
                    <Link to={'/form/ubah-biodata-guru'} className="flex items-center gap-2 p-2 bg-[#169859] rounded-md text-white active:scale-95 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        Ubah biodata
                    </Link>
                </div>

                <div className='bg-white p-5 shadow-lg rounded-b-md mt-5'>
                    <div className="mt-10 flex flex-col gap-2">
                        <div className="flex flex-col">
                            <label className="font-medium" >Nama Lengkap</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Aceng fikri</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Tempat Lahir</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Bandung</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Tanggal Lahir</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>12-21-1998</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Jenis Kelamin</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Laki-Laki</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Alamat</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>jln. Cipisung</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Kelurahan</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Andir</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Kota</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Bandung</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Provinsi</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Jawa Barat</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >No Wa</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>08978654657</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >No alternatif</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>08976656567</p>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium" >Pekerjaan</label>
                            <p className='py-2 border-b-2 border-gray-300  w-full outline-none'>Karyawan swasta</p>
                        </div>
                        <div className=''>
                            <label className='font-medium'>Foto KTP</label>
                            <div className="w-full pt-2">
                                <div className="w-[285px] h-[190px] rounded-md overflow-hidden border">
                                    <img src={foto} alt="" className="h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}



const ModalBiodata = ({ show, close }) => {

    return (
        <div className={`fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-30 justify-center items-center transition-all duration-300 ${show ? 'top-0' : ' top-[-1000px]'}`}>
            <div className='flex justify-center items-center h-full'>
                <div className='bg-white rounded max-h-[500px] p-5 w-[600px]'>
                    <h1 className='font-bold'>Edit</h1>
                    <div className='mt-5 flex flex-col gap-2'>
                        <div className="flex">
                            <label className="bg-black text-[#f3faf6] px-2 py-1 rounded-l-md  w-[250px]">
                                Nama Lengakap
                            </label>
                            <input
                                name='alamat'
                                type="text"
                                className=" w-full border border-black px-5 py-1 rounded-r-md outline-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex">
                            <label className="bg-black text-[#f3faf6] px-2 py-1 rounded-l-md  w-[250px]">
                                Email
                            </label>
                            <input
                                name='alamat'
                                type="text"
                                className=" w-full border border-black px-5 py-1 rounded-r-md outline-none"
                                placeholder="Type here.."
                            />
                        </div>


                    </div>
                    <div className="flex justify-center gap-5 mt-5">
                        <button type="submit" className="bg-[#169859] text-[#f3faf6] p-2 w-full rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                            <span>Submit</span>
                        </button>
                        <button onClick={() => close()} className="border border-[#169859] text-[#169859] p-2 w-full rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                        >
                            <span>Cancel</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ModalEditFoto = ({ show, close }) => {
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
        <div className={`fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-30 justify-center items-center transition-all duration-300 ${show ? 'top-0' : ' top-[-1000px]'}`}>
            <div className='flex justify-center items-center h-full'>
                <div className='p-5  w-[300px] bg-white rounded-md'>
                    <h1 className='font-bold'>Edit Foto</h1>
                    <div className='flex justify-center mt-5'>
                        <div className="w-full">
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
                    </div>
                    <div className="flex justify-center gap-5 mt-5">
                        <button type="submit" className="bg-[#169859] text-[#f3faf6] p-2 w-full rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150">
                            <span>Submit</span>
                        </button>
                        <button onClick={() => close()} className="border border-[#169859] text-[#169859] p-2 w-full rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150"
                        >
                            <span>Cancel</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BiodataGuru