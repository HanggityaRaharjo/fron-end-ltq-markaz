import React, { useEffect, useState } from 'react'
import Layout from '../../../layouts/Layout'
import foto from '../../../assets/founder/founder.jpg'

function BiodataPegawai() {
    const [showModal, setShowModal] = useState(false)
    const [showEditFoto, setShowEditFoto] = useState(false)

    const HandleEdit = () => {
        setShowModal(true)
    }

    const HandleFoto = () => {
        setShowEditFoto(true)
    }

    return (
        <Layout>
            <ModalBiodata
                show={showModal}
                close={setShowModal}
            />
            <ModalEditFoto
                show={showEditFoto}
                close={setShowEditFoto}
            />
            <section className='p-5'>
                <div className='flex'>
                    <div className='w-1/2'>
                        <div className='bg-white p-2 shadow-md mr-2'>
                            <div className='flex gap-10 justify-center items-center h-[200px]'>
                                <div className='h-full w-[200px] rounded-full bg-gray-500 overflow-hidden object-cover'>
                                    <img src={foto} alt="" className='object-cover h-full' />
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <h1 className='font-bold'>
                                    Ujang
                                </h1>
                            </div>
                            <table className='mt-5'>
                                <tr>
                                    <td className='p-2 w-[150px] font-bold'>Bagian</td>
                                    <td className='p-2'>:</td>
                                    <td className='p-2'>Tu</td>
                                </tr>
                                <tr>
                                    <td className='p-2 font-bold'>Email</td>
                                    <td className='p-2'>:</td>
                                    <td className='p-2'>Ujang@gmail.com</td>
                                </tr>
                            </table>
                            <div className='flex justify-end'>
                                <button
                                    onClick={() => HandleFoto()}
                                    className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-20 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='bg-white p-2 shadow-lg rounded-md'>
                            <table className=''>
                                <tr>
                                    <td className='p-2 w-[150px] font-bold'>Nama Lengkap</td>
                                    <td className='p-2'>:</td>
                                    <td className='p-2'>Ujang Enam</td>
                                </tr>
                                <tr>
                                    <td className='p-2 font-bold'>Email</td>
                                    <td className='p-2'>:</td>
                                    <td className='p-2'>Ujang@gmail.com</td>
                                </tr>
                                <tr>
                                    <td className='p-2 font-bold'>Phone</td>
                                    <td className='p-2'>:</td>
                                    <td className='p-2'>089767856466</td>
                                </tr>
                                <tr>
                                    <td className='p-2 font-bold'>Alamat</td>
                                    <td className='p-2'>:</td>
                                    <td className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quaerat corporis possimus, ad velit eum!</td>
                                </tr>
                            </table>
                            <div className='flex justify-end'>
                                <button onClick={() => HandleEdit()} className='bg-[#169859] text-sm text-[#f3faf6] p-1 w-20 rounded-md font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                                    Edit
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </Layout>
    )
}

const ModalBiodata = ({ show, close }) => {

    return (
        <div className='fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-40 justify-center items-center'
            style={{ display: show ? "flex" : "none" }}>
            <div className='flex justify-center items-center h-full'>
                <div className='bg-white rounded  max-h-[500px] p-5'>
                    <h1 className='font-bold'>Edit</h1>
                    <div className='mt-5 flex flex-col gap-2'>
                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                                Nama Lengakap
                            </label>
                            <input
                                name='alamat'
                                type="text"
                                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                Email
                            </label>
                            <input
                                name='alamat'
                                type="text"
                                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                No
                            </label>
                            <input
                                name='alamat'
                                type="text"
                                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                Alamat
                            </label>
                            <input
                                name='alamat'
                                type="area"
                                className=" w-full border border-[#169859]  px-5 h-20 rounded-lg rounded-tl-none"
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
        <div className='fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-40 justify-center items-center'
            style={{ display: show ? "flex" : "none" }}>
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

export default BiodataPegawai