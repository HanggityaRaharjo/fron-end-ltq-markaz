import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../layouts/Layout";
import BRI from "../../assets/logo/BRI.png";
import BSI from "../../assets/logo/BSI.png";
import BCA from "../../assets/logo/BCA.png";
import axios from "axios";

function Pembayaran() {
    const [dataProgramPembayaran, setDataProgramPembayaran] = useState([]);
    const [dataPembayan, setDataPembayaran] = useState([]);
    const [userSelectBank, setUserSelectBank] = useState("");
    const [modalShow, setModalShow] = useState(false);

    let total = 0;

    console.log(userSelectBank);

    dataProgramPembayaran &&
        dataProgramPembayaran.map((item) => {
            total = total + parseInt(item.program_harga.harga);
        });

    const GetBankTransferData = () => {
        axios
            .get("http://192.168.43.81:8000/api/pembayaran", {
                headers: {
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC40My44MTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTY5MTI0NTY0NCwiZXhwIjo2MTY5MTI0NTU4NCwibmJmIjoxNjkxMjQ1NjQ0LCJqdGkiOiJzVTUyYU5hSnprUUZHMWVKIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJyb2xlcyI6WyJhZG1pbmNhYmFuZyJdfQ._2usbQH10LtAhc9o3EhwDJdoFqcellQ2hGJYl9k8Lg0`,
                },
            })
            .then((response) => {
                console.log(response.data.data, "sampe di data bank");
                setDataPembayaran(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const GetUserProgramData = () => {
        axios
            .get("http://192.168.43.81:8000/api/user-program/", {
                headers: {
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC40My44MTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTY5MTI0NTY0NCwiZXhwIjo2MTY5MTI0NTU4NCwibmJmIjoxNjkxMjQ1NjQ0LCJqdGkiOiJzVTUyYU5hSnprUUZHMWVKIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJyb2xlcyI6WyJhZG1pbmNhYmFuZyJdfQ._2usbQH10LtAhc9o3EhwDJdoFqcellQ2hGJYl9k8Lg0`,
                },
            })
            .then(({ data }) => {
                console.log(data, "program data");
                setDataProgramPembayaran(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        GetBankTransferData();
        GetUserProgramData();
    }, []);

    const HandlePembayaran = (id) => {
        setUserSelectBank(id);
        setModalShow(true);

        // axios.post('http://192.168.43.81:8000/api/program-pembayaran', {

        // }, {
        //     headers: {
        //         Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC40My44MTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTY5MTI0NTY0NCwiZXhwIjo2MTY5MTI0NTU4NCwibmJmIjoxNjkxMjQ1NjQ0LCJqdGkiOiJzVTUyYU5hSnprUUZHMWVKIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJyb2xlcyI6WyJhZG1pbmNhYmFuZyJdfQ._2usbQH10LtAhc9o3EhwDJdoFqcellQ2hGJYl9k8Lg0`
        //     }
        // })
        //     .then(response => {
        //         console.log(response);
        //     }).catch(error => {
        //         console.error('Error fetching data:', error);
        //     });
        console.log("samppe sini");
    };

    return (
        <Layout>
            <ModalConfirmation
                show={modalShow}
                changeModal={setModalShow}
                data={userSelectBank}
            />
            <section className="min-h-screen font-poppins">
                <div className="w-full mb-5 bg-white min-h-[100px] shadow-md rounded-lg">
                    <div className="text-2xl font-bold p-5">Program</div>
                    <hr />
                    <div className="p-5">
                        {dataProgramPembayaran &&
                            dataProgramPembayaran.map((item, index) => (
                                <div key={index} className="grid grid-cols-1">
                                    <div className="w-full flex">
                                        <p className="w-56 font-semibold mb-5">Nama Program</p>
                                        <p>: {item.program.program_name}</p>
                                    </div>
                                    <div className="w-full flex">
                                        <p className="w-56 font-semibold mb-5">Nama Peserta</p>
                                        <p>: {item.users.name}</p>
                                    </div>
                                    <div className="w-full flex">
                                        <p className="w-56 font-semibold mb-5">Email</p>
                                        <p>: {item.users.email}</p>
                                    </div>
                                    <div className="w-full flex">
                                        <p className="w-56 font-semibold mb-5">Email</p>
                                        <p>: {item.users.email}</p>
                                    </div>
                                    <div className="w-full flex">
                                        <p className="w-56 font-semibold mb-5">Cabang</p>
                                        <p>: {item.users.email}</p>
                                    </div>
                                    <div className="w-full flex">
                                        <p className="w-56 font-semibold mb-5">Tanggal</p>
                                        <p>: {item.created_at}</p>
                                    </div>
                                    <div className="w-full flex">
                                        <p className="w-56 font-semibold mb-5">Deskripsi</p>
                                        <p>: {item.program.program_name}</p>
                                    </div>
                                    <div className="flex  justify-end gap-5">
                                        <h1 className="font-bold">Total yang harus dibayar</h1>
                                        <span className="">Rp.{total}</span>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <h4 className="text-2xl font-bold mb-5">Opsi Pembayaran</h4>
                <div className="grid grid-cols-3 gap-5">
                    {dataPembayan &&
                        dataPembayan.map((item) => (
                            <button
                                onClick={() => HandlePembayaran(item.id)}
                                className=" h-[200px] flex justify-center items-center relative rounded-md bg-white shadow-md hover:scale-105 transition duration-150"
                            >
                                <div className="flex justify-center items-center h-[100px] w-[150px] ">
                                    <img
                                        src={`http://192.168.43.81:8000/storage/${item.type_bank}`}
                                        alt=""
                                        className="h-full w-full"
                                    />
                                </div>
                                <span className="absolute bottom-0 bg-slate-400 text-white w-full text-center py-2 rounded-b-md">
                                    No.Rekening {item.norek}
                                </span>
                            </button>
                        ))}
                </div>
            </section>
        </Layout>
    );
}

const ModalConfirmation = ({ show, changeModal, data }) => {
    console.log(data, "modal");

    const HandleNextPost = () => {
        axios
            .post(
                "http://192.168.43.81:8000/api/program-pembayaran",
                {},
                {
                    headers: {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC40My44MTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTY5MTI0NTY0NCwiZXhwIjo2MTY5MTI0NTU4NCwibmJmIjoxNjkxMjQ1NjQ0LCJqdGkiOiJzVTUyYU5hSnprUUZHMWVKIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJyb2xlcyI6WyJhZG1pbmNhYmFuZyJdfQ._2usbQH10LtAhc9o3EhwDJdoFqcellQ2hGJYl9k8Lg0`,
                    },
                }
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <div
            className="fixed z-[1000] left-0 top-0 h-screen w-screen bg-black bg-opacity-50 justify-center items-center"
            style={{ display: show ? "flex" : "none" }}
        >
            <div className="w-96 h-56 bg-white rounded-lg flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-5">Apakah anda yakin?</h2>
                <div className="flex gap-5 items-center translate-y-5">
                    <button className="bg-green-700 rounded-lg px-5 py-2 text-white min-w-[100px]">
                        Ya
                    </button>
                    <button
                        onClick={() => changeModal(false)}
                        className="bg-green-700 rounded-lg px-5 py-2 text-white min-w-[100px]"
                    >
                        Batal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pembayaran;
