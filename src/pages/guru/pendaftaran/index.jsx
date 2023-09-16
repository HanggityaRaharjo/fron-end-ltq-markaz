import React, { useEffect, useState } from 'react'
import Layout from '../../../layouts/Layout'
import axios from 'axios'

function PendaftaranGuru() {
    const [file, setFile] = useState(null);
    const [imagePreviewSelfi, setImagePreviewSelfi] = useState("");
    const [imagePreviewKtp, setImagePreviewKtp] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFileChangeSelfi = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewSelfi(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setImagePreviewSelfi("");
        }

        // Checking if the selected file is an image
        if (selectedFile && selectedFile.type.split("/")[0] !== "image") {
            setErrorMessage("File harus berupa gambar.");
        } else {
            setErrorMessage("");
        }
    };

    const handleFileChangeKtp = (e) => {
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



    const HandleSubmit = (e) => {

        function ubahFormatTanggalNumerik(tanggal) {
            const tanggalArr = tanggal.split("-");
            const tahun = tanggalArr[0];
            const bulan = tanggalArr[1];
            const tanggalBaru = tanggalArr[2];

            const hasil = `${tahun}-${bulan}-${tanggalBaru}`;
            return hasil;
        }

        e.preventDefault();
        // console.log(e.target['provinsi'].value);
        axios.post('http://192.168.0.15:8000/api/guru/biodata-guru/create', {
            uuid: "19d7cb21-3dfd-482e-8bb3-e776b600e407",
            full_name: e.target['full_name'].value,
            usia: e.target['usia'].value,
            jenis_kelamin: e.target['jenis_kelamin'].value,
            tanggal_lahir: ubahFormatTanggalNumerik(e.target['tanggal_lahir'].value),
            alamat: e.target['alamat'].value,
            provinsi: e.target['provinsi'].value,
            kabupaten_kota: e.target['kabupaten'].value,
            kecamatan: e.target['kecamatan'].value,
            kelurahan: e.target['kelurahan'].value,
            no_wa: e.target['no_wa'].value,
            no_alternatif: e.target['no_alternatif'].value,
            photo: e.target['photo_selfi'].files[0],
            photo_ktp: e.target['photo_ktp'].files[0]

        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4wLjE1OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjkyNzc4ODU5LCJleHAiOjYxNjkyNzc4Nzk5LCJuYmYiOjE2OTI3Nzg4NTksImp0aSI6Ilg2VnRjWDhpUGU4akhrWjYiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsInJvbGVzIjpbImFkbWluY2FiYW5nIl19.Xt8UZJN8djhaeOno9BKFadWcpVeWcSKssorjG_GFmYk`
            }
        }).then((response) => {
            console.log(response);
        })
    }



    return (
        <Layout>
            <section>
                <div className='flex flex-col gap-2 bg-white shadow-md p-5 rounded-md'>
                    <h1 className='font-bold text-xl'>Pendaftaran Guru</h1>
                    <hr className='border-black' />
                    <p className="bg-[#5FB68A80] px-5 py-2 rounded-md">Lengkapi form pendaftaran dengan lengkap</p>
                </div>
                <div className="flex flex-col gap-2 bg-white shadow-md rounded-md p-5 mt-10">
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
        <div className='mt-10 bg-white shadow-md rounded-md p-5'>
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

export default PendaftaranGuru