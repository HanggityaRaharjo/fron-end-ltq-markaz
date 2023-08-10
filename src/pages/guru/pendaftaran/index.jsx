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
        console.log(e.target['photo_ktp'].files[0]);
        axios.post('http://192.168.43.81:8000/api/biodata-guru/create', {
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
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC40My44MTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTY5MTMwNDEzOCwiZXhwIjo2MTY5MTMwNDA3OCwibmJmIjoxNjkxMzA0MTM4LCJqdGkiOiJ4ZUNLRlRzMmVWbWczRktVIiwic3ViIjoiOCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJyb2xlcyI6W119.TSwD4KAZGb9hHB8Ch2bACJylqj5Dr3VxSBXGNM8NkMA`
            }
        }).then((response) => {
            console.log(response);
        })
    }



    return (
        <Layout>
            <section className='p-5 bg-white'>
                <div>
                    <h1>Pendaftaran</h1>
                </div>
                <form method='post' onSubmit={((e) => HandleSubmit(e))}>
                    <div className='grid grid-cols-1 gap-2 mt-10'>
                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                                Nama Lengkap
                            </label>
                            <input
                                name='full_name'
                                type="text"
                                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                                Usia
                            </label>
                            <input
                                name='usia'
                                type="text"
                                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40 relative">
                                jenis Kelamiin
                                <span className="absolute pl-5">*</span>
                            </label>
                            <select
                                name="jenis_kelamin"
                                className="h-10 w-full border border-[#169859]  px-5 rounded-lg rounded-tl-none"
                            >
                                <option value="">Pilih opsi...</option>
                                <option value="laki-laki">Laki-laki</option>
                                <option value="perempuan">Perempuan</option>

                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                Tanggal Lahir
                            </label>
                            <input
                                name='tanggal_lahir'
                                type="date"
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

                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                Provinsi
                            </label>
                            <input
                                name='provinsi'
                                type="text"
                                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-40">
                                Kabupaten/Kota
                            </label>
                            <input
                                name='kabupaten'
                                type="text"
                                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                Kecamatan
                            </label>
                            <input
                                name='kecamatan'
                                type="text"
                                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                Kelurahan
                            </label>
                            <input
                                name='kelurahan'
                                type="text"
                                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                No Wa
                            </label>
                            <input
                                name='no_wa'
                                type="number"
                                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="bg-[#169859] text-[#f3faf6] px-2 rounded-t-lg  w-32">
                                No Alternatif
                            </label>
                            <input
                                name='no_alternatif'
                                type="number"
                                className=" w-full border border-[#169859]  px-5 h-10 rounded-lg rounded-tl-none"
                                placeholder="Type here.."
                            />
                        </div>


                        <div className='flex gap-5 mt-2'>
                            {/* image */}
                            <div className="w-1/2">
                                <div className="flex justify-center">
                                    <div className="w-full">
                                        {imagePreviewSelfi ? (
                                            <div className="flex justify-center">
                                                <div className="w-[150px] h-[150px]">
                                                    <img
                                                        name='photo'
                                                        src={imagePreviewSelfi}
                                                        alt="Preview"
                                                        className="w-[150px] h-[150px] rounded-full object-center object-cover"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex justify-center">
                                                <div className="w-[150px] h-[150px] bg-gray-200 rounded-full flex justify-center items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-20 h-20 text-gray-300"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                                            clipRule="evenodd"
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
                                                    type="file"
                                                    name="photo_selfi"
                                                    onChange={handleFileChangeSelfi}
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

                            {/* image */}
                            <div className="w-1/2">
                                <div className="flex justify-center">
                                    <div className="w-full">
                                        {imagePreviewKtp ? (
                                            <div className="flex justify-center">
                                                <div className="w-[290px] h-[150px]">
                                                    <img
                                                        src={imagePreviewKtp}
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
                                                    name='photo_ktp'
                                                    type="file"
                                                    onChange={handleFileChangeKtp}
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



                        <div className='flex justify-end mt-10'>
                            <button
                                type='subbmit'
                                className='bg-[#169859] text-sm text-[#f3faf6] px-4 py-2 rounded-full font-semibold flex justify-center items-center gap-2 active:scale-95 transition duration-150'>
                                <span>
                                    Submit
                                </span>
                            </button>
                        </div>

                    </div>
                </form>
            </section>
        </Layout>

    )
}

export default PendaftaranGuru